import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';
import avatar from 'public/avatar.jpg';
import avatarBW from 'public/avatar-bw.jpg';
import VideoCard from '../components/VideoCard';

export default function About() {
  return (
    <Container title="About – Debopriya Deb Roy">
      <div className="flex flex-col justify-center items-start max-w-4xl mx-auto mb-16 w-full">
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          About Me
        </h3>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h3 className="font-bold text-2xl md:text-2xl tracking-tight mt-12 mb-6 text-black dark:text-white">
            Contact Links
          </h3>
          {/* contact links are here  */}
          <div className="flex flex-col gap-2 md:flex-row md:gap-2">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/debopriyadebroy/"
              className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
            >
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    fill="currentColor"
                  />
                </svg>
                <div className="ml-3">LinkedIn</div>
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
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/DDR13GIT"
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
                <div className="ml-3">GitHub</div>
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
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://facebook.com/debopriya.deb.roy/"
              className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
            >
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                    fill="currentColor"
                  />
                </svg>
                <div className="ml-3">Facebook</div>
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

          {/* <ul>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/debopriyadebroy/">
                debopriyadebroy
              </a>
            </li>
            <li>
              GitHub: <a href="https://github.com/DDR13GIT">DDR13GIT</a>
            </li>
            <li>
              Facebook:{' '}
              <a href="https://facebook.com/debopriya.deb.roy/">
                Debopriya Deb Roy
              </a>
            </li>
          </ul> */}

          <h2>Where I've Worked</h2>
          <div>
          <p className="text-lg font-bold">
            Java Trainer @ {' '}
            <span>
              <a href={'https://nexxvali.com/'}>Nexvalli</a>
            </span>{' '}
          </p>
          <p className="-mt-5 text-sm text-gray-600 dark:text-gray-400">
            July 2022 - Present
            </p>
            
            <ul className=" text-base text-justify text-gray-500 dark:text-gray-400 list-disc font-semibold">
            <li>Trained over 100 consultants in Java, covering both core and advanced topics, to equip them with the necessary skills to become proficient QA engineers.</li>
            <li>Conducted comprehensive IT training sessions for consultants, covering essential topics such as Microsoft Office basics, web hosting and programming basics, search engine using techniques, using AI tools to complete daily jobs and proficient utilization of Google services.</li>
          </ul>

          </div>
          

          <h2>Headshots</h2>
          <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="Debopriya Deb Roy headshot"
                width={200}
                height={200}
                quality={50}
                src={avatar}
                className="rounded-md"
              />
            </a>
            <a href="/avatar-bw.jpg">
              <Image
                alt="Debopriya Deb Roy headshot"
                width={200}
                height={200}
                quality={50}
                src={avatarBW}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
        {/* 
        video links part */}
        <h3 className="font-bold text-2xl md:text-2xl tracking-tight mt-12 mb-6 text-black dark:text-white">
          Watch my vidoes
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          It's some videos that I made with care and time.
        </p>
        <VideoCard
          index="01"
          href="https://youtu.be/QQ9jP4Jl7pE"
          length="6:15"
          title="JavaFx Project Creation with IntelliJ Idea and Gradle"
        />
        <VideoCard
          index="02"
          href="https://youtu.be/IBckTqARD-k"
          length="6:11"
          title="JavaFx Project -Integrated University Management System"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCVxQuVHJo8JZe_etepm5lXg/videos"
          className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
        >
          Watch all videos
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
      </div>
    </Container>
  );
}
