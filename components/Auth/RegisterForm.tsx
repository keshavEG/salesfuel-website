"use client";
import { useToast } from "@/components/ui/use-toast";
import { Icon } from "@iconify/react";
import axios from "axios";
import { Button,Checkbox,Label,TextInput } from "flowbite-react";
import { useFormik } from "formik";
import { SessionProvider, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { boolean,object,string } from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const RegisterForm = () => {
  const registerSchema = object({
    email: string().email().required("Email is required"),
    password: string()
      .required()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /[a-zA-Z0-9]/,
        "Password must contain at least 1 letter and 1 number"
      ),
    firstName: string().required("First name is required"),
    lastName: string().required("Last name is required"),
    jobTitle: string().required("Job title is required"),
    terms: boolean().oneOf([true],"You must accept the terms and conditions"),
    phone: string()
      .required()
      .matches(phoneRegExp, "Phone number is not valid"),
  });
  const { toast } = useToast();
  const router = useRouter();

  const handleRegisterSubmit = async (values: any) => {
    try {
      delete values.terms;
      const res = await axios.post("/api2/auth/register", values);
      toast({
        title: "Account created.",
        description: res.data.message,
      });
      router.push("/login");
    } catch (err: any) {
      toast({
        title: "Account creation failed.",
        description: err.response.data.error.message,
        variant: "destructive",
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      jobTitle: "",
      phone: "",
      terms: true,
    },
    validationSchema: registerSchema,
    onSubmit: handleRegisterSubmit,
  });

  return (
    <SessionProvider
      // In case you use a custom path and your app lives at "/cool-app" rather than at the root "/"
      basePath="local/api/auth"
      // Re-fetch session every 5 minutes
      refetchInterval={5 * 60}
      // Re-fetches session when window is focused
      refetchOnWindowFocus={true}
    >
      <form className="space-y-4 md:space-y-2" onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="firstName" value="First Name" />
            </div>
            <TextInput
              id="firstName"
              placeholder="Enter first name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
            />
            <small className="text-red-600 ">
              {formik.touched.firstName && formik.errors.firstName}
            </small>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="lastName" value="Last Name" />
            </div>
            <TextInput
              id="lastName"
              placeholder="Enter last name"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
            />
            <small className="text-red-600 ">
              {formik.touched.lastName && formik.errors.lastName}
            </small>
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Business Email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="john@example.com"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          <small className="text-red-600 ">
            {formik.touched.email && formik.errors.email}
          </small>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="jobTitle" value="Job Title" />
            </div>
            <TextInput
              id="jobTitle"
              placeholder="Enter job title"
              onChange={formik.handleChange}
              value={formik.values.jobTitle}
              onBlur={formik.handleBlur}
            />
            <small className="text-red-600 ">
              {formik.touched.jobTitle && formik.errors.jobTitle}
            </small>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Phone Number" />
            </div>
            <TextInput
              id="phone"
              placeholder="(555) 555-5555"
              onChange={formik.handleChange}
              value={formik.values.phone}
              onBlur={formik.handleBlur}
            />
            <small className="text-red-600 ">
              {formik.touched.phone && formik.errors.phone}
            </small>
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            id="password"
            type="password"
            placeholder="Enter new password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          <small className="text-red-600 ">
            {formik.touched.password && formik.errors.password}
          </small>
        </div>
        <div>
          <div className="flex items-center gap-1 mt-2 ">
            <Checkbox
              defaultChecked
              id="accept"
              onChange={(e) => formik.setFieldValue("terms", e.target.checked)}
              value={+formik.values.terms}
              onBlur={formik.handleBlur}
            />
            <Label
              htmlFor="accept"
              className=" !text-gray-500 !text-xs !font-normal ml-2"
            >
              By signing up, I agree to Sales Fuel's{" "}
              <Link
                href="/terms-and-conditions"
                className="font-semibold hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy-policy"
                className="font-semibold hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </Label>
          </div>
          <small className="text-red-600 ">
            {formik.touched.terms && formik.errors.terms}
          </small>
        </div>
        <Button
          disabled={formik.isSubmitting}
          className="bg-primary hover:!bg-primary/80 w-full !mt-5"
          type="submit"
        >
          {formik.isSubmitting ? "Creating account...." : " Create account"}
        </Button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Log in here
          </Link>
        </p>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            or register with
          </span>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <Button
            outline
            color="light"
            className="w-fit"
            onClick={() =>
              signIn("google", {
                redirect: false,
              })
            }
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

export default RegisterForm;
