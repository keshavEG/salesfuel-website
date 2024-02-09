import useCurrentUser from "@/hooks/useCurrentUser";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import GoogleIcon from "./GoogleIcon.svg";
import classes from "./SigninWithGoogle.module.scss";
import RightArrowImage from '../../../assets/images/RightArrow.svg'
const SigninWithGoogle = () => {
  const session = useSession();
  const { user } = useCurrentUser();

  if (session.data || user) return <></>;

  return (
    <div className={classes["Container"]} onClick={() => signIn("google")}>
      Sign up with google
      <div><Image className={classes["ArrowImage"]} src={RightArrowImage} alt='' /></div>
      <div className={classes["PrefixIcon"]}>
        <Image src={GoogleIcon} alt="" />
      </div>
    </div>
  );
};

const SigninWithGoogleWrapper = () => {
  return (
    <SessionProvider
      basePath="local/api/auth"
      refetchInterval={5 * 60}
      refetchOnWindowFocus={true}
    >
      <SigninWithGoogle />
    </SessionProvider>
  );
};

export default SigninWithGoogleWrapper;
