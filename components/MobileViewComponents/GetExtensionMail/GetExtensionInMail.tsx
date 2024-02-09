"use client";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import classes from "./GetExtensionMail.module.scss";

const GetExtensionInMail = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api2/auth/send-welcome", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (res.status === 204) {
        router.push("/register?email=" + email);
      } else {
        toast({
          title: "Something went wrong.",
          description: "Please try again later.",
        });
      }
    } catch (err: any) {
      toast({
        title: "Something went wrong.",
        description: "Please try again later.",
      });
    }
    setLoading(false);
  };

  return (
    <div className={classes["Container"]}>
      <input
        type="text"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div
        className={classes["Button"]}
        onClick={loading ? () => { } : sendEmail}
      >
        {loading ? "Loading..." : "Get Extension"}
      </div>
    </div>
  );
};

export default GetExtensionInMail;
