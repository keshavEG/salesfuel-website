import SocialSignUp from "@/components/social-signup";
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import * as Yup from "yup";
import styles from "./page.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { createRef } from "react";
import { Label, Textarea, TextInput } from "flowbite-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Business Email is required"),
  phone: Yup.string().required("Phone Number is required"),
  company: Yup.string().required("Job Title is required"),
  message: Yup.string().required("Message is required"),
  code: Yup.string().required("Please verify you are not a robot"),
});

const ContactUsDesktopView = () => {
  const { toast } = useToast();
  const recaptchaRef: any = createRef();
  const handleSubmit = async (values: any) => {
    try {
      await axios.post("/api2/auth/schedule-demo", values);
      toast({
        title: "Thank you! We will be in touch soon.",
        description: "",
      });

      recaptchaRef.current.reset();
      formik.resetForm();
    } catch (err: any) {
      toast({
        title: "Something went wrong.",
        description: err.response.data.error.message,
        variant: "destructive",
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      code: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await handleSubmit(values);
      formik.resetForm();
    },
  });


  return (
    <div>
      <div className={styles["Container"]}>
        <div className={styles["Flex"]}>
          <div className={styles["HeadingText"]}>
            <h1 className={`${styles["MainHeading"]} uppercase font-normal`}>
              Start using{" "}
              <span className={styles["HeadingTextBlue"]}>Sales Fuel</span>{" "}
              Extension
            </h1>
            <div className={styles["SubText4"]}>
              Maximize revenue at every stage of the customer lifecycle with
              data-driven solutions that connect your business to buyers.{" "}
            </div>
            <div className="text-base mb-8">
              For General:{" "}
              <a
                href="mailto:info@salesfueldata.com"
                className="hover:text-color-4 hover:font-medium"
              >
                info@salesfueldata.com
              </a>
              <br></br>
              For Marketing:
              <a
                href="mailto:marketing@salesfueldata.com"
                className="hover:text-color-4 hover:font-medium"
              >
                {" "}
                marketing@salesfueldata.com
              </a>
            </div>
            <SocialSignUp title="Gather verified email addresses & phone numbers directly from LinkedIn" />
          </div>

          <div className={styles["ImageText4"]}>
            <form className="space-y-5 px-4 pb-4 w-full" onSubmit={formik.handleSubmit}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Full Name" />
                </div>
                <TextInput
                  id="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
                <small className="text-red-600 ">
                  {formik.touched.name && formik.errors.name}
                </small>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Business Email" />
                </div>
                <TextInput
                  id="email"
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
                <div className="mb-2 block">
                  <Label
                    htmlFor="phone"
                    value="Phone number (with Country Code)"
                  />
                </div>
                <TextInput
                  id="phone"
                  type="text"
                  required={true}
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                />
                <small className="text-red-600 ">
                  {formik.touched.phone && formik.errors.phone}
                </small>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="company" value="Company Name" />
                </div>
                <TextInput
                  id="company"
                  type="text"
                  required={true}
                  onChange={formik.handleChange}
                  value={formik.values.company}
                  onBlur={formik.handleBlur}
                />
                <small className="text-red-600 ">
                  {formik.touched.company && formik.errors.company}
                </small>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="message" value="Message" />
                </div>
                <Textarea
                  id="message"
                  rows={3}
                  required={true}
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  onBlur={formik.handleBlur}
                />
                <small className="text-red-600 ">
                  {formik.touched.message && formik.errors.message}
                </small>
              </div>
              {/* <div>
              <div className="mb-2 block">
                <Label htmlFor="source" value="From where you heard about us" />
              </div>
              <TextInput
                id="source"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.source}
                onBlur={formik.handleBlur}
              />
              <small className="text-red-600 ">
                {formik.touched.source && formik.errors.source}
              </small>
            </div> */}
              <div className="!mt-6 mx-auto">
                <small className="text-red-600 ">
                  {formik.errors.code}
                </small>
                <ReCAPTCHA
                  sitekey={process.env["NEXT_PUBLIC_RECAPTCHA_SITE_KEY"]!}
                  onErrored={() => recaptchaRef.current.reset()}
                  onChange={(captchaCode) =>
                    formik.setFieldValue("code", captchaCode)
                  }
                  ref={recaptchaRef}
                />
              </div>

              <div className="w-full !mt-8 flex justify-center">
                <Button
                  className={cn("!bg-color-4 !px-14 !py-3 text-base", {
                    "opacity-50": !formik.isValid || formik.isSubmitting,
                  })}
                  disabled={!formik.isValid || formik.isSubmitting}
                  type="submit"
                >
                  {formik.isValid}
                  {formik.isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
              <div className="page_Title__5PKpp">By submitting this form, you are agreeing to Sales fuel's <span className="page_BoldText__lmL0c"> Privacy Policy </span>and <span className="page_BoldText__lmL0c"> Terms of Service </span>.</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsDesktopView;
