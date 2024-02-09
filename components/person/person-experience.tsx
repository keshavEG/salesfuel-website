import { PersonCompany, PersonEducation } from "@/global";
import BuildingIcon from "../icons/building-icon";
import EducationIcon from "../icons/education-icon";

export default function PersonExperience({
  education,
  companies,
}: {
  education: PersonEducation[];
  companies: PersonCompany[];
}) {
  return (
    <div className="bg-[#F4F4F4] text-[#585757] w-full font-light px-5 py-6 md:px-[35px] md:py-8 rounded-xl md:rounded-2xl mb-[40px] mt-10">
      <h2 className="text-xl font-medium mb-12">
        Work Experience and Education
      </h2>
      <Education education={education} />
      <Experience companies={companies} />
    </div>
  );
}

function Education({ education }: { education: PersonEducation[] }) {
  if (!education.length) return <></>;
  return (
    <div className="my-[30px] grid md:grid-cols-2 gap-4 text-sm">
      <div className="w-full inline-block text-gray-600 font-semibold">
        <EducationIcon className="mr-2 inline w-6" />
        Education
      </div>
      <div className="flex flex-col ml-8 md:ml-0">
        {education.map((i) => (
          <div className="inline-block mb-4" key={i.degree}>
            <p className="text-gray-600 font-medium">{i.degree}</p>
            <p className="text-gray-600 capitalize">{i.organization}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Experience({ companies }: { companies: PersonCompany[] }) {
  if (!companies.length) return <></>;
  return (
    <div className="my-[30px] grid md:grid-cols-2 gap-3 text-sm">
      <div className="w-full inline-block text-gray-600 font-semibold">
        <BuildingIcon className="mr-2 inline w-6" />
        Work Experience
      </div>
      <div className="flex flex-col ml-8 md:ml-0">
        {companies.map((i) => (
          <div className="inline-block mb-4" key={i.companyId}>
            <p className="text-gray-600 font-medium capitalize">
              {i.companyName}
            </p>
            <p className="text-gray-600 capitalize">
              {i.joinedAt} - {i.leftAt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
