"use client";
import { useEffect, useState } from "react";
import Button from "./ui/Button";

interface SocialSignUpProps {
  title?: string;
}

export default function SocialSignUp({ title }: SocialSignUpProps) {
  const [terms, setTerms] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setIsError(false);
  }, [terms]);
  return (
    <div className="@container">
      {/* {title && (<p className="@2xl:text-center text-gray-600 text-[18px]">{title}</p>)} */}
      <div className="flex @2xl:justify-evenly gap-4 @xl:gap-10 flex-wrap mt-4">
        <div>
          <a
            href="https://chrome.google.com/webstore/detail/sales-fuel-%E2%80%93-access-b2b-c/emdakjpcbpbkpjnpmddfjkhdlfoinola"
            target="_blank"
            title="Get sales fuel chrome extension"
          >
            <Button className="w-40">Get Free Extension</Button>
          </a>
          {/* <SmallInputWithButton terms={terms} setIsError={setIsError} /> */}
        </div>
        {/* <p className="text-gray-600 align-middle mt-2">OR</p> */}
        {/* <div>
          <div className="flex gap-8">
            <SocialLoginButtons terms={terms} setIsError={setIsError} />
          </div>
          <div className="text-sm mt-2  text-gray-500 ml-2">
            <input
              type={"checkbox"}
              checked={terms}
              onChange={() => setTerms(!terms)}
              className="mr-2"
            />
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
            {isError && (
              <p className="text-sm text-red-600 ml-6 mt-1">
                You must accept the terms in order to proceed
              </p>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
}
