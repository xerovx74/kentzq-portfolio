import Link from 'next/link';

import Container from 'components/Container';

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
            directly from :
            <Link href="https://github.com/DDR13GIT?tab=repositories">
              <a className="text-gray-900 dark:text-gray-100 ">Github.</a>
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}
