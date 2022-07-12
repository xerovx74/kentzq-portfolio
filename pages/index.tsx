import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-sm  tracking-wide mb-3 text-black dark:text-white">
              Hi, my name is
            </h1>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-3 text-black dark:text-white">
              Debopriya Deb Roy
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Currently studing CSE at{' '}
              <span className="font-semibold">
                Ahsanullah University Of Science and Technology
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-5">
              I'm an undergraduate student at Ahsanullah University of Science
              and Technology(AUST), pursuing B.Eng in Computer Science and
              Engineering. Also working part-time as a Java Trainer at{' '}
              <span className="font-semibold dark:text-gray-200 hover:underline">
                Nexxvali
              </span>
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Here are a few technologies I’ve been learning & working with
              recently:
              <ul className="list-inside list-disc">
                <li>JavaScript (ES6+)</li>
                <li>Node.js</li>
                <li>ASP.Net (MVC architecture)</li>
                <li>React</li>
                <li>TypeScript</li>
              </ul>
            </p>
          </div>
          <div className="w-[100px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Debopriya Deb Roy"
              height={900}
              width={900}
              src="/author.jpg"
              className="rounded-full"
            />
          </div>
        </div>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-10 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-100 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Download Resume
          </span>
        </button>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Projects
        </h3>
        <div className="lg:grid lg:grid-cols-2 gap-6 grid grid-cols-1 ">
          <BlogPostCard
            title="Download the latest Resume {last updated on 24th June, 2022}"
            slug="https://github.com/DDR13GIT/Karu_Android-app"
            gradient="from-[#D8B4FE] to-[#818CF8]"
            techs=""
            description=""
          />
          <BlogPostCard
            title="Hobe Naki Tour"
            slug="https://github.com/DDR13GIT/Karu_Android-app"
            gradient="from-[#D8B4FE] to-[#818CF8]"
            techs="php | tailwindCSS | html | mySQL"
            description="The Tours and Travel Management System is a web-based application. The system that automates the processes and activities of a travel agency. This application provides best travelling services to the customers and travel agents. The goal is to design a framework by which all operation relating to travel can be carried out. Here we have two part one is admin part and other is user part. Admin can add, update& delete user, category, package. User can select travel category, package & book them. Here we have different kind of packages & categories Main Features"
          />
          <BlogPostCard
            title="Hobe Naki Tour"
            slug="https://github.com/DDR13GIT/Karu_Android-app"
            gradient="from-[#D8B4FE] to-[#818CF8]"
            techs="php | tailwindCSS | html | mySQL"
            description="The Tours and Travel Management System is a web-based application. The system that automates the processes and activities of a travel agency. This application provides best travelling services to the customers and travel agents. The goal is to design a framework by which all operation relating to travel can be carried out. Here we have two part one is admin part and other is user part. Admin can add, update& delete user, category, package. User can select travel category, package & book them. Here we have different kind of packages & categories Main Features"
          />
        </div>
        <Link href="/projects">
          <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            See all projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>

        <span className="h-16" />
      </div>
    </Container>
  );
}
