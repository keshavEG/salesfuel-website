"use client";

import ModelContactIcon from "@/assets/images/model-img-contact.png";
import ModelProgressIcon from "@/assets/images/model-img-progress.png";
import siteConfig from "@/config/site";
import { Icon } from "@iconify/react";
import { Modal } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import HeroAnimation from "./hero-animation";

type Props = {
  show: boolean;
  setShow?: Dispatch<SetStateAction<boolean>>;
  goBack?: boolean;
  infoMessage?: string;
};

export default function LimitExceededPopup({ show, setShow, goBack = true, infoMessage }: Props) {
  const router = useRouter();
  const [showVideo, setShowVideo] = useState(false);


  const handleClose = () => {
    if (goBack) router.back();
    if (setShow) setShow(false);
  }

  // Fix body scroll issue on modal open and close
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
      setShowVideo(false);
    };
  }, [show]);

  if (!show) return null
  return (
    <div className="bg-white">
      <Modal
        show={show}
        size="4xl"
        // popup={true}
        // onClose={() => setShow(false)}
        className="!bg-gray-600/50 backdrop-blur"
      >
        <Modal.Body>
          <div className="text-right pt-4">
            <Icon
              icon="material-symbols:close"
              className="text-xl text-gray-800 cursor-pointer float-right"
              onClick={handleClose}
            />
          </div>
          {showVideo && (<div className="w-full flex flex-col">
            <HeroAnimation width="100%" height={500} />
            <button className="bg-color-4 text-white rounded-full px-10 py-2 mx-auto text-center mt-6" onClick={() => setShowVideo(false)}>
              Close
            </button>
          </div>)}
          {!showVideo && (<section>
            <div className="px-6 p-6 text-center">
              <h3 className="text-3xl font-[700] text-black tracking-tight mb-2">
                Install SalesFuel and Login
              </h3>
              <p className="text-gray-600 mb-8">
                {infoMessage || "to access more information"}
              </p>
              <div className="flex items-start justify-evenly gap-8">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-gray-600 mb-6">1. Install</p>
                  <img
                    className="w-40"
                    src="/sales-fuel-logo.png"
                    alt="Sales Fuel"
                  />
                  <Image
                    className="object-contain h-[0.8rem] mt-8"
                    src={ModelProgressIcon}
                    alt="Model Progress Icon"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-gray-600 mb-6">2. Get info!</p>
                  <Image
                    className="object-contain w-[12rem]"
                    src={ModelContactIcon}
                    alt="Model Contact Icon"
                  />
                </div>
              </div>

              <p className="text-gray-600 my-6 text-sm">
                I agree to the{" "}
                <Link className="text-color-4 hover:underline" href="/terms-and-conditions">Terms & Conditions</Link> and{" "}
                <Link className="text-color-4 hover:underline" href="/privacy-policy">Privacy Policy</Link>. I understand that I will receive a subscription from SalesFuel at no charge in exchange for downloading and installing the SalesFuel Chrome Extension. I also agree to share my business contacts, headers.
              </p>

              <a className="bg-[#F44238] text-white rounded-full px-10 py-2" href={siteConfig.chromeExtensionLink} target="_blank" title="Install Salesfuel extension">
                Install Chrome Extension
              </a>

              <div className="text-color-4 hover:underline mt-4 block cursor-pointer" onClick={() => setShowVideo(true)}>
                Learn More About How Our Chrome Extension Works
              </div>
            </div>
          </section>)}
        </Modal.Body>
      </Modal>
    </div>
  );
}
