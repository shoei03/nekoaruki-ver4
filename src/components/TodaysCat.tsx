"use client";

import Image from 'next/image';

export default function TodaysCat() {
  return (
    <div className="my-10">
      <h1 className="text-4xl font-bold text-center">Todays Cat</h1>
      <Image
        src="/cats/nekoaruki_mike_nekorobi.png"
        alt="today's cat"
        width={500}
        height={500}
        className="blur-lg"
      />
      <div className='mb-10'>
      </div>
    </div>
  );
}