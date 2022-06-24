import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-3 text-black dark:text-white">
              Debopriya Deb Roy
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Currently studing CSE at{' '}
              <span className="font-semibold">
                Ahsanullah University Of Science and Technology
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              I'm currently an undergraduate student at Ahsanullah University of
              Science and Technology(AUST), pursuing B.Eng in Computer Science
              and Engineering. Currently learning Data Structures and
              Algorithms, while understanding and implementing the fundamentals
              of computer engineering and learning web development.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Debopriya Deb Roy"
              height={176}
              width={176}
              src="/authorNew.jpg"
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Projects
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
          <BlogPostCard
            title="Download the latest Resume {last updated on 24th June, 2022}"
            slug="style-guides-component-libraries-design-systems"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
        </div>
        <Link href="/blog">
          <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            See all projects
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
        </Link>

        <span className="h-16" />
      </div>
    </Container>
  );
}
