import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';
import avatar from 'public/avatar.jpg';
import avatarBW from 'public/avatar-bw.jpg';
import VideoCard from '../components/VideoCard';

export default function About() {
  return (
    <Container title="About – Lee Robinson">
      <div className="flex flex-col justify-center items-start max-w-4xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
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
              Website:{' '}
              <Link href="https://debopriyadebroy.vercel.app">
                <a>https://debopriyadebroy.vercel.app</a>
              </Link>
            </li>
            <li>
              Facebook:{' '}
              <a href="https://facebook.com/debopriya.deb.roy/">
                @Debopriya Deb Roy
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>Java Trainer at Nexvalli [2022-Present]</p>

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
      </div>

      <div className="flex flex-col justify-center items-start max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Watch my tutorials
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          It's some tutorials that I made with care and time.
        </p>
        <VideoCard
          index="01"
          href="https://www.youtube.com/watch?v=MxR5I5_hOKk&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=2"
          length="1:02:45"
          title="Introduction to React 2025"
        />
        <VideoCard
          index="02"
          href="https://www.youtube.com/watch?v=AGl52moyISU&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=3"
          length="54:22"
          title="Firestore, Chakra UI, Absolute Imports"
        />
        <VideoCard
          index="03"
          href="https://www.youtube.com/watch?v=3g6-v3_BNbM&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=4"
          length="1:08:30"
          title="Designing & Building the Dashboard"
        />
        <VideoCard
          index="04"
          href="https://www.youtube.com/watch?v=u8iv_yhSRI8&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=5"
          length="1:13:45"
          title="Firebase Admin with Next.js + SWR"
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
