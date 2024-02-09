"use client";
import { Avatar } from "flowbite-react";
export default function StaticAvatars() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar.Group>
        <Avatar
          img="https://www.flowbite-react.com/images/people/profile-picture-1.jpg"
          rounded
          stacked
        />
        <Avatar
          img="https://www.flowbite-react.com/images/people/profile-picture-2.jpg"
          rounded
          stacked
        />
        <Avatar
          img="https://www.flowbite-react.com/images/people/profile-picture-3.jpg"
          rounded
          stacked
        />
        <Avatar
          img="https://www.flowbite-react.com/images/people/profile-picture-4.jpg"
          rounded
          stacked
        />
        <Avatar.Counter href="#" total={99} />
      </Avatar.Group>
    </div>
  );
}
