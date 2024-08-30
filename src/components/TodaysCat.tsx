"use client";

import Image from 'next/image';

export default function TodaysCat() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Todays Cat</h1>
      <Image
        src="/nekoaruki_mike_nekorobi.png"
        alt="today's cat"
        width={500}
        height={500}
        className="blur-lg"
      />
    </div>
  );
}