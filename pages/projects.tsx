import Link from 'next/link';
import Image from 'next/image';
import Container from 'components/Container';
import airRush from 'public/Airrush.png';
import calculatorApp from 'public/calculatorapp.jpeg';
import iums from 'public/iums.png';
import karu from 'public/karu.png';
import tapcounter from 'public/tapcounter.png';
import portfolio from 'public/portfolio.png';
import unavailable from 'public/unavailable.png';

const projectsList = [
  
  {
    name: 'Protfolio_website',
    madeWith: 'Next.js, tailwindCSS, React, TypeScript',
    link: 'https://github.com/DDR13GIT/Protfolio_website',
    year: '2022',
    contentDescription:
      'My portfolio built with Next.js, Tailwind. It contains my projects, academic information, and work experience and many more.',
    imagelink: portfolio
  },
  {
    name: 'TapCounter',
    madeWith: 'Kotlin, Android Studio, Material Design 3',
    link: 'https://github.com/DDR13GIT/TapCounter',
    year: '2022',
    contentDescription:
      'Tap Counter is the ultimate tap counting app with a stunning Material 3 design. Count taps with ease, and unlock advanced features like reverse count, lock/unlock count, and reset. Keep track of your workout reps, daily water intake, or office coffee consumption with Tap Counter.',
    imagelink: tapcounter
  },
  
  {
    name: 'Karu_Android-app',
    madeWith: 'Java, Android Studio',
    link: 'https://github.com/DDR13GIT/Karu_Android-app',
    year: '2021',
    contentDescription:
      'Karu is an android app which is basically a buying-selling platform using firestore database to handle its data. It has a user friendly UI and a lot of features. It has a login system, user profile, product details, product upload, product search, product cart, product order, product wishlist etc features.',
    imagelink: karu
  },
  {
    name: 'AirRush_Desktop_Game',
    madeWith: 'C, openGL, i-Graphics',
    link: 'https://github.com/DDR13GIT/AirRush_Desktop_Game',
    year: '2020',
    contentDescription:
      'AirRush is a C written, iGraphics powered desktop game. The game offers a 2D side-scrolling experience. The player controls a plane and has to avoid obstacles and collect coins. The game has a total of 2 levels. The player can choose which level he/she wants to play. The game has a high score system. The player can save their high score and view it later. The game also has a pause and resume feature.',
    imagelink: airRush
  },
  {
    name: 'Calculator-Android-app',
    madeWith: 'Java, Android Studio',
    link: 'https://github.com/DDR13GIT/Calculator-Android-app',
    year: '2021',
    contentDescription:
      'Made an simple calculator app for android using java and android studio. It can do basic calculation like addition, subtraction, multiplication, division, percentage, square root, square, cube, power, factorial, log, sin, cos, tan, inverse sin, inverse cos, inverse tan, pi, e, etc. ',
    imagelink: calculatorApp
  },
  {
    name: 'IUMS(University Management System)',
    madeWith: 'Java, JavaFx',
    link: 'https://github.com/DDR13GIT/Integrated_University_Management_System-Project',
    year: '2021',
    contentDescription:
      'IUMS is a java written, JavaFX powered database management system for educational institution. It includes both student and admin end-user interface and controls.',
    imagelink: iums
  },
  {
    name: 'Becholor_Point',
    madeWith: 'Java, Java-Swing',
    link: 'https://github.com/DDR13GIT/Becholor_Point',
    year: '2020',
    contentDescription: '',
    imagelink: unavailable
  },
  {
    name: 'BazarSodai',
    madeWith: 'ASP. Net · MS-SQL-Server',
    link: 'https://github.com/DDR13GIT/BazarSodai',
    year: '2022',
    contentDescription:
      'Bazar Sodai is an online marketplace for buying and selling food, household items, medicine, and other daily essentials. Customers can easily purchase groceries and essential products from home and have them delivered to their address. The project includes advanced modules for managing products and a powerful back-end system.',
    imagelink: unavailable
  },
  {
    name: 'Hobe_Naki_Tour',
    madeWith: 'MySQL, Html, php, tailwindCSS',
    link: 'https://github.com/DDR13GIT/Hobe_Naki_Tour',
    year: '2022',
    contentDescription:
      'The Tours and Travel Management System is a web-based application. The system that automates the processes and activities of a travel agency. This application provides best travelling services to the customers and travel agents. The goal is to design a framework by which all operation relating to travel can be carried out. Here we have two part one is admin part and other is user part. Admin can add, update& delete user, category, package. User can select travel category, package & book them.',
    imagelink: unavailable
  },
  {
    name: 'E-Hospital',
    madeWith: 'MS-SQL-Server, Java, javafx',
    link: 'https://github.com/DDR13GIT/E-Hospital',
    year: '2022',
    contentDescription: '',
    imagelink: unavailable
  },
];
export default function Dashboard() {
  return (
    <Container
      title="Projects – Debopriya Deb Roy"
      description="Collection of my personal projects"
    >
      <div className="flex flex-col justify-center items-start max-w-4xl mx-auto mb-16 ">
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Projects
        </h3>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is my project dashboard. Here I'll add all of my academic and
            solo projects I have done. All the details about them and video
            directly from
            <Link
              href="https://github.com/DDR13GIT?tab=repositories"
              className="text-gray-900 dark:text-gray-100 "
            >
              Github.
            </Link>
          </p>
        </div>

        {/* card view of projects  */}

        {/* <!-- Card Blog --> */}

        {/* <!-- Grid --> */}
        {projectsList.map((project) => (
          <div
            className="grid sm:grid-cols-2 sm:items-center gap-8 mb-8"
            key={project.name}
          >
            <div className="sm:order-2">
              <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
                <Image
                  alt="Debopriya Deb Roy headshot"
                  width={200}
                  height={200}
                  unoptimized={true}
                  src={project.imagelink}
                  className="w-full h-full absolute top-0 left-0 object-fit rounded-lg shadow-md hover:scale-105  transition-transform duration-500 ease-in-out"
                />
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:order-1">
              <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                {project.madeWith}
              </p>

              <h2 className="text-xl font-bold md:text-2xl lg:text-3xl lg:leading-tight xl:text-4xl xl:leading-tight text-gray-800 dark:text-gray-200">
                <a
                  className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
                  href={project.link}
                >
                  {project.name} (Academic Project)
                </a>
              </h2>

              <div className="mt-6 sm:mt-10 flex items-center">
                <div>
                  <p className="sm:mb-1 font-semibold text-gray-800 dark:text-gray-500 text-xs">
                    Made in year {project.year}
                  </p>
                  <p className="text-base dark:text-gray-200 text-gray-800 text-justify">
                    {project.contentDescription}
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={project.link}
                  className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
                >
                  <div className="flex items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_9914_10)">
                        <path
                          d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_9914_10">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="ml-3">View in Github</div>
                  </div>
                  <svg
                    className="mr-2"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- End Col --> */}
          </div>
        ))}
        {/* <!-- End Grid --> */}

        {/* <!-- End Card Blog --> */}

        {/* table view of projects */}

        {/* <div className="table-responsive">
        <table className="w-full text-base text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs font-bold text-gray-500 uppercase  dark:text-gray-400  tracking-wide">
            <tr>
              <th scope="col" className="py-6 ">
                Year
              </th>
              <th scope="col" className="py-6 px-8 ">
                Project Title
              </th>
              <th scope="col" className="py-6 px-8 hidden sm:block">
                Built with
              </th>
              <th scope="col" className="py-6 pl-8">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {projectsList.map((project) => (
              <tr
                key={project.name}
                className=" transform hover:scale-[1.01]  font-bold transition-all border-b border-gray-200 dark:border-gray-700"
              >
                <th scope="row" className="py-8  font-medium">
                  {project.year}
                </th>
                <td className="py-8 px-8 dark:text-slate-100 break-all">
                  {project.name}
                </td>
                <td className="py-8 px-8 font-mono hidden break-all sm:block ">
                  {project.madeWith}
                </td>
                <td className="py-8 pl-8">
                  <a
                    href={project.link}
                    className="font-medium hover:text-cyan-500"
                  >
                    {' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinejoin="round"
                      width={20}
                      height={20}
                      // strokeLinecap={round}

                      className="feather feather-github"
                    >
                      <title>GitHub</title>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
        </div> */}
      </div>
    </Container>
  );
}
