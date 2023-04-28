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

        <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-2">
          <li className="mt-10 mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                fill="currentColor"
                className="w-3 h-3"
              >
                <path d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z" />
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Bachelor in Engineering
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Department of Computer Science and Engineering (CSE)
            </time>
            <p className="text-base font-semibold text-gray-500 dark:text-gray-400">
              Ahsanullah University of Science and Technology [2019 - Present]
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                fill="currentColor"
                className="w-3 h-3"
              >
                <path d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z" />
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Higher Secondary School Certificate
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Science
            </time>
            <p className="text-base font-semibold text-gray-500 dark:text-gray-400">
              Dhaka City College (DCC) [2016 - 2018]
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                fill="currentColor"
                className="w-3 h-3 "
              >
                <path d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z" />
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Secondary School Certificate
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Science
            </time>
            <p className="text-base font-semibold text-gray-500 dark:text-gray-400">
              St. Gregory's High School and College (SGHS) [2006 - 2016]
            </p>
          </li>
        </ol>

        <span className="h-16" />
      </div>
    </Container>
  );
}
