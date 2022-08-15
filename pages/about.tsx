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
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Contact Links</h2>
          <ul>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/debopriyadebroy/">
                debopriyadebroy
              </a>
            </li>
            <li>
              GitHub: <a href="https://github.com/DDR13GIT">@ddr13Git</a>
            </li>
            <li>
              Website: <a>https://debopriyadebroy.vercel.app</a>
            </li>
            <li>
              Facebook:{' '}
              <a href="https://facebook.com/debopriya.deb.roy/">
                @Debopriya Deb Roy
              </a>
            </li>
          </ul>

          <h2>Where I've Worked</h2>
          <p className="text-lg font-bold">
            Java Trainer at{' '}
            <span>
              <a href={'https://nexxvali.com/'}>@Nexvalli</a>
            </span>{' '}
          </p>
          <p className="-mt-6 text-sm text-gray-600 dark:text-gray-400">
            July 2022 - Present
          </p>

          <h2>Headshots</h2>
          <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="Debopriya Deb Roy headshot"
                width={400}
                height={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
            <a href="/avatar-bw.jpg">
              <Image
                alt="Debopriya Deb Roy headshot"
                width={400}
                height={400}
                quality={100}
                src={avatarBW}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
        {/* 
        video links part */}
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Watch my contents
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          It's some videos that I made with care and time.
        </p>
        <VideoCard
          index="01"
          href="https://www.youtube.com/watch?v=QQ9jP4Jl7pEhttps://www.youtube.com/watch?v=MxR5I5_hOKk&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=2"
          length="6:15"
          title="JavaFx Project Creation with IntelliJ Idea and Gradle"
        />
        <VideoCard
          index="03"
          href="https://youtu.be/IBckTqARD-k"
          length="6:11"
          title="JavaFx Project -Integrated University Management System"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/playlist?list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1"
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
