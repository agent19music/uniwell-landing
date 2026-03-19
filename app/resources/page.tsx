'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  BookOpenText,
  Headphones,
  Moon,
  Brain,
  Heart,
  Wallet,
  Lightning,
  ArrowUpRight,
} from '@phosphor-icons/react';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';

const guides = [
  {
    icon: Moon,
    title: 'Sleep Hygiene 101',
    category: 'Wellness',
    time: '5 min read',
    description:
      'Why your 2 AM study sessions are sabotaging your GPA — and what to do instead.',
    color: 'bg-tertiary-fixed-dim/20',
  },
  {
    icon: Brain,
    title: 'Exam Anxiety Toolkit',
    category: 'Mental Health',
    time: '7 min read',
    description:
      'Evidence-based techniques to manage test anxiety before, during, and after exams.',
    color: 'bg-error-container/10',
  },
  {
    icon: Lightning,
    title: 'The Pomodoro Deep Dive',
    category: 'Productivity',
    time: '4 min read',
    description:
      'How to customize focus intervals for your brain type — not everyone is a 25/5 person.',
    color: 'bg-primary-container/20',
  },
  {
    icon: Heart,
    title: 'When to Seek Help',
    category: 'Support',
    time: '6 min read',
    description:
      'A no-judgment guide to recognizing when stress crosses the line and how to reach out.',
    color: 'bg-secondary-fixed-dim/20',
  },
  {
    icon: Wallet,
    title: 'Student Financial Wellness',
    category: 'Life Skills',
    time: '5 min read',
    description:
      'Budgeting, scholarships, and money anxiety — practical tips for the broke-but-trying era.',
    color: 'bg-surface-container-high',
  },
  {
    icon: Headphones,
    title: 'Focus Soundscapes',
    category: 'Productivity',
    time: '3 min read',
    description:
      'The science behind lo-fi, brown noise, and binaural beats for deep work.',
    color: 'bg-tertiary-fixed-dim/10',
  },
];

const topics = [
  'Anxiety & Stress',
  'ADHD & Focus',
  'Relationships',
  'Burnout Recovery',
  'Imposter Syndrome',
  'Grief & Loss',
  'Body Image',
  'Substance Use',
  'Financial Stress',
  'Loneliness',
  'Perfectionism',
  'Career Anxiety',
];

export default function Resources() {
  const router = useRouter();

  return (
    <main className="bg-surface text-on-surface font-body selection:bg-primary-container">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] text-on-background mb-6">
            Your wellness{' '}
            <span className="text-tertiary">library.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Guides, toolkits, and micro-lessons curated by psychologists and
            student advisors. All free. All bite-sized.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((g) => {
              const Icon = g.icon;
              return (
                <button
                  key={g.title}
                  onClick={() => router.push('/comingsoon')}
                  className={`${g.color} rounded-xl p-8 bento-shadow hover:scale-[1.02] transition-all duration-200 text-left group`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-full bg-surface-container-lowest flex items-center justify-center">
                      <Icon size={24} weight="bold" className="text-on-surface" />
                    </div>
                    <ArrowUpRight
                      size={20}
                      weight="bold"
                      className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      {g.category}
                    </span>
                    <span className="text-xs text-outline">•</span>
                    <span className="text-xs text-on-surface-variant">
                      {g.time}
                    </span>
                  </div>
                  <h3 className="font-headline text-xl font-bold mb-3">
                    {g.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm">
                    {g.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Browse by Topic */}
      <section className="py-20 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-4">
            Browse by <span className="text-secondary">topic.</span>
          </h2>
          <p className="text-on-surface-variant text-xl text-center max-w-xl mx-auto mb-12">
            Whatever you&apos;re going through, there&apos;s a resource for it.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => router.push('/comingsoon')}
                className="px-5 py-2.5 rounded-full bg-surface-container-lowest text-on-surface font-semibold text-sm bento-shadow hover:bg-primary-container hover:text-on-primary-fixed transition-all duration-200"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Community section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-tertiary-fixed-dim/15 rounded-xl p-10 md:p-14 bento-shadow flex flex-col justify-between min-h-[320px]">
              <div>
                <h3 className="font-headline text-3xl font-extrabold tracking-tight mb-4">
                  Campus Circles
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                  Join moderated discussion groups on topics like finals stress,
                  homesickness, and navigating university life. Real students, real
                  conversations.
                </p>
              </div>
              <button
                onClick={() => router.push('/comingsoon')}
                className="mt-8 self-start bg-on-surface text-surface px-8 py-3 rounded-full font-bold hover:scale-105 transition-all duration-200"
              >
                Explore Circles
              </button>
            </div>
            <div className="bg-secondary-fixed-dim/15 rounded-xl p-10 md:p-14 bento-shadow flex flex-col justify-between min-h-[320px]">
              <div>
                <h3 className="font-headline text-3xl font-extrabold tracking-tight mb-4">
                  Workshops & Events
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                  Live and on-demand workshops on mindfulness, time management,
                  and building resilience. Hosted by experts who actually get
                  student life.
                </p>
              </div>
              <button
                onClick={() => router.push('/comingsoon')}
                className="mt-8 self-start bg-on-surface text-surface px-8 py-3 rounded-full font-bold hover:scale-105 transition-all duration-200"
              >
                See Schedule
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto rounded-xl aura-gradient p-12 md:p-16 text-center relative overflow-hidden bento-shadow">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          <div className="relative z-10">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tighter">
              Unlock the full library.
            </h2>
            <p className="text-white/80 text-lg max-w-lg mx-auto mb-10">
              All resources are free inside the Uniwell app. Join the waitlist to
              get early access.
            </p>
            <button
              onClick={() => router.push('/comingsoon')}
              className="bg-white text-primary px-10 py-4 rounded-full text-lg font-extrabold hover:scale-105 hover:shadow-2xl transition-all duration-200"
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
