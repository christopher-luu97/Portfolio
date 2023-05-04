import { AiFillCode, AiFillLayout, AiFillRead } from "react-icons/ai";
import Skills from "./skills";
import codingImg from "../public/assets/skills/coding.jpg";
import consultingImg from "../public/assets/skills/consulting.jpg";
import systemsImg from "../public/assets/skills/systems_design.jpg";
import ServiceCard from "./ServiceCard";

const SkillsSection = () => {
  return (
    <section>
      <div id="skillsExperience" className="text-center">
        <div className="shadow-lg rounded-3xl pb-10 shadow-[#75809C] bg-[#F2EEED] dark:bg-[#37668a] dark:shadow-[#E3E7EA]">
          <div className="px-10">
            <Skills />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
        <ServiceCard
          imgSrc={codingImg}
          title="Software Development"
          description="Developing applications to suit your needs."
          icon={
            <AiFillCode className="h-16 w-full pt-2 text-5xl text-[#2A4C65] dark:text-white" />
          }
        />
        <ServiceCard
          imgSrc={consultingImg}
          title="Consulting"
          description="Tailoring bespoke solutions and strategies."
          icon={
            <AiFillRead className="h-16 w-full text-5xl pt-2 flex justify-center text-[#2A4C65] dark:text-white" />
          }
        />
        <ServiceCard
          imgSrc={systemsImg}
          title="Systems Design"
          description="Designing robust systems from ideation to production."
          icon={
            <AiFillLayout className="h-16 w-full text-5xl flex justify-center text-[#2A4C65] dark:text-white" />
          }
        />
      </div>
    </section>
  );
};

export default SkillsSection;
