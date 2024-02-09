"use client";
import GoogleIcon from "@/assets/images/googleImg.png";
import MicrosoftIcon from "@/assets/images/MsImg.png";
import IconButton from "@/components/staticPageComponents/IconButton/IconButton";
import useCurrentUser from "@/hooks/useCurrentUser";
import { SessionProvider, signIn, useSession } from "next-auth/react";

export default function SocialLoginButtons({ terms, setIsError }: any) {
  return (
    <SessionProvider
      basePath="local/api/auth"
      refetchInterval={5 * 60}
      refetchOnWindowFocus={true}
    >
      <Buttons terms={terms} setIsError={setIsError} />
    </SessionProvider>
  );
}

export function Buttons({ terms, setIsError }: any) {
  const session = useSession();
  const { user } = useCurrentUser();

  //   if (session.data && !user) {
  //     document.cookie = `contact-data-access-token=${session.data.user.accessToken}; Path=/; Expires=Thu, 01 Jan 2030 00:00:01 GMT;`;
  //     // router.refresh();
  //     window.location.reload();
  //   }
  if (session.data || user) return <></>;
  return (
    <>
      <div
        onClick={() => {
          if (!terms) return setIsError(true);
          signIn("google");
        }}
      >
        <IconButton iconName={GoogleIcon} ImageText="SIGN UP WITH GOOGLE" />
      </div>
      <div
        onClick={() => {
          if (!terms) return setIsError(true);
          signIn("azure-ad");
        }}
      >
        <IconButton
          iconName={MicrosoftIcon}
          ImageText="SIGN UP WITH MICROSOFT"
        />
      </div>
    </>
  );
}
