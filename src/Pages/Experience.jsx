import SectionTitle from "../Components/SectionTitle";
import ProjectCards from "../Components/ProjectCards";
import ExperienceCards from "../Components/ExperienceCards";

const Experience = () => {
  return (
    <div id="experience" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[800px] h-screen xl:w-[70%] relative mt-40 flex flex-col items-center justify-center pb-36">
        <div className="w-full h-[180%] mt-[-10%] mb-[-10%]">
          <SectionTitle title="EXPERIENCE" />
        </div>
        <div className="w-full h-[70%] z-10 flex justify-center">
          <div className="w-full xl:w-[70%] h-[-10%">
            <ExperienceCards />
          </div>
          <div className="absolute w-full h-full top-[100%] right-[-75%] sm:right-[-50%]">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;