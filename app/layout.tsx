import GoogleAnalytics from "@/components/GoogleAnalytics";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import { FC, PropsWithChildren } from "react";

const roboto = Roboto({
  display: "swap",
  // variable: "Roboto",
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  preload: true,
});

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html
      lang="en"
      className={`bg-white text-slate-900 antialiased ${roboto.className}`}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <head>
        <GoogleAnalytics />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen font-normal">
        {children}
        <Toaster />
        <TailwindIndicator />
      </body>
    </html>
  );
};

export default RootLayout;
