"use client";
import NoUser from "@/assets/no-user.png";
import IconText from "@/components/ui/icon-text";
import { getPersonSlug } from "@/lib/utils";
import { Button } from "flowbite-react";
import Link from "next/link";
import ImageWithFallback from "../image-with-fallback";

export default function PersonCard({
  person,
  onLocationClick,
  onDesignationClick,
}: any) {
  const company = Array.isArray(person?.companies?.companyName)
    ? person?.companies?.companyName[0]
    : person?.companies?.companyName;

  const slug = getPersonSlug(person);
  const location = [
    person.location?.city,
    person.location?.state,
    person.location?.country,
  ]
    .filter(Boolean)
    .join(", ");

  let personImage = (person?.profileImageUrl && person?.profileImageUrl !== 'NULL') ? person?.profileImageUrl : NoUser

  return (
    <div className="grid w-full gap-4 grid-cols-[120px_1fr] border-b pb-12 last:border-b-0">
      <div className="w-[120px] h-[120px]">
        <ImageWithFallback
          className="rounded-full"
          src={personImage}
          fallbackSrc={NoUser}
          alt=""
          width={120}
          height={120}
        />
      </div>
      <div className="space-y-2">
        <p className="font-semibold text-gray-700">
          {person.firstName} {person.lastName}
        </p>
        {person.designation && (
          <IconText
            icon="basil:bag-solid"
            text={person.designation || "-"}
            onClick={() => onDesignationClick(person.designation)}
          />
        )}
        {company && (
          <IconText icon="heroicons-solid:office-building" text={company} />
        )}
        {location && (
          <IconText
            icon="mdi:map-marker"
            text={location}
            onClick={() => onLocationClick(location)}
          />
        )}

        <Link
          prefetch={true}
          href={`/contacts/${slug}`}
        >
          <Button className="!mt-4" color="light" size="sm">
            View Contact
          </Button>
        </Link>
      </div>
    </div>
  );
}

PersonCard.Loading = function CompanyCardLoading() {
  return (
    <div className="grid w-full gap-4 grid-cols-[120px_1fr]">
      <div className="w-[120px] h-[120px]">
        <div className="w-full h-full bg-gray-200 animate-pulse rounded-full" />
      </div>
      <div className="space-y-2">
        <div className="w-3/4 h-4 bg-gray-200 animate-pulse rounded-full" />
        <div className="w-1/4 h-4 bg-gray-200 animate-pulse rounded-full" />
        <div className="w-1/3 h-4 bg-gray-200 animate-pulse rounded-full" />
        <div className="w-1/2 h-4 bg-gray-200 animate-pulse rounded-full" />
      </div>
    </div>
  );
};
