'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Timer,
  FirstAid,
  UsersThree,
  GraduationCap,
  Star,
  DownloadSimple,
} from '@phosphor-icons/react';
import QRCode from 'react-qr-code';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';

const testimonials = [
  {
    quote:
      "Finally an app that doesn't just ping me about deadlines but actually helps me breathe when I'm overwhelmed. The study circles changed my life.",
    name: 'Amina',
    school: 'University of Nairobi',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBGmwR7_BcKOSAONoyZEKYZ52eRZvMUYBWjY28wf1THJRZrBpD6np0ug4kLzoa2U9gzGVLXHpJD7DkiXZaDkEOaOGlW7EbFEweXxm3ZXkqgdAEyYLzXzfQTUEEcwDG5-5dnmto4RQ8ot_que0RbaxQPyzhnuCO2J3UJBGPAAMh56Nn3yIxLfM9Yoe3WdnySDF_YNYTgUh3ZQ539c82rOdxopyMrhyH7yE4AH1Uz_F4BZrD1v8ayuviGfr7rcu6Gimny3LzFaDX_Y-LE',
    bgClass: 'bg-surface-container',
  },
  {
    quote:
      "The professional counseling feature is seamless. No more waiting months for the university's health services.",
    name: 'Brian',
    school: 'Strathmore University',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA6zKz-vCvT7DpuzURBW3OK7-STL8jPGVIiFAI9EnEioa1Ro8pNu4_sb3xionwUkWvPF3kP0Lr6P36XoMzHJqkb31DWICNnBAOhftdii-sVzWnoVsCVmXhZEpg0hC8FqlHjLWucne7Cck7lkFr4b0_m7oSt755XtIVQ0IYtBGwVpq7mb1CZr5kaVYgGRILLcGa_1YNgkUByb_VsmR7qxgST4Eu5zIu41RokxS-y-xaxHA7fhxi3Iccjbn5iYqMIRFtSPEvYUddffON6',
    bgClass: 'bg-tertiary-fixed-dim/10',
  },
  {
    quote:
      "The library feature is the only one I've stuck with. The resources on how navigate adult relationships are very helpful.",
    name: 'Wanjiku',
    school: 'Kenyatta University',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDZRDyGL0i9GPl-8lHRbRz72FKsXMk4MCHGRbTPCCqutGraLAV5uWwppYDurKNOBS2UpMzmEJEw4IazYNQClMxB3MR0SZV02ISShKTwULAogaH-zDRwQDzSsccr8uTnp6MfKnKXQlLVY3-eAXLo0fjFp3qtHWejKWfWFJK9lj8QNRDY4rOfMpEjjSH852IYeKZYZH5p5s5f8iTxh4i7wdfTrlcoyRdX4RvtkyFIdDn5_-qDszqb2QN2heUFONob6BHrLzhgyOqnpxVu',
    bgClass: 'bg-secondary-fixed-dim/10',
  },
];

const avatars = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA814oTqNnm2cGl-NUpuZkzkNnSHWgSPdvPhyuFmH9zzeWhQahhd2g1ot7Mk_Dk2hKlp1Q0NpiZpA2riFdemQTZq_9OGKtRNjA6EBpNkvuefj112MsaytKdTv5nTHBNmP5Iuf4mmjpNgH43zZ2KLDXvHe7ygb8Vbm7M-MtmRFLNTJHBTUh0sMS25psyOuUQTJPmt41VlROcMlI2MtSotfuHW8SJPXfRtQXCuKoj1GS-F3487xyATnAjliswiqi4dlhtg9sVL6Lu_1of',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBjjkJeK8eRO5KKicFcLssN5Gueob3PdZFzeuixqI5MeY--EYDWEvoTFaL1jYk1N48oA0RiLhdOnbdq0i0wTSGmj76Ei6X7GvaWmus6CAcUdqEqrAElkL4qArEdDYF4hGszZByn3wu6Ib8smfm6GIlFnCnIyj0L__pkfCfl6V_zlpilsBqCNY6I3Ms_Lt28sS6Tb89IkUWa0PEG56hQ-6bA52mmo1H3MZ2i9wOHZ2HYUA3uEAKrsryARGNSHwUb38ReJ5Rn_e4UFhZH',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCkPwoeactLig4ltb5ZL-23MtfM_UlA11TaIsJ_fEMvSyYiVQkFeM0PJLn7S4yLvB0Oa8-xR6Onb0n2wHHTUj7OhffjcUqwrHLTIsmcQQlHzi14CCaDtfzlbGnrS4OFu5pIwfBO7Pw5acGi0mJT3uMTu64XLrnyHhRX3cbCiByEBD75v-rfawZu4kKPFpcvw_F-C3jM2Xn-sHeTPBm45ssWE1EzlVhbVDIVr7Hy8zKs-fMKmPd5brn7oqjcbtRNT_2Y1KyyoyP6ItlU',
];

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/comingsoon');
  };

  return (
    <main className="bg-surface text-on-surface font-body selection:bg-primary-container">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col items-center overflow-hidden">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 z-10">
       
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] text-on-background">
              Mental Wellness &amp; Productivity,{' '}
              <span className="text-primary">Uncomplicated.</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed">
              Turn academic stress into manageable steps. Uniwell combines focus
              timers, peer community, and professional support in one app built
              for your brain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleGetStarted}
                className="aura-gradient text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-all duration-200"
              >
                Get Started for Free
              </button>
              <button
                onClick={handleGetStarted}
                className="bg-surface-container-high text-on-surface px-8 py-4 rounded-full text-lg font-bold hover:bg-surface-container-highest transition-all duration-200"
              >
                Watch Demo
              </button>
            </div>
            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <Image
                    key={i}
                    alt={`User ${i + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-surface"
                    src={src}
                    width={40}
                    height={40}
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-on-surface-variant">
                Trusted by students worldwide
              </p>
            </div>
          </div>

          <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-primary-container/20 blur-[120px] rounded-full scale-75" />
            <div className="relative w-full h-full">
              <div className="absolute top-10 right-0 w-2/3 aspect-[9/19] bg-surface-container-lowest rounded-[3rem] bento-shadow p-3 rotate-6 z-20 overflow-hidden border-8 border-on-background/5">
                <Image
                  alt="App interface focus timer"
                  className="w-full h-full object-cover rounded-[2.5rem]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVCqINJ80My90W8AWTCCwFLChJLpaNgOakYOSPHtZgEjCb9QEC7EGJ6mFBzBoVsPPcnLytQqfMoeiowpRA74rHFl5YbZnUibZNI66dIJimTdOmRQ-soU-vJBJGLVPfZqr0MqipL9Ap2jUY6WtBso_RpmnQyraq14EnQnLXi6MNb1BHsGIP8dKFNfIDuJ9tsHfv9ZMC6wudRegzhqMgPAliYT_S4Mg6fm9FhF3UVCx6FcZnsYCb6w0s1USq8H7mfY423xNArYRL58EC"
                  fill
                  sizes="(max-width: 768px) 60vw, 30vw"
                />
              </div>
              <div className="absolute top-40 left-0 w-2/3 aspect-[9/19] bg-surface-container-lowest rounded-[3rem] bento-shadow p-3 -rotate-12 z-10 overflow-hidden border-8 border-on-background/5">
                <Image
                  alt="App interface community"
                  className="w-full h-full object-cover rounded-[2.5rem]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_TdlMVa9-NIQyyCg7zu4XOkEUKP3IowMWIB_U89vc8xB38Zu0YWuBBaq2LbC_LXelMBM5EKA7lgirWEDkFqu2csAklri-yLybsQouap0F-Ur_jvjJlXibLiQBnqYS7mjVDaLN8qWTgRQDpG8mS2RHcLudCsik7UOBLOkQRwVDMkk4rnaGE9oelBiR4wH4tdFf36zOJN1MLXRAQZKdM3bIU_fMFLwsIm-4FayRhS9IX9fR289Qz96msKSBC2hDTK9_EtHuDpY_XVZJ"
                  fill
                  sizes="(max-width: 768px) 60vw, 30vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - Bento Grid */}
      <section
        className="py-24 px-6 md:px-12 bg-surface-container-low"
        id="how-it-works"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-on-background mb-6">
              Designed for your{' '}
              <span className="text-secondary">well-being.</span>
            </h2>
            <p className="text-on-surface-variant text-xl max-w-2xl">
              The four pillars that make Uniwell your ultimate academic
              sanctuary.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {/* Focus & Productivity */}
            <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-10 bento-shadow group hover:scale-[1.02] transition-all duration-200 flex flex-col justify-between min-h-[400px]">
              <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center mb-8">
                <Timer size={28} weight="bold" className="text-on-primary-fixed" />
              </div>
              <div>
                <h3 className="font-headline text-3xl font-bold mb-4">
                  Focus &amp; Productivity
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                  Smart pomodoros and deep work sessions that adapt to your
                  fatigue levels. Gamify your study habits without the burnout.
                </p>
              </div>
              <div className="mt-8 overflow-hidden rounded-lg h-32 bg-surface-container">
                <div className="flex gap-2 p-4 animate-pulse">
                  <div className="h-full w-24 bg-primary-container/20 rounded-lg" />
                  <div className="h-full w-24 bg-primary-container/40 rounded-lg" />
                  <div className="h-full w-32 bg-primary-container/60 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Professional Support */}
            <div className="md:col-span-4 bg-error-container/10 rounded-xl p-10 bento-shadow group hover:scale-[1.02] transition-all duration-200 flex flex-col justify-between">
              <div className="w-16 h-16 rounded-full bg-error-container/20 flex items-center justify-center mb-8">
                <FirstAid size={28} weight="bold" className="text-error" />
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold mb-4">
                  Professional Support
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Round-the-clock access to licensed counselors specifically
                  trained in student mental health.
                </p>
              </div>
            </div>

            {/* Campus Community */}
            <div className="md:col-span-5 bg-tertiary-fixed-dim/20 rounded-xl p-10 bento-shadow group hover:scale-[1.02] transition-all duration-200 flex flex-col justify-between min-h-[350px]">
              <div className="w-16 h-16 rounded-full bg-tertiary-fixed-dim flex items-center justify-center mb-8">
                <UsersThree
                  size={28}
                  weight="bold"
                  className="text-on-tertiary-fixed"
                />
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold mb-4">
                  Campus Community
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Join study circles or wellness groups with peers who understand
                  exactly what you&apos;re going through.
                </p>
              </div>
            </div>

            {/* Learn & Grow */}
            <div className="md:col-span-7 bg-secondary-fixed-dim/20 rounded-xl p-10 bento-shadow group hover:scale-[1.02] transition-all duration-200 flex flex-col justify-between">
              <div className="w-16 h-16 rounded-full bg-secondary-fixed-dim flex items-center justify-center mb-8">
                <GraduationCap
                  size={28}
                  weight="bold"
                  className="text-on-secondary-fixed"
                />
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold mb-4">
                  Learn &amp; Grow
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Micro-learning modules on emotional intelligence, sleep
                  hygiene, and financial wellness for students.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/50 rounded-lg font-bold text-sm">
                  Sleep Hygiene 101
                </div>
                <div className="p-4 bg-white/50 rounded-lg font-bold text-sm">
                  Exam Anxiety
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6 overflow-hidden" id="testimonials">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-4xl text-center font-extrabold tracking-tight mb-16">
            Loved by students at universities everywhere.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className={`${t.bgClass} rounded-xl p-8 bento-shadow flex flex-col`}
              >
                <div className="flex text-primary mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={20} weight="fill" />
                  ))}
                </div>
                <p className="italic text-lg text-on-surface mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto pt-4">
                  <Image
                    alt={t.name}
                    className="w-12 h-12 rounded-full"
                    src={t.avatar}
                    width={48}
                    height={48}
                  />
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-xs  font-bold opacity-50">
                      {t.school}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto rounded-xl bg-on-surface text-surface p-12 md:p-20 flex flex-col items-center text-center relative overflow-hidden bento-shadow">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-80 h-80 border-[40px] border-surface-container rounded-full" />
            <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-surface-container-lowest rounded-full" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-6 max-w-2xl tracking-tighter">
              Ready to transform your student life?
            </h2>
            <p className="text-xl opacity-80 mb-12 max-w-lg">
              Join the growing wave of students prioritizing their mental
              health without sacrificing grades.
            </p>
            {/* Desktop: QR Code */}
            <div className="hidden md:flex flex-col items-center bg-white/10 backdrop-blur-xl p-8 rounded-xl border border-white/20 shadow-2xl">
              <div className="bg-white p-4 rounded-lg mb-6">
                <QRCode
                  value="https://uniwell.seanmotanya.dev/comingsoon"
                  size={128}
                  style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                  viewBox="0 0 128 128"
                />
              </div>
              <p className="font-bold text-lg mb-2">Scan to Download</p>
              <p className="text-sm opacity-60">
                Available on iOS and Android
              </p>
            </div>
            {/* Mobile: Download button */}
            <div className="md:hidden flex flex-col gap-4 w-full max-w-sm">
              <button
                onClick={handleGetStarted}
                className="w-full bg-surface text-on-surface py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all duration-200"
              >
                <DownloadSimple size={20} weight="bold" />
                Download Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
