"use client";
import { useToast } from "@/components/ui/use-toast";
import { Icon } from "@iconify/react";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { SessionProvider,signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { object,string } from "yup";

const LoginForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const handleLoginSubmit = async (values: any) => {
    try {
      const signInResult = await signIn("credentials", {
        email: values.email.toLowerCase(),
        password: values.password,
        redirect: false,
        callbackUrl:  "/",
      });
     if(signInResult?.error) {
       toast({
         title: "Authentication failed.",
         description: "Invalid email or password.",
         variant: "destructive",
       });
       return
     }
      toast({
        title: "Authentication successful.",
        description: "We've authenticated you successfully.",
      });
      window.location.href = "/";
    } catch (err: any) {
      toast({
        title: "Authentication failed.",
        description: err.response.data.error.message,
        variant: "destructive",
      });
    }
  };

  const loginSchema = object({
    email: string().email().required("Email is required"),
    password: string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "user@example.com",
      password: "admin@123",
    },
    validationSchema: loginSchema,
    onSubmit: handleLoginSubmit,
  });

  const loginWithGoogle = async () => {
    const res = await signIn("google", {
      redirect: false,
    });
  };


  return (
    <SessionProvider
      // In case you use a custom path and your app lives at "/cool-app" rather than at the root "/"
      basePath="local/api/auth"
      // Re-fetch session every 5 minutes
      refetchInterval={5 * 60}
      // Re-fetches session when window is focused
      refetchOnWindowFocus={true}
    >
      <form
        className="space-y-4 md:space-y-6 font-normal"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          <small className="text-red-600 ">
            {formik.touched.email && formik.errors.email}
          </small>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          <small className="text-red-600 ">
            {" "}
            {formik.touched.password && formik.errors.password}
          </small>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="text-gray-500 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>
          {/* <a
          href="#"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Forgot password?
        </a> */}
        </div>
        <Button
          type="submit"
          className="bg-primary hover:!bg-primary/80 w-full"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Signing in....." : "Sign in"}
        </Button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?{" "}
          <Link
            href="/register"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Sign up
          </Link>
        </p>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            or login with
          </span>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <Button
            outline
            color="light"
            className="w-fit"
            onClick={loginWithGoogle}
          >
            <Icon icon="flat-color-icons:google" className="text-xl" />{" "}
          </Button>
          <Button
            outline
            color="light"
            className="w-fit"
            onClick={() =>
              signIn("azure-ad", {
                redirect: false,
              })
            }
          >
            <Icon icon="logos:microsoft-icon" className="text-xl" />
          </Button>
          <Button
            outline
            color="light"
            className="w-fit"
            onClick={() =>
              signIn("linkedin", {
                redirect: false,
              })
            }
          >
            <Icon icon="logos:linkedin-icon" className="text-xl" />
          </Button>
        </div>
      </form>
    </SessionProvider>
  );
};

export default LoginForm;
