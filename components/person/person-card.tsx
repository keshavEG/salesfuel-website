"use client";
import NoUser from "@/assets/no-user.png";
import EmailIcon from "@/components/icons/email-icon";
import PhoneIcon from "@/components/icons/phone-icon";
import { Person } from "@/global";
import { getPersonSlug } from "@/lib/utils";
import { useRouter } from "next/navigation";
import ImageWithFallback from "../image-with-fallback";

export default function PersonCard({
  person,
  isBlur,
}: {
  person: Person;
  isBlur: boolean;
}) {
  const router = useRouter();

  const slug = getPersonSlug(person);
  const fullName = `${person.firstName} ${person.lastName}`;
  const designation = person.designation?.length <= 3 ? person.designation?.toUpperCase() : person?.designation
  return (
    <div className="cursor-pointer">
      <div
        className={`rounded-lg py-4 font-normal flex ${isBlur ? "blur" : ""}`}
        onClick={() => {
          if (isBlur) return;
          router.push(`/contacts/${slug}`);
        }}
      >
        <div className="mr-3 w-[100px] flex-shrink-0">
          <ImageWithFallback
            src={person.profileImageUrl || NoUser}
            fallbackSrc={NoUser}
            alt={person.firstName}
            width={100}
            height={100}
            className="object-cover rounded-full m-auto"
          />
        </div>

        <div>
          <p className="text-primary-purple-color text-lg font-semibold capitalize">
            {fullName.toLowerCase()}
          </p>
          <p className="text-[#6B7280] text-sm font-light capitalize max-w-[160px]">
            {designation}
          </p>
          <div className="flex flex-col-reverse text-primary-purple-color cursor-pointer text-sm">
            <a className="mr-2">
              <PhoneIcon className="inline w-4 h-4 mr-2" />
              View mobile number
            </a>
            <a>
              <EmailIcon className="inline w-4 h-4 mr-2" />
              View email address
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
