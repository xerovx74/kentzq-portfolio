import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';
import avatar from 'public/avatar.jpg';
import avatarBW from 'public/avatar-bw.jpg';
import VideoCard from '../components/VideoCard';

export default function Personal() {
  return (
    <Container title="Personal – Debopriya Deb Roy">
      <div className="flex flex-col justify-center items-start max-w-4xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Personal Stuff to showcase
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Under development
        </p>
      </div>
    </Container>
  );
}
