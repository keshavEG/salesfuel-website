import NoCompany from "@/assets/no-company.png";
import { slugify } from "@/lib/utils";
import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import IconText from "../ui/icon-text";

export default function CompanyCard({
  company,
  handleLocationClick,
  handleIndustryClick,
}: any) {
  const location = () => {
    const city = Array.isArray(company?.address?.city)
      ? company?.address?.city?.[0]
      : company?.address?.city;
    const state = Array.isArray(company?.address?.state)
      ? company?.address?.state?.[0]
      : company?.address?.state;
    const country = Array.isArray(company?.address?.country)
      ? company?.address?.country?.[0]
      : company?.address?.country;

    return [city, state, country].filter(Boolean).join(", ");
  };
  return (
    <div className="grid w-full gap-4 grid-cols-[120px_1fr] border-b pb-12 last:border-b-0">
      <div className="w-[120px] h-[120px] border rounded-lg">
        <Image
          className="rounded-lg"
          src={company?.logoUrl || NoCompany}
          alt=""
          width={120}
          height={120}
        />
      </div>
      <div className="space-y-2">
        <p className=" font-semibold text-gray-700">
          <Link href={`/companies/${slugify(company?.name)}-${company?.id}`}>
            {company?.name}
          </Link>
        </p>
        <IconText
          icon="mdi:map-marker"
          text={location()}
          onClick={() => handleLocationClick(location())}
        />
        <IconText
          icon="ph:users-three-fill"
          text={company?.linkedin?.employeeSizeRange || "-"}
        />
        <IconText
          icon="heroicons-solid:office-building"
          text={company?.industry || "-"}
          onClick={() => handleIndustryClick(company?.industry)}
        />
        {company?.foundedYear && (
          <IconText icon="iconamoon:flag-fill" text={company?.foundedYear} />
        )}

        <Link
          href={`/companies/${slugify(company?.name)}-${company?.id}`}
          prefetch={true}
        >
          <Button className="!mt-4" color="light" size="sm">
            View Company
          </Button>
        </Link>
      </div>
    </div>
  );
}

CompanyCard.Loading = function CompanyCardLoading() {
  return (
    <div className="grid w-full gap-4 grid-cols-[120px_1fr]">
      <div className="w-[120px] h-[120px]">
        <div className="w-full h-full bg-gray-200 animate-pulse rounded-full" />
      </div>
      <div className="space-y-2">
        <div className="w-1/2 h-4 bg-gray-200 animate-pulse rounded-full" />
        <div className="w-1/4 h-4 bg-gray-200 animate-pulse rounded-full" />
        <div className="w-1/3 h-4 bg-gray-200 animate-pulse rounded-full" />
        <div className="w-1/2 h-4 bg-gray-200 animate-pulse rounded-full" />
      </div>
    </div>
  );
};
