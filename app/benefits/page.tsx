'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Timer,
  FirstAid,
  UsersThree,
  GraduationCap,
  Brain,
  Moon,
  ChartLineUp,
  ShieldCheck,
  Heartbeat,
  ChatCircleDots,
} from '@phosphor-icons/react';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';

const pillars = [
  {
    icon: Timer,
    title: 'Focus & Productivity',
    description:
      'Smart pomodoros and deep work sessions that adapt to your fatigue levels. Gamify your study habits without the burnout.',
    details: [
      'Adaptive Pomodoro timers that learn your focus patterns',
      'Deep work sessions with ambient soundscapes',
      'Study streak gamification with gentle accountability',
      'Daily and weekly focus analytics dashboard',
    ],
    color: 'bg-primary-container',
    iconColor: 'text-on-primary-fixed',
    cardBg: 'bg-primary-container/10',
  },
  {
    icon: FirstAid,
    title: 'Professional Support',
    description:
      'Round-the-clock access to licensed counselors specifically trained in student mental health. No waitlists, no stigma.',
    details: [
      'Text, voice, and video sessions with licensed therapists',
      'Crisis support hotline with instant connection',
      'Specialty matching for anxiety, depression, ADHD and more',
      'Confidential and HIPAA-compliant',
    ],
    color: 'bg-error-container/20',
    iconColor: 'text-error',
    cardBg: 'bg-error-container/5',
  },
  {
    icon: UsersThree,
    title: 'Campus Community',
    description:
      'Join study circles or wellness groups with peers who understand exactly what you\'re going through.',
    details: [
      'Anonymous sharing spaces for venting without judgment',
      'Study circles matched by course and campus',
      'Wellness challenges with your friend group',
      'Peer support training for student leaders',
    ],
    color: 'bg-tertiary-fixed-dim',
    iconColor: 'text-on-tertiary-fixed',
    cardBg: 'bg-tertiary-fixed-dim/10',
  },
  {
    icon: GraduationCap,
    title: 'Learn & Grow',
    description:
      'Micro-learning modules on emotional intelligence, sleep hygiene, and financial wellness for students.',
    details: [
      'Bite-sized lessons you can finish between classes',
      'Topics curated by psychologists and student advisors',
      'Progress tracking with certificates of completion',
      'New content weekly based on what students need most',
    ],
    color: 'bg-secondary-fixed-dim',
    iconColor: 'text-on-secondary-fixed',
    cardBg: 'bg-secondary-fixed-dim/10',
  },
];

const extraBenefits = [
  { icon: Brain, title: 'Mindfulness', desc: 'Guided meditations designed for pre-exam calm and post-lecture wind-down.' },
  { icon: Moon, title: 'Sleep Hygiene', desc: 'Smart sleep tracking and wind-down routines built around your class schedule.' },
  { icon: ChartLineUp, title: 'Progress Tracking', desc: 'Visualize your wellness journey with intuitive mood and habit analytics.' },
  { icon: ShieldCheck, title: 'Privacy First', desc: 'End-to-end encrypted. Your data stays yours. No ads, no selling to third parties.' },
  { icon: Heartbeat, title: 'Stress Detection', desc: 'Proactive check-ins that sense when you might be overwhelmed and offer help.' },
  { icon: ChatCircleDots, title: 'Peer Mentoring', desc: 'Connect with trained upper-year students who\'ve been through it all.' },
];

export default function Benefits() {
  const router = useRouter();

  return (
    <main className="bg-surface text-on-surface font-body selection:bg-primary-container">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] text-on-background mb-6">
            Built around{' '}
            <span className="text-secondary">what students actually need.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Not another productivity app. Uniwell is a mental wellness companion
            designed from the ground up for life on campus.
          </p>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const isReversed = i % 2 !== 0;
            return (
              <div
                key={pillar.title}
                className={`${pillar.cardBg} rounded-xl p-10 md:p-14 bento-shadow`}
              >
                <div
                  className={`flex flex-col ${
                    isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  } gap-10 lg:gap-16 items-start`}
                >
                  <div className="flex-1 space-y-6">
                    <div
                      className={`w-16 h-16 rounded-full ${pillar.color} flex items-center justify-center`}
                    >
                      <Icon size={28} weight="bold" className={pillar.iconColor} />
                    </div>
                    <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight">
                      {pillar.title}
                    </h2>
                    <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="flex-1 w-full">
                    <ul className="space-y-4">
                      {pillar.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-4 bg-surface-container-lowest rounded-lg p-5 bento-shadow"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                          <span className="text-on-surface leading-relaxed">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Extra Benefits Grid */}
      <section className="py-20 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-16">
            And so much <span className="text-primary">more.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extraBenefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="bg-surface-container-lowest rounded-xl p-8 bento-shadow hover:scale-[1.02] transition-all duration-200"
                >
                  <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center mb-6">
                    <Icon size={24} weight="bold" className="text-on-surface" />
                  </div>
                  <h3 className="font-headline text-xl font-bold mb-3">
                    {b.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto rounded-xl aura-gradient p-12 md:p-16 text-center relative overflow-hidden bento-shadow">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tighter">
              Your well-being shouldn&apos;t wait.
            </h2>
            <p className="text-white/80 text-lg max-w-lg mx-auto mb-10">
              Join the waitlist and be among the first students to experience
              Uniwell.
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
