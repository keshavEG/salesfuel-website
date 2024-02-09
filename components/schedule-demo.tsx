"use client";

import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { Button,Label,Modal,TextInput } from "flowbite-react";
import { useFormik } from "formik";
import { createRef,useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { object,string } from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const scheduleDemoSchema = object({
  name: string().required("Name is required"),
  email: string().email().required("Email is required"),
  phone: string().required().matches(phoneRegExp, "Phone number is not valid"),
  company: string().required("Company is required"),
  source: string(),
  code: string().required("Code is required"),
});

export default function ScheduleDemo() {
  const [show, setShow] = useState(false);
  const recaptchaRef: any = createRef();
  const { toast } = useToast();

  const handleSubmit = async (values: any) => {
    try {
     await axios.post("/api2/auth/schedule-demo", values);
      toast({
        title: "Thank you! We will be in touch soon.",
        description: "",
      });

      recaptchaRef.current.reset();
      setShow(false);
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
      source: "",
      code: "",
    },
    validationSchema: scheduleDemoSchema,
    onSubmit: async (values) => {
      await handleSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <>
      <a
        href="https://chrome.google.com/webstore/detail/sales-fuel-%E2%80%93-access-b2b-c/emdakjpcbpbkpjnpmddfjkhdlfoinola"
        target="_blank"
        title="Get sales fuel chrome extension"
      >
        <Button
          size="sm"
          // onClick={() => setShow(true)}
          // color="dark"
          className="mr-4 w-full md:w-fit md:rounded-none !bg-color-4 hover:!bg-color-7"
        >
          Get Free Extension
        </Button>
      </a>
      <Modal show={show} size="md" popup={true} onClose={() => setShow(false)}>
        <Modal.Header>
          <div className="px-6 py-4">
            <h3 className="text-xl font-bold text-gray-700 ">
              Schedule a demo with us
            </h3>
          </div>
        </Modal.Header>
        <Modal.Body>
          <form className="space-y-3 px-4 pb-4" onSubmit={formik.handleSubmit}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Name" />
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
                <Label htmlFor="email" value="Email" />
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
            <div className="!mt-6">
              <ReCAPTCHA
                sitekey={process.env["NEXT_PUBLIC_RECAPTCHA_SITE_KEY"]!}
                onErrored={() => recaptchaRef.current.reset()}
                onChange={(captchaCode) =>
                  formik.setFieldValue("code", captchaCode)
                }
                ref={recaptchaRef}
              />
            </div>

            <div className="w-full !mt-8">
              <Button
                className="!bg-blue-700 hover:!bg-blue-800 w-full"
                disabled={!formik.isValid || formik.isSubmitting}
                type="submit"
              >
                {formik.isValid}
                {formik.isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
