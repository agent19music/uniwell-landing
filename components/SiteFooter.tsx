'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  InstagramLogo,
  XLogo,
  DiscordLogo,
  EnvelopeSimple,
} from '@phosphor-icons/react';

const navLinks = [
  { label: 'Benefits', href: '/benefits' },
  { label: 'How it Works', href: '/how-it-works' },
  { label: 'Resources', href: '/resources' },
];

const productLinks = [
  { label: 'Features', href: '/benefits' },
  { label: 'Pricing', href: '/comingsoon' },
  { label: 'Roadmap', href: '/comingsoon' },
  { label: 'Changelog', href: '/comingsoon' },
];

const legalLinks = [
  { label: 'Privacy', href: '/comingsoon' },
  { label: 'Terms', href: '/comingsoon' },
  { label: 'Cookies', href: '/comingsoon' },
];

export default function SiteFooter() {
  const router = useRouter();

  return (
    <footer className="w-full bg-on-surface text-surface relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.04]">
        <div className="absolute -top-32 -left-32 w-96 h-96 border-[60px] border-surface rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Top section */}
        <div className="pt-20 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              href="/"
              className="font-headline font-extrabold text-3xl tracking-tighter"
            >
              Uniwell
            </Link>
            <p className="text-surface/60 leading-relaxed max-w-sm text-base">
              Mental wellness and productivity tools built for students, by
              someone who gets it. Your sanctuary on campus.
            </p>
            <button
              onClick={() => router.push('/comingsoon')}
              className="bg-primary-container text-on-primary-fixed font-bold px-8 py-3 rounded-full hover:scale-105 transition-all duration-200 active:scale-95"
            >
              Join the Waitlist
            </button>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-headline font-bold text-sm uppercase tracking-widest text-surface/40 mb-6">
                Navigate
              </h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-surface/70 hover:text-surface transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold text-sm uppercase tracking-widest text-surface/40 mb-6">
                Product
              </h4>
              <ul className="space-y-4">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-surface/70 hover:text-surface transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold text-sm uppercase tracking-widest text-surface/40 mb-6">
                Legal
              </h4>
              <ul className="space-y-4">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-surface/70 hover:text-surface transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-surface/10" />

        {/* Bottom bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-surface/40 text-sm">
            &copy; {new Date().getFullYear()} Uniwell &middot; Crafted by Uzski
            Corp
          </p>
          <div className="flex items-center gap-5">
            <a
              href="mailto:seanmotanya@gmail.com"
              className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-surface/20 transition-colors duration-200"
              aria-label="Email"
            >
              <EnvelopeSimple size={18} weight="bold" className="text-surface/60" />
            </a>
            <button
              onClick={() => router.push('/comingsoon')}
              className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-surface/20 transition-colors duration-200"
              aria-label="Instagram"
            >
              <InstagramLogo size={18} weight="bold" className="text-surface/60" />
            </button>
            <button
              onClick={() => router.push('/comingsoon')}
              className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-surface/20 transition-colors duration-200"
              aria-label="Discord"
            >
              <DiscordLogo size={18} weight="bold" className="text-surface/60" />
            </button>
            <button
              onClick={() => router.push('/comingsoon')}
              className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-surface/20 transition-colors duration-200"
              aria-label="X"
            >
              <XLogo size={18} weight="bold" className="text-surface/60" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
