"use client";
import { cn, truncate } from "@/lib/utils";
import { useState } from "react";
import LimitExceededPopup from "./limit-exceeded-popup";

export function Description({
  text = "",
  user,
  message
}: {
  text?: string;
  user?: Boolean;
  message?: string;
}) {
  const [showMore, setShowMore] = useState(false);
  const [showLimitPopup, setShowLimitPopup] = useState(false);

  const truncatedText = truncate(text, 300);

  return (
    <>
      <div
        className={cn("text-gray-500 mb-[5px] max-w-3xl")}
      >
        {showMore ? text : truncatedText}
      </div>
      {text?.length > 300 && (
        <div
          className="text-sm text-primary-purple-color cursor-pointer hover:underline"
          onClick={() => {
            if (!user) {
              setShowLimitPopup(true);
            } else {
              setShowMore(!showMore);
            }
          }}
        >
          {showMore ? "Read less" : "Read more"}
        </div>
      )}
      <LimitExceededPopup show={showLimitPopup} setShow={setShowLimitPopup} goBack={false} infoMessage={message} />
    </>
  );
}
