//guestbook is now beign used for academics details. so everytime we want to use this page we have to change the name later.

import Container from 'components/Container';
export default function GuestbookPage({ fallbackData }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Academic Details
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This is my personal dashboard, built with Next.js API routes deployed
          as serverless functions. I use this dashboard to track various metrics
          across platforms like Unsplash, YouTube, GitHub, and more. Want to
          build your own? Check out my&nbsp;
        </p>

        <h3 className="font-bold text-lg md:text-2xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Bachelor in Engineering
        </h3>
        <p className="text-gray-600 dark:text-gray-400 ">
          Department of Computer Science and Engineering (CSE)
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-4 ">
          Ahsanullah University of Science and Technology (AUST) [2019 -
          Present]
        </p>
        <p className="  text-gray-600 dark:text-gray-400 mb-4  font-bold ">
          CGPA 3.60/4.0
        </p>

        <h3 className="font-bold text-lg md:text-2xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Higher Secondary School Certificate
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Science
          <br></br>
          Dhaka City College (DCC) [2016 - 2018]
        </p>
        <p className="  text-gray-600 dark:text-gray-400 mb-4  font-bold ">
          GPA 5.00/5.00
        </p>

        <h3 className="font-bold text-lg md:text-2xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Secondary School Certificate
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Science
          <br></br>
          St. Gregory's High School and College (SGHS) [2006 - 2016]
        </p>
        <p className="  text-gray-600 dark:text-gray-400 mb-4  font-bold ">
          GPA 5.00/5.00
        </p>

        <span className="h-16" />
      </div>
    </Container>
  );
}
