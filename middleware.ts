import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getAbsoluteURL } from "./lib/utils";

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req });
    const isAuth = !!token;
    const isAuthPage =
      req.nextUrl.pathname.startsWith("/login") ||
      req.nextUrl.pathname.startsWith("/register");

    // Rewrite for sitemaps
    // console.log("im middleware");
    if (req.nextUrl.pathname.includes("sitemap")) {
      const url = `${process.env["API_BASE_URL"]}/sitemap/${req.nextUrl.pathname}`;
      // console.log(url)
      return NextResponse.rewrite(url);
    }

    // console.log("Im middleware");
    const cookies = req.headers.get("cookie");
    if (cookies && !isAuth) {
      const tokenCookie = cookies
        .split(";")
        .find((c) => c.includes("contact-data-access-token"));

      // console.log(getAbsoluteURL("/local/api/auth/csrf"));
      const accessToken = tokenCookie?.split("=")[1];
      try {
        const csrfRes = await fetch(getAbsoluteURL("/local/api/auth/csrf"));
        const csrfJson = await csrfRes.json();
        const csrfToken = csrfJson.csrfToken;

        const csrfCookies = csrfRes.headers.get("set-cookie");
        const csrfCookiesValue = csrfCookies
          ?.split(";")
          .find((c) => c.includes("next-auth.csrf-token"))
          ?.split("=")[1];

        // get cookies

        // console.log(csrfToken);
        // console.log('csrf', csrfCookiesValue);
        // console.log(accessToken);

        // post to /api/auth/callback/myProvider x-www-form-urlencoded
        const payload = {
          csrfToken: csrfToken!,
          email: accessToken!,
          password: "123456",
          json: "true",
        };
        // console.log(payload);
        const res = await fetch(
          getAbsoluteURL("/local/api/auth/callback/myProvider"),
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Cookie: `__Host-next-auth.csrf-token=${csrfCookiesValue};`,
            },
            body: new URLSearchParams(payload).toString(),
          }
        );
        // console.log(await res.json());
        // console.log(res.headers.get("set-cookie"));

        // get cookies from res
        const responseCookies = res.headers.get("set-cookie");
        // console.log("response cookie", responseCookies);

        const response = NextResponse.next();
        response.headers.set("set-Cookie", responseCookies!);
        return response;
      } catch (e) {
        console.log(e);
      }
    }

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/", req.url));
      }
      return null;
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      async authorized() {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
