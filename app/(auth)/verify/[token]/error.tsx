"use client";
import Link from "next/link";

 // Error components must be Client components

export default function Error() {
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
          <div className="w-12 h-12 rounded-full bg-red-100 p-2 flex items-center justify-center mx-auto mb-6">
            {/* <svg
              aria-hidden="true"
              className="w-16 h-16 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-16 h-16 text-red-500"
            >
              <path
                fill="currentColor"
                d="M12 17q.425 0 .713-.288T13 16q0-.425-.288-.713T12 15q-.425 0-.713.288T11 16q0 .425.288.713T12 17Zm0-4q.425 0 .713-.288T13 12V8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8v4q0 .425.288.713T12 13Zm0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
              />
            </svg>
            <span className="sr-only">Failed</span>
          </div>
          <p className="text-2xl text-center tracking-tight font-bold text-gray-800 mb-2">
            Email Verification Failed
          </p>
          <p className="mb-6 text-center text-gray-500 ">
            Email verification failed or token is expired. Please try again
            later
          </p>
          {/* <Button className="block mx-auto">Login Now</Button> */}
        </div>
      </div>
    </section>
  );
}
