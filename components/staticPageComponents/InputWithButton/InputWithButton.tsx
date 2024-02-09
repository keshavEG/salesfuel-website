"use client"
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./InputWithButton.module.css";

const InputWithButton: React.FC = () => {
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
    <div className={styles["InputContainer"]}>
      <input
        type="text"
        placeholder="Enter your email"
        className={styles["InputField"]}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className={styles["Button"]}
        onClick={sendEmail}
        disabled={loading}
      >
        {loading ? "Loading..." : "Get Extension"}
      </button>
    </div>
  );
};

export default InputWithButton
