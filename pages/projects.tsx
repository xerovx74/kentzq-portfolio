import Link from 'next/link';

import Container from 'components/Container';

const projectsList = [
  {
    name: 'BazarSodai',
    madeWith: 'ASP. Net · MS-SQL-Server  ',
    link: 'https://github.com/DDR13GIT/BazarSodai',
    year: '2022'
  },
  {
    name: 'Protfolio_website',
    madeWith: 'Next.js, tailwindCSS, React, TypeScript',
    link: 'https://github.com/DDR13GIT/Protfolio_website',
    year: '2022'
  },
  {
    name: 'TapCounter',
    madeWith: 'Java, Android Studio',
    link: 'https://github.com/DDR13GIT/TapCounter',
    year: '2022'
  },
  {
    name: 'Hobe_Naki_Tour',
    madeWith: 'MySQL, Html, php, tailwindCSS',
    link: 'https://github.com/DDR13GIT/Hobe_Naki_Tour',
    year: '2022'
  },
  {
    name: 'E-Hospital',
    madeWith: 'MS-SQL-Server, Java, javafx',
    link: 'https://github.com/DDR13GIT/E-Hospital',
    year: '2022'
  },
  {
    name: 'Karu_Android-app',
    madeWith: 'Java, Android Studio',
    link: 'https://github.com/DDR13GIT/Karu_Android-app',
    year: '2021'
  },
  {
    name: 'AirRush_Desktop_Game',
    madeWith: 'C++, openGL',
    link: 'https://github.com/DDR13GIT/AirRush_Desktop_Game',
    year: '2020'
  },
  {
    name: 'Calculator-Android-app',
    madeWith: 'Java, Android Studio',
    link: 'https://github.com/DDR13GIT/Calculator-Android-app',
    year: '2021'
  },
  {
    name: 'Integrated_University_Management_System',
    madeWith: 'Java, JavaFx',
    link: 'https://github.com/DDR13GIT/Integrated_University_Management_System-Project',
    year: '2021'
  },
  {
    name: 'Becholor_Point',
    madeWith: 'Java, Java-Swing',
    link: 'https://github.com/DDR13GIT/Becholor_Point',
    year: '2020'
  }
];
export default function Dashboard() {
  return (
    <Container
      title="Projects – Debopriya Deb Roy"
      description="Collection of my personal projects"
    >
      <div className="flex flex-col justify-center items-start max-w-4xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is my project dashboard. Here I'll add all of my academic and
            solo projects I have done. All the details about them and video
            directly from
            <Link href="https://github.com/DDR13GIT?tab=repositories">
              <a className="text-gray-900 dark:text-gray-100 ">Github.</a>
            </Link>
          </p>
        </div>

        <div className="overflow-x-auto relative sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs font-bold text-gray-500 uppercase  dark:text-gray-400 ">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Year
                </th>
                <th scope="col" className="py-3 px-6">
                  Project Title
                </th>
                <th scope="col" className="py-3 px-6">
                  Built with
                </th>
                <th scope="col" className="py-3 px-6">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {projectsList.map((project) => (
                <tr
                  key={project.name}
                  className=" dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 font-bold "
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium  whitespace-nowrap text-cyan-500  "
                  >
                    {project.year}
                  </th>
                  <td className="py-4 px-6 dark:text-slate-100">
                    {project.name}
                  </td>
                  <td className="py-4 px-6 font-mono">{project.madeWith}</td>
                  <td className="py-4 px-6">
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
        </div>
      </div>
    </Container>
  );
}
