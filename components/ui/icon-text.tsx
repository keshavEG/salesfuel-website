"use client";
import { Icon } from "@iconify/react";

interface IconTextProps {
  icon: string;
  text: string;
  [x: string]: any;
}
export default function IconText({ icon, text, ...props }: IconTextProps) {
  return (
    <div className="text-gray-600 flex items-start gap-1 text-sm" {...props}>
      <Icon icon={icon} className="text-xl text-gray-500 shrink-0" />
      <p>{text}</p>
    </div>
  );
}
