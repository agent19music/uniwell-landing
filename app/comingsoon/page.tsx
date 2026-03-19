'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowLeft } from '@phosphor-icons/react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const funMessages = [
  "Uh oh, someone's eager!",
  'Nah, let him cook...',
  "It's working on my computer, gimme a sec to push to prod",
];

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const randomMessage =
      funMessages[Math.floor(Math.random() * funMessages.length)];
    setMessage(randomMessage);
  }, []);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
    setError('');
  }, [email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isValidEmail) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const { error: supabaseError } = await supabase
        .from('uniwell_waitlist')
        .insert([{ email: email.toLowerCase().trim() }])
        .select();

      if (supabaseError) {
        if (
          supabaseError.code === '23505' ||
          supabaseError.message.includes('duplicate') ||
          supabaseError.message.includes('unique')
        ) {
          setError('Someone already gave us that email');
        } else {
          setError('Something went wrong. Please try again.');
          console.error('Supabase error:', supabaseError);
        }
        setIsLoading(false);
        return;
      }

      fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.toLowerCase().trim() }),
      }).catch((err) => console.error('Notification error:', err));

      setIsLoading(false);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting email:', err);
      setError('Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen bg-surface text-on-surface font-body items-center justify-center p-4 md:p-6 selection:bg-primary-container">
      {/* Nav */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full px-6 py-3 bg-surface/80 backdrop-blur-md flex justify-between items-center z-50 bento-shadow">
        <Link
          href="/"
          className="font-headline font-extrabold text-on-background tracking-tighter text-2xl"
        >
          Uniwell
        </Link>
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 font-headline font-bold text-on-surface-variant hover:text-on-background transition-colors px-4 py-2 rounded-full text-sm"
        >
          <ArrowLeft size={16} weight="bold" />
          Back Home
        </button>
      </header>

      {/* Content */}
      <div className="max-w-2xl w-full text-center px-4">
        {!isSubmitted ? (
          <div className="space-y-8">


            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-on-background tracking-tighter leading-[1.1]">
              {message || "Uh oh, someone's eager!"}
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl mx-auto">
              We&apos;re putting the finishing touches on your mental wellness
              companion. Uniwell launches in the coming weeks.
            </p>

            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto space-y-3 pt-4"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className={`flex-1 px-6 py-4 rounded-full bg-surface-container-lowest text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary bento-shadow text-base ${
                    error
                      ? 'ring-2 ring-error'
                      : 'border border-outline-variant/30'
                  }`}
                />
                <button
                  type="submit"
                  disabled={isLoading || !isValidEmail || !email}
                  className="aura-gradient text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
                >
                  {isLoading ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>
              {error && (
                <p className="text-sm text-error text-left px-2">{error}</p>
              )}
              <p className="text-xs text-on-surface-variant">
                We&apos;ll notify you when we launch and share exclusive early
                access
              </p>
            </form>
          </div>
        ) : (
          <div className="bg-surface-container-lowest rounded-xl p-10 md:p-14 bento-shadow max-w-lg mx-auto space-y-6">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto">
              <CheckCircle size={40} weight="bold" className="text-white" />
            </div>

            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-background tracking-tight">
              You&apos;re on the list!
            </h2>

            <p className="text-lg text-on-surface-variant">
              Thanks for joining. We&apos;ll reach out when Uniwell is ready.
            </p>
            <p className="font-bold text-on-surface break-all text-base bg-surface-container rounded-lg px-4 py-3">
              {email}
            </p>

            <button
              onClick={() => router.push('/')}
              className="bg-surface-container-high text-on-surface px-8 py-3 rounded-full font-bold hover:bg-surface-container-highest transition-all duration-200"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="fixed bottom-6 text-center w-full px-4">
        <p className="text-xs text-on-surface-variant">
          Questions? Reach us at{' '}
          <a
            href="mailto:seanmotanya@gmail.com"
            className="font-bold text-primary hover:text-primary-dim transition-colors"
          >
            seanmotanya@gmail.com
          </a>
        </p>
      </footer>
    </main>
  );
}
