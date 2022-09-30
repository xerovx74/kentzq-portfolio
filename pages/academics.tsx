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
          I have put some academic details here including the institutions I
          have read in and some relevent details. I will be adding more updates
          in the future.
        </p>

        <h3 className="font-bold text-lg md:text-2xl tracking-tight mb-4 mt-16  flex  text-transparent bg-clip-text bg-gradient-to-r from-purple-github  to-coral-0 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            fill="white"
            className="h-8 w-8 mr-2"
          >
            <path d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z" />
          </svg>
          Bachelor in Engineering
        </h3>
        <p className="text-gray-600 dark:text-gray-400 flex">
          Ahsanullah University of Science and Technology (AUST) [2019 -
          Present]
        </p>

        <p className="text-gray-600 dark:text-gray-400 ">
          Department of Computer Science and Engineering (CSE)
        </p>

        <p className="  text-gray-600 dark:text-gray-400 mb-4  font-bold ">
          CGPA 3.60/4.0
        </p>

        <h3 className="font-bold text-lg md:text-2xl tracking-tight mb-4 mt-16  text-transparent bg-clip-text bg-gradient-to-r from-purple-github  to-coral-0 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            fill="white"
            className="h-8 w-8 mr-2"
          >
            <path d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z" />
          </svg>
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

        <h3 className="font-bold text-lg md:text-2xl tracking-tight mb-4 mt-16  flex  text-transparent bg-clip-text bg-gradient-to-r from-purple-github  to-coral-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            fill="white"
            className="h-8 w-8 mr-2"
          >
            <path d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z" />
          </svg>
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
