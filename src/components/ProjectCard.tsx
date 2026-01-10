import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
export default function ProjectCard(Project: any) {
    return (
        <>
          {/*  */}
          <div className="w-full bg-white rounded-xl shadow-lg 
                  hover:shadow-xl transition-shadow duration-300 
                  p-6 transform hover:-translate-y-1">
              <div className="overflow-hidden rounded-lg">
                <img
                className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                src={Project.pic}
                alt="Project image"/>
              </div>
            <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
              <h3 className="mb-4 block text-xl font-semibold hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                  {Project.name}
              </h3>
              <p className="mb-7 text-base leading-relaxed text-body-color">
                {Project.desc}
              </p>
    
              <a
                  href={Project.git ? Project.git : "#"}
                  className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition 
                  hover:border-primary hover:bg-primary"
                >
                  <FaGithub />
                </a>
                <a
                  href={Project.link ? Project.link : "#"}
                  className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition 
                  hover:border-primary hover:bg-primary"
                >
                  <FiExternalLink />
                </a>
            </div>
          </div>
          {/*  */}
        </>
      );
}