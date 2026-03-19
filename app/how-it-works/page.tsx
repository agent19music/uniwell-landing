'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  DownloadSimple,
  UserCirclePlus,
  Compass,
  Rocket,
  ArrowRight,
  Timer,
  FirstAid,
  UsersThree,
  BookOpenText,
} from '@phosphor-icons/react';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';

const steps = [
  {
    number: '01',
    icon: DownloadSimple,
    title: 'Download & Sign Up',
    description:
      'Grab Uniwell from the App Store or Google Play. Create your account with just your university email — no long onboarding, no credit card.',
    color: 'bg-primary-container',
    iconColor: 'text-on-primary-fixed',
  },
  {
    number: '02',
    icon: UserCirclePlus,
    title: 'Personalize Your Sanctuary',
    description:
      'Tell us what matters to you: focus goals, wellness priorities, or community. Uniwell adapts to your rhythm — not the other way around.',
    color: 'bg-secondary-fixed-dim',
    iconColor: 'text-on-secondary-fixed',
  },
  {
    number: '03',
    icon: Compass,
    title: 'Explore Your Toolkit',
    description:
      'Dive into focus timers, micro-lessons, counselor matching, and study circles. Everything is a tap away from your home dashboard.',
    color: 'bg-tertiary-fixed-dim',
    iconColor: 'text-on-tertiary-fixed',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Thrive, Don\'t Just Survive',
    description:
      'Track your progress, earn streaks, lean on your community, and watch your habits compound into real, lasting change.',
    color: 'bg-error-container/20',
    iconColor: 'text-error',
  },
];

const features = [
  {
    icon: Timer,
    label: 'Focus Sessions',
    desc: 'Adaptive Pomodoro timers that learn when you work best.',
  },
  {
    icon: FirstAid,
    label: 'Counselor Match',
    desc: 'Paired with a licensed therapist quickly, not months from now.',
  },
  {
    icon: UsersThree,
    label: 'Study Circles',
    desc: 'Auto-matched groups by course, campus, and study style.',
  },
  {
    icon: BookOpenText,
    label: 'Micro-Lessons',
    desc: '5-minute modules on sleep, stress, finances, and more.',
  },
];

export default function HowItWorks() {
  const router = useRouter();

  return (
    <main className="bg-surface text-on-surface font-body selection:bg-primary-container">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] text-on-background mb-6">
            Four steps to a{' '}
            <span className="text-primary">calmer campus life.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            No steep learning curves. No overwhelming dashboards. Just a
            thoughtful flow from download to daily habit.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                <div className="bg-surface-container-lowest rounded-xl p-8 md:p-12 bento-shadow hover:scale-[1.01] transition-all duration-200">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex items-center gap-6">
                      <span className="font-headline text-6xl md:text-7xl font-extrabold text-outline-variant/30 tracking-tighter">
                        {step.number}
                      </span>
                      <div
                        className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center shrink-0`}
                      >
                        <Icon size={28} weight="bold" className={step.iconColor} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-headline text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                        {step.title}
                      </h2>
                      <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowRight
                      size={24}
                      weight="bold"
                      className="text-outline-variant rotate-90"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-4">
            What&apos;s inside your{' '}
            <span className="text-secondary">toolkit.</span>
          </h2>
          <p className="text-on-surface-variant text-xl text-center max-w-xl mx-auto mb-16">
            Everything is accessible from one home screen. No buried menus, no
            confusing hierarchies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.label}
                  className="bg-surface-container-lowest rounded-xl p-8 bento-shadow flex items-start gap-6 hover:scale-[1.02] transition-all duration-200"
                >
                  <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
                    <Icon size={24} weight="bold" className="text-on-surface" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold mb-2">
                      {f.label}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto rounded-xl bg-on-surface text-surface p-12 md:p-16 text-center relative overflow-hidden bento-shadow">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-80 h-80 border-[40px] border-surface-container rounded-full" />
            <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-surface-container-lowest rounded-full" />
          </div>
          <div className="relative z-10">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold mb-6 tracking-tighter">
              Sounds simple? It is.
            </h2>
            <p className="text-xl opacity-80 max-w-lg mx-auto mb-10">
              The hardest part is showing up. Uniwell handles the rest.
            </p>
            <button
              onClick={() => router.push('/comingsoon')}
              className="bg-surface text-on-surface px-10 py-4 rounded-full text-lg font-extrabold hover:scale-105 hover:shadow-2xl transition-all duration-200"
            >
              Get Early Access
            </button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
