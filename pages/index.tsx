import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import authorNew from 'public/authorNew.jpg';
import BlogPostCard from '../components/BlogPostCard';

export default function Home({}) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-sm  tracking-wide mb-3 text-black dark:text-white">
              Hi, my name is
            </h1>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-3  text-transparent bg-clip-text bg-gradient-to-r from-purple-github  to-coral-0">
              Debopriya Deb Roy
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Currently studing CSE at{' '}
              <span className="font-semibold   ">
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
          <div className="sm:w-[250px] w-[150px] relative mb-8 sm:mb-0 mr-auto  ">
            <Image
              alt="Debopriya Deb Roy"
              height={900}
              width={900}
              src={authorNew}
              quality={50}
              className="rounded-3xl object-cover"
            />
          </div>
        </div>

        <div className="relative inline-flex -mt-8 mb-10 group ">
          <div className="absolute transitiona-all duration-1000 opacity-10 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

          <a
            href="#"
            className="relative inline-flex items-center justify-center px-7 py-3 text-base font-semibold bg-gray-200 text-black dark:text-white transition-all duration-200 dark:bg-gray-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Download Resume
          </a>
        </div>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Projects
        </h3>
        <div className="lg:grid lg:grid-cols-2 gap-6 grid grid-cols-1 ">
          <BlogPostCard
            title="Karu Android App"
            githubLink="https://github.com/DDR13GIT/Karu_Android-app"
            youtubeLink=""
            gradient="from-[#612C67] to-[#392C67]"
            techs="Java - Firebase Auth - Firestore"
            description="Karu is an android app which is basically a buying-selling platform using firestore database to handle it's data."
          />
          <BlogPostCard
            title="Hobe Naki Tour"
            githubLink="https://github.com/DDR13GIT/Hobe_Naki_Tour"
            youtubeLink=""
            gradient="from-[#903A9A] to-[#6852B8]"
            techs="php - tailwindCSS - html - MySQL"
            description="The Tours and Travel Management System is a web-based application. The system that automates the processes and activities of a travel agency. This application provides best travelling services to the customers and travel agents."
          />
          <BlogPostCard
            title="IUMS (Integrated University Management System)"
            githubLink="https://github.com/DDR13GIT/Integrated_University_Management_System-Project"
            youtubeLink="https://youtu.be/IBckTqARD-k"
            gradient="from-[#C12D72] to-[#B85282]"
            techs="Java - JavaFx - Xampp - MySQL"
            description="IUMS is a java written, javafx powered database management system for educational institution. It includes both student and admin end user interface and controls."
          />
        </div>

        <span className="h-16" />
      </div>
    </Container>
  );
}
