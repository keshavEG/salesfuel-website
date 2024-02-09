"use client";

import { useState } from "react";
import LimitExceededPopup from "../limit-exceeded-popup";

export default function SearchResultReadMore() {
  const [showLimitPopup, setShowLimitPopup] = useState(false);
  return (
    <>
      <div
        className="text-primary-purple-color mb-[25px] line-clamp-3 cursor-pointer"
        onClick={() => setShowLimitPopup(true)}
      >
        Read more
      </div>
      <LimitExceededPopup show={showLimitPopup} setShow={setShowLimitPopup} />
    </>
  );
}
