import MultiTextHeader from "@/components/MobileViewComponents/MultiTextHeader/MultiTextHeader";
import { Formik } from "formik";
import classes from "./mobileview.module.scss";

const ContactUsMobileView = () => {
  return (
    <div>
      <MultiTextHeader
        titleBlack="start using sales"
        titleBlue="fuel extension"
        description="Maximize revenue at every stage of the customer lifecycle with data-driven solutions that connect your business to buyers."
      />

      <div className="text-base">
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
      <div className={classes["FormSection"]}>
        <div className={classes["FormHeader"]}>
          Free <span className={classes["Blue"]}>Trail</span>
        </div>
        <Formik
          initialValues={{
            fullName: "",
            businessEmail: "",
            phoneNumber: "",
            jobTitle: "",
            message: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <div className={classes["FormContainer"]}>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Full Name"
                  {...formik.getFieldProps("fullName")}
                />
                {formik.touched.fullName && formik.errors.fullName ? (
                  <div className={classes["ErrorMessage"]}>
                    {formik.errors.fullName}
                  </div>
                ) : null}

                <input
                  id="businessEmail"
                  type="text"
                  placeholder="Business Email"
                  {...formik.getFieldProps("businessEmail")}
                />
                {formik.touched.businessEmail && formik.errors.businessEmail ? (
                  <div className={classes["ErrorMessage"]}>
                    {formik.errors.businessEmail}
                  </div>
                ) : null}

                <input
                  id="phoneNumber"
                  type="text"
                  placeholder="Phone Number"
                  {...formik.getFieldProps("phoneNumber")}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div className={classes["ErrorMessage"]}>
                    {formik.errors.phoneNumber}
                  </div>
                ) : null}
                <input
                  id="jobTitle"
                  type="text"
                  placeholder="Job Title"
                  {...formik.getFieldProps("jobTitle")}
                />
                {formik.touched.jobTitle && formik.errors.jobTitle ? (
                  <div className={classes["ErrorMessage"]}>
                    {formik.errors.jobTitle}
                  </div>
                ) : null}

                <textarea
                  id="message"
                  placeholder="Message"
                  {...formik.getFieldProps("message")}
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className={classes["ErrorMessage"]}>
                    {formik.errors.message}
                  </div>
                ) : null}
              </div>
              <button type="submit" className={classes["PrimaryButton"]}>
                Submit
              </button>
              <div className={classes["FormFooter"]}>
                By submitting this form, you are agreeing to Sales fuel's{" "}
                <span className={classes["Bold"]}> Privacy Policy </span>
                <span className={classes["Bold"]}>Terms of Service </span>.
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactUsMobileView;
