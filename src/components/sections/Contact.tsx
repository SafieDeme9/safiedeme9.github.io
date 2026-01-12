import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

export default function Contact() {
  return (
    <section id="Contact" className="bg-[#E3E3E3] dark:bg-gray-800 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-500 dark:text-white mb-2">
            CONTACT
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get in Touch
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full">
                <FaLocationDot className="text-xl text-gray-700 dark:text-gray-300" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Brescia, Italy</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full">
                <MdMailOutline className="text-xl text-gray-700 dark:text-gray-300" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Mail</h3>
                <a 
                  href="mailto:sdeme1201@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  sdeme1201@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Connect with me
            </h3>
            
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/sdeme9/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/20 hover:scale-110 transition-all duration-300"
              >
                <GrLinkedin className="text-2xl text-blue-500 dark:text-gray-300" />
              </a>
              
              <a
                href="https://github.com/SafieDeme9"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300"
              >
                <FaGithub className="text-2xl text-gray-700 dark:text-gray-300" />
              </a>
              
              <a
                href="mailto:menad.othmane@gmail.com"
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-red-100 dark:hover:bg-red-900/20 hover:scale-110 transition-all duration-300"
              >
                <MdMailOutline className="text-2xl text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}