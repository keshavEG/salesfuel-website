import useCurrentUser from "@/hooks/useCurrentUser";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import MicrosoftIcon from "./Microsoft.svg";
import classes from "./SigninWithMicrosoft.module.scss";
import RightArrowImage from '../../../assets/images/RightArrow.svg'

const SigninWithMicrosoft = () => {
  const session = useSession();
  const { user } = useCurrentUser();

  if (session.data || user) return <></>;

  return (
    <SessionProvider
      basePath="local/api/auth"
      refetchInterval={5 * 60}
      refetchOnWindowFocus={true}
    >
      <div className={classes["Container"]} onClick={() => signIn("azure-ad")}>
        Sign in with microsoft
        <div> <Image className={classes["ArrowImage"]} src={RightArrowImage} alt='' />
        </div>
        <div className={classes["PrefixIcon"]}>
          <Image src={MicrosoftIcon} alt="" />
        </div>
      </div>
    </SessionProvider>
  );
};

const SigninWithMicrosoftWrapper = () => {
  return (
    <SessionProvider
      basePath="local/api/auth"
      refetchInterval={5 * 60}
      refetchOnWindowFocus={true}
    >
      <SigninWithMicrosoft />
    </SessionProvider>
  );
};

export default SigninWithMicrosoftWrapper;
