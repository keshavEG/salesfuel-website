import Button from "@/components/ui/Button";
import { getAbsoluteURL } from "@/lib/utils";
import Link from "next/link";

interface IVerifyProps {
  params: {
    token: string;
  };
  searchParams: {
    type: string;
  };
}
const Verify = async ({ params, searchParams }: IVerifyProps) => {
  const verifyEmail = async () => {
    let url = getAbsoluteURL(`/api2/auth/verify-email?token=${params.token}`);
    if (searchParams.type) {
      url += `&type=${searchParams.type}`;
    }

    const res = await fetch(url, {
      method: "POST",
    });
    return res.json();
  };

  const res = await verifyEmail();
  if (res.error) {
    throw new Error(res.error.message);
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-52" src="/sales-fuel-logo.png" alt="Sales Fuel" />
        </Link>
        <div className="w-full bg-white rounded-lg shadow px-10 py-16 md:mt-0 sm:max-w-md">
          <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-6">
            <svg
              aria-hidden="true"
              className="w-16 h-16 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Success</span>
          </div>
          <p className="text-2xl text-center tracking-tight font-bold text-gray-800 mb-2">
            Email Verified Successfully!
          </p>
          <p className="mb-6 text-center text-gray-500 ">
            Your email has been verified successfully. You can now login to your
            account.
          </p>
          <Link href="/login">
            <Button className="block mx-auto">Login Now</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Verify;
