import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import debProfilePicture from 'public/debProfilePicture.png';
import BlogPostCard from '../components/BlogPostCard';

export default function Home({}) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="text-3xl md:text-4xl tracking-tight mb-3 text-gray-700 dark:text-gray-200 font-serif font-thin">
              Debopriya Deb Roy
            </h1>
            <h2 className="text-gray-700 dark:text-gray-300">
              "Politeness is the flower of humanity." -Joseph Joubert
            </h2>

            {/* <div className="sm:w-[250px] w-[150px] mb-12 sm:mb-0 mr-auto  ">
            <Image
              alt="Debopriya Deb Roy"
              height={100}
              width={100}
              src={authorNew}
              quality={50}
              className="rounded-full object-cover"
            />
            </div> */}
            <div className="flex items-center space-x-4 mt-5 mb-5 ">
              <Image
                alt="Debopriya Deb Roy"
                height={100}
                width={100}
                src={debProfilePicture}
                quality={50}
                className="rounded-full object-cover"
              />
              {/* <div className="font-medium dark:text-white">
                <div>
                  <a href="https://github.com/yourusername">
                    <i className="fab fa-github"></i> 30 active repos
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/yourusername">
                    <i className="fab fa-linkedin"></i> Connected to 250 people
                  </a>
                </div>
                <div>
                  <a href="https://www.facebook.com/yourusername">
                    <i className="fab fa-facebook"></i> Connected to 250 people
                  </a>
                </div>
              </div> */}
            </div>

            <p className="text-gray-600 dark:text-gray-200 mb-5 text-justify font-normal">
              I am an undergraduate student at{' '}
              <span className="font-bold dark:text-gray-200 hover:underline">
                Ahsanullah University of Science and Technology (AUST)
              </span>{' '}
              , pursuing a Bachelor of Engineering degree in Computer Science
              and Engineering. As a Java Trainer at{' '}
              <span className="font-bold dark:text-gray-200 hover:underline ">
                Nexxvali
              </span>
              , I teach core and advanced Java concepts to individuals
              interested in becoming QA engineers, while also providing basic IT
              skills training. I am dedicated to helping my students succeed in
              their careers by providing a strong foundation in Java
              programming, emphasizing practical learning through hands-on
              projects, and staying up-to-date with the latest advancements in
              technology. As an individual, I am hardworking, committed, and
              always eager to learn and tackle new challenges in both my
              professional and academic pursuits.
            </p>
            <p className="text-gray-600 dark:text-gray-200 mb-16 text-justify font-normal">
              My research concentrates in the field of Natural Language
              Processing (NLP), my focus is on identifying and classifying
              misogynistic comments in Bangla language that are prevalent on
              social media platforms. With the rise of online harassment and
              hate speech, it has become increasingly important to develop
              automated systems that can detect and mitigate such content.
              Through my research, I aim to leverage state-of-the-art NLP
              techniques and machine learning algorithms to create an effective
              tool for detecting misogynistic language in Bangla. Ultimately, I
              hope that my work will contribute to creating a safer and more
              inclusive online environment for all.
            </p>
          </div>
        </div>

        <div className="relative inline-flex -mt-8 mb-2 group ">
          <div className="absolute transitiona-all duration-1000 opacity-10 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

          <Link
            href="#"
            className="relative inline-flex items-center justify-center p-4 text-base font-semibold bg-gray-200 text-black dark:text-white transition-all duration-200 dark:bg-gray-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Download CV
          </Link>
        </div>
        <p className="text-sm ml-2 text-gray-500 mt-2">
          (Last updated: April 24, 2023)
        </p>

        <div>
          <h3 className="font-bold text-2xl md:text-2xl tracking-tight mt-12 mb-6 text-black dark:text-white">
            Research Interest
          </h3>
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200 font-semibold">
            <li>Natural Language Processing (NLP)</li>
            <li>Human Computer Interaction (HCI)</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-2xl md:text-2xl tracking-tight mt-12 mb-6 text-black dark:text-white">
            Recent Updates
          </h3>

          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-4 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                April 2023
              </time>
              <p className="text-base font-bold text-gray-500 dark:text-gray-200">
                Currently working on a Thesis on Mysogynistic Comments
                Classification.
              </p>
            </li>
            <li className="mb-4 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                April 2023
              </time>
              <p className="text-base font-bold text-gray-500 dark:text-gray-200">
                Completed 4th year semester final exam.
              </p>
            </li>
            <li className="mb-4 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                April 2023
              </time>
              <p className="text-base font-bold text-gray-500 dark:text-gray-200">
                Working on a new channel called Deb2Dev to share my knowledge.
              </p>
            </li>
          </ol>
        </div>

        <h3 className="font-bold text-2xl md:text-2xl tracking-tight mt-12 mb-6 text-black dark:text-white">
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
