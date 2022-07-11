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

        <h3 className="font-bold text-lg md:text-2xl tracking-tight mb-4 mt-16 text-black dark:text-white flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            fill="currentColor"
            className="h-8 w-8 mr-2"
          >
            <path d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z" />
          </svg>
          Bachelor in Engineering
        </h3>
        <p className="text-gray-600 dark:text-gray-400 flex">
          {/* <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            className="h-5 w-5 mr-2"
          >
            <path d="M243.4 2.587c8-3.45 17.2-3.45 25.2 0l224 96.003c14 6.01 21.8 21.01 18.7 35.81-3 14.9-16.1 24.7-32.2 25.6v8c0 13.3-9.8 24-24 24h-400c-12.36 0-24-10.7-24-24v-8c-14.29-.9-27.392-10.7-30.447-25.6-3.055-14.8 4.776-29.8 18.737-35.81L243.4 2.587zM256 128c17.7 0 32-14.3 32-32 0-17.67-14.3-32-32-32s-32 14.33-32 32c0 17.7 14.3 32 32 32zM127.1 416h40V224h64v192H280V224h64v192h40V224h64v196.3c.6.3 1.2-.2 1.8 1.1l48 32c11.7 7.8 16.9 22.4 12.8 35.9-4.1 13.5-16.5 22.7-30.6 22.7H31.1c-13.2 0-25.642-9.2-29.728-22.7-4.087-13.5 1.143-28.1 12.878-35.9l48-32c.57-1.3 1.16-.8.85-1.1V224h64v192z" />
          </svg> */}
          Ahsanullah University of Science and Technology (AUST) [2019 -
          Present]
        </p>

        <p className="text-gray-600 dark:text-gray-400 ">
          Department of Computer Science and Engineering (CSE)
        </p>

        <p className="  text-gray-600 dark:text-gray-400 mb-4  font-bold ">
          CGPA 3.60/4.0
        </p>

        <h3 className="font-bold text-lg md:text-2xl tracking-tight mb-4 mt-16 text-black dark:text-white flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            fill="currentColor"
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

        <h3 className="font-bold text-lg md:text-2xl tracking-tight mb-4 mt-16 text-black dark:text-white flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            fill="currentColor"
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
