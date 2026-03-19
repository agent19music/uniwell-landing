'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full px-6 py-3 bg-surface/80 backdrop-blur-md flex justify-between items-center z-50 bento-shadow">
      <Link
        href="/"
        className="font-headline font-extrabold text-on-background tracking-tighter text-2xl"
      >
        Uniwell
      </Link>
      <div className="hidden md:flex gap-8 items-center">
        <Link
          className="font-headline font-bold tracking-tight text-on-surface-variant hover:text-on-background transition-colors px-3 py-1 rounded-full"
          href="/benefits"
        >
          Benefits
        </Link>
        <Link
          className="font-headline font-bold tracking-tight text-primary hover:text-primary-dim transition-colors px-3 py-1 rounded-full"
          href="/how-it-works"
        >
          How it Works
        </Link>
        <Link
          className="font-headline font-bold tracking-tight text-on-surface-variant hover:text-on-background transition-colors px-3 py-1 rounded-full"
          href="/resources"
        >
          Resources
        </Link>
      </div>
      <button
        onClick={() => router.push('/comingsoon')}
        className="bg-primary-container text-on-primary-fixed font-bold px-6 py-2.5 rounded-full hover:scale-105 transition-all active:scale-95 text-sm md:text-base"
      >
        Download App
      </button>
    </nav>
  );
}
