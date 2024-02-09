"use client";

import { Button, Modal } from "flowbite-react";
import {  useState } from "react";

export default function SignUpPopup() {
  const [show, setShow] = useState(false);



  return (
    <>
      <Button
        size="sm"
        onClick={() => setShow(true)}
        color="dark"
        className="mr-4"
      >
        Get Details
      </Button>
      <Modal show={show} size="md" popup={true} onClose={() => setShow(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-3 px-4 pb-4">
            <h3 className="text-2xl font-bold text-gray-700 tracking-tight mb-8">
              Install Chrome extension
            </h3>
            <a
              href="https://chrome.google.com/webstore/detail/sales-fuel-%E2%80%93-access-b2b-c/emdakjpcbpbkpjnpmddfjkhdlfoinola"
              target="_blank"
              title="Add to Chrome"
            >
              <Button type="submit" className="w-full">Add to Chrome</Button>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
