'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CheckCircle } from '@phosphor-icons/react';

const funMessages = [
  "Uh oh, someone's eager!",
  "Nah, let him cook...",
  "It's working on my computer, gimme a sec to push to prod"
];

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Pick a random message on mount
    const randomMessage = funMessages[Math.floor(Math.random() * funMessages.length)];
    setMessage(randomMessage);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <main className="flex min-h-screen bg-[#fbeee3] items-center justify-center p-5">
      {/* Logo in top left */}
      <header className="absolute top-5 left-10">
        <div className="flex flex-row items-center">
          <Image
            src="https://pub-abe4a6405e724602a7fac9bf761e290c.r2.dev/uniwell-logo-nobg.png"
            alt="UniWell Logo"
            width={60}
            height={60}
          />
          <h1 className="text-2xl font-semibold text-[#212121] ml-2" style={{ fontFamily: 'Helvetica' }}>
            UniWell
          </h1>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-2xl w-full text-center">
        {!isSubmitted ? (
          <>
            {/* Emoji or Icon */}
            <div className="text-7xl mb-8 animate-bounce">👀</div>

            {/* Heading */}
            <h2 
              className="text-5xl md:text-6xl font-bold text-[#212121] mb-6 tracking-tight"
              style={{ fontFamily: 'Helvetica' }}
            >
              {message || "Uh oh, someone&apos;s eager!"}
            </h2>

            {/* Subheading */}
            <p className="text-xl text-[#4A4A4A] mb-12 leading-relaxed max-w-xl mx-auto">
              We&apos;re putting the finishing touches on something special. 
              UniWell will launch in the coming weeks.
            </p>

            {/* Email form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-full border-2 border-[#212121] bg-white text-[#212121] placeholder-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#212121] focus:border-transparent"
                  style={{ fontFamily: 'Helvetica' }}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-[#212121] text-white rounded-full font-semibold hover:bg-[#333] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isLoading ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>
              <p className="text-sm text-[#4A4A4A]">
                We&apos;ll notify you when we launch and share exclusive updates
              </p>
            </form>
          </>
        ) : (
          <>
            {/* Success state */}
            <div className="bg-white rounded-3xl p-12 shadow-xl max-w-lg mx-auto">
              <div className="w-20 h-20 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} weight="bold" className="text-white" />
              </div>
              
              <h2 
                className="text-4xl font-bold text-[#212121] mb-4"
                style={{ fontFamily: 'Helvetica' }}
              >
                You&apos;re on the list!
              </h2>
              
              <p className="text-lg text-[#4A4A4A] mb-6">
                Thanks for joining our waitlist. We&apos;ll send you an email at{' '}
                <span className="font-semibold text-[#212121]">{email}</span> when we launch.
              </p>
              
              <button
                onClick={() => window.location.href = '/'}
                className="px-8 py-3 text-[#212121] rounded-full font-semibold hover:bg-gray-100 transition-all border-2 border-[#212121]"
              >
                Back to Home
              </button>
            </div>
          </>
        )}
      </div>

      {/* Footer text */}
      <footer className="absolute bottom-8 text-center w-full">
        <p className="text-sm text-[#4A4A4A]">
          Questions? Reach us at{' '}
          <a href="mailto:hello@uniwell.com" className="text-[#212121] font-semibold hover:underline">
            hello@uniwell.com
          </a>
        </p>
      </footer>
    </main>
  );
}
