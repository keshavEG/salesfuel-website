"use client";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";

const ResetPasswordForm = ({ token }: { token: string }) => {
  const { toast } = useToast();
  const router = useRouter();

  const handleResetPasswordSubmit = async (values: {
    password: string;
  }) => {
    try {
      await axios.post(`/api2/auth/reset-password?token=${token}`, {
        password: values.password,
      });
      toast({
        title: "Password reset successfully",
        description: "You can now login with your new password.",
      });
      router.push("/login");
    } catch (err: any) {
      toast({
        title: "Password reset failed.",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const resetPasswordSchema = yup.object({
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /[a-zA-Z0-9]/,
        "Password must contain at least 1 letter and 1 number"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: handleResetPasswordSubmit,
  });

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          New Password
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
      <div>
        <label
          htmlFor="confirmPassword"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Confirm New Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          onBlur={formik.handleBlur}
        />
        <small className="text-red-600 ">
          {" "}
          {formik.touched.confirmPassword && formik.errors.confirmPassword}
        </small>
      </div>

      <div className="!mt-10">
        <Button
          type="submit"
          className="bg-primary hover:!bg-primary/80 w-full"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Resetting....." : "Reset Password"}
        </Button>
      </div>
      {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{" "}
        <Link
          href="/register"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Sign up
        </Link>
      </p> */}
    </form>
  );
};

export default ResetPasswordForm;
