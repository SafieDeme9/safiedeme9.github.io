import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiFlask, SiFastapi, SiMysql } from "react-icons/si";

const techStack = [
    { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" , docs: "https://developer.mozilla.org/en-US/docs/Web/HTML"},
    { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-500", docs: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-500", docs: "https://tailwindcss.com/" },
    { icon: <FaReact />, name: "React", color: "text-cyan-400", docs: "https://react.dev/" },
    { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-500", docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
    { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-600", docs: "https://www.typescriptlang.org/" },
    { icon: <FaPython />, name: "Python", color: "text-blue-700", docs: "https://www.python.org/" },
    { icon: <SiFlask />, name: "Flask", color: "text-gray-800 dark:text-gray-300", docs: "https://flask.palletsprojects.com/en/stable/" },
    { icon: <SiFastapi />, name: "FastAPI", color: "text-teal-500", docs: "https://fastapi.tiangolo.com/" },
    { icon: <SiMysql />, name: "Flask", color: "text-gray-800 dark:text-gray-300", docs: "https://www.mysql.com/" },
    { icon: <FaDocker />, name: "Docker", color: "text-blue-400", docs: "https://www.docker.com/"  },
];

export default function TechStack() {
    return (
      <div className="py-6">
        <div className="flex items-center flex-wrap gap-4">
          <div className="flex flex-row-1 gap-3 items-center min-w-0">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white whitespace-nowrap">
            Tech Stack:
          </h3>
            {techStack.map((tech, index) => (
              <a
                key={index}
                href={tech.docs}
                className="group flex items-center justify-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                title={tech.name}
                target="_blank"
              >
                <div className={`text-2xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                  {tech.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }