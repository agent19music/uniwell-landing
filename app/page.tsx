'use client';

import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Image from 'next/image';
import { CheckIcon, BookOpenTextIcon, HeartStraightIcon, UsersThreeIcon, X } from '@phosphor-icons/react';
import QRCode from 'react-qr-code';

// Mock data for slides (you can move this to a separate file)
const onboardingSlides = [
  {
    id: 'slide1',
    title: 'Boost Your Productivity',
    description: 'Stay on track with study timers, focus sessions, and goal tracking tools.',
    imageSource: 'https://pub-abe4a6405e724602a7fac9bf761e290c.r2.dev/productivityillustration-removebg.png',
    backgroundColor: '#E6F3FF',
    icon: 'check-circle',
  },
  {
    id: 'slide2',
    title: 'Professional Support',
    description: 'Book counseling appointments, browse mental health resources, and access crisis support.',
    imageSource: 'https://pub-abe4a6405e724602a7fac9bf761e290c.r2.dev/caregiver-prod.png',
    backgroundColor: '#FFF1E6',
    icon: 'heart',
  },
  {
    id: 'slide3',
    title: 'Join the Community',
    description: 'Connect with peers through discussion forums, group activities, and anonymous sharing.',
    imageSource: 'https://pub-abe4a6405e724602a7fac9bf761e290c.r2.dev/communityillustration-removebg.png',
    backgroundColor: '#E6FFE9',
    icon: 'users',
  },
  {
    id: 'slide4',
    title: 'Learn & Grow',
    description: 'Access resources, workshops, and tools to support your mental wellness journey.',
    imageSource: 'https://pub-abe4a6405e724602a7fac9bf761e290c.r2.dev/selfcareillustration-removebg.png',
    backgroundColor: '#FFE6F0',
    icon: 'book',
  },
];

interface Position {
  rotate: number;
  translateX: number;
  translateY: number;
  zIndex: number;
  scale: number;
  opacity: number;
}

// Icon component using Phosphor icons
const Icon = ({ name, size = 32, className = '' }: { name: string; size?: number; className?: string }) => {
  const iconProps = { size, className, weight: 'bold' as const };
  
  switch (name) {
    case 'check-circle':
      return <CheckIcon {...iconProps} />;
    case 'heart':
      return <HeartStraightIcon {...iconProps} />;
    case 'users':
      return <UsersThreeIcon {...iconProps} />;
    case 'book':
      return <BookOpenTextIcon {...iconProps} />;
    default:
      return <CheckIcon {...iconProps} />;
  }
};

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slides] = useState(onboardingSlides);
  const [isAnimated, setIsAnimated] = useState(false);
  const [mockupPositions, setMockupPositions] = useState<Position[]>([]);
  const [showDownloadDialog, setShowDownloadDialog] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Initialize animations
  useEffect(() => {
    setIsAnimated(true);
    setMockupPositions(getMockupPositions(0));
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const safeSlidesForAnimation = slides.slice(0, 4);

  const downloadUrl = 'https://uniwell.seanmotanya.dev/comingsoon';

  const handleGetStarted = () => {
    // On mobile, redirect to coming soon page
    if (isMobile) {
      window.location.href = 'https://uniwell.seanmotanya.dev/comingsoon';
    } else {
      setShowDownloadDialog(true);
    }
  };

  const handleDownload = () => {
    window.open(downloadUrl, '_blank');
  };

  // Function to handle advancing to the next mockup
  const handleNextMockup = () => {
    if (!safeSlidesForAnimation.length) return;
    const maxIndex = safeSlidesForAnimation.length - 1;
    const nextIndex = activeIndex >= maxIndex ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    setMockupPositions(getMockupPositions(nextIndex));
  };

  // Function to handle selecting a specific mockup
  const handleSelectMockup = (index: number) => {
    if (!safeSlidesForAnimation.length) return;
    if (index !== activeIndex) {
      setActiveIndex(index);
      setMockupPositions(getMockupPositions(index));
    }
  };

  // Enhanced getMockupPositions function for improved stacking and visibility
  const getMockupPositions = (activeIdx: number): Position[] => {
    const largeSpread = 220;
    
    // Using a higher z-index value for active item to ensure it's always on top
    const ACTIVE_Z_INDEX = 10;
    const BEHIND_Z_INDEX = 3;
    const FAR_BEHIND_Z_INDEX = 2;
    const FARTHEST_Z_INDEX = 1;
    
    if (activeIdx === 0) {
      return [
        { rotate: 0, translateX: 0, translateY: 0, zIndex: ACTIVE_Z_INDEX, scale: 1, opacity: 1 },
        { rotate: 12, translateX: largeSpread, translateY: 40, zIndex: BEHIND_Z_INDEX, scale: 0.85, opacity: 0.9 },
        { rotate: 20, translateX: largeSpread * 1.6, translateY: 80, zIndex: FAR_BEHIND_Z_INDEX, scale: 0.75, opacity: 0.7 },
        { rotate: 28, translateX: largeSpread * 2.2, translateY: 120, zIndex: FARTHEST_Z_INDEX, scale: 0.65, opacity: 0.5 },
      ];
    } else if (activeIdx === 1) {
      return [
        { rotate: -12, translateX: -largeSpread, translateY: 40, zIndex: BEHIND_Z_INDEX, scale: 0.85, opacity: 0.9 },
        { rotate: 0, translateX: 0, translateY: 0, zIndex: ACTIVE_Z_INDEX, scale: 1, opacity: 1 },
        { rotate: 12, translateX: largeSpread, translateY: 40, zIndex: BEHIND_Z_INDEX, scale: 0.85, opacity: 0.9 },
        { rotate: 20, translateX: largeSpread * 1.6, translateY: 80, zIndex: FAR_BEHIND_Z_INDEX, scale: 0.75, opacity: 0.7 },
      ];
    } else if (activeIdx === 2) {
      return [
        { rotate: -20, translateX: -largeSpread * 1.6, translateY: 80, zIndex: FAR_BEHIND_Z_INDEX, scale: 0.75, opacity: 0.7 },
        { rotate: -12, translateX: -largeSpread, translateY: 40, zIndex: BEHIND_Z_INDEX, scale: 0.85, opacity: 0.9 },
        { rotate: 0, translateX: 0, translateY: 0, zIndex: ACTIVE_Z_INDEX, scale: 1, opacity: 1 },
        { rotate: 12, translateX: largeSpread, translateY: 40, zIndex: BEHIND_Z_INDEX, scale: 0.85, opacity: 0.9 },
      ];
    } else if (activeIdx === 3) {
      return [
        { rotate: -28, translateX: -largeSpread * 2.2, translateY: 120, zIndex: FARTHEST_Z_INDEX, scale: 0.65, opacity: 0.5 },
        { rotate: -20, translateX: -largeSpread * 1.6, translateY: 80, zIndex: FAR_BEHIND_Z_INDEX, scale: 0.75, opacity: 0.7 },
        { rotate: -12, translateX: -largeSpread, translateY: 40, zIndex: BEHIND_Z_INDEX, scale: 0.85, opacity: 0.9 },
        { rotate: 0, translateX: 0, translateY: 0, zIndex: ACTIVE_Z_INDEX, scale: 1, opacity: 1 },
      ];
    } else {
      return [
        { rotate: -28, translateX: -largeSpread * 2.2, translateY: 120, zIndex: FARTHEST_Z_INDEX, scale: 0.65, opacity: 0.5 },
        { rotate: -20, translateX: -largeSpread * 1.6, translateY: 80, zIndex: FAR_BEHIND_Z_INDEX, scale: 0.75, opacity: 0.7 },
        { rotate: -12, translateX: -largeSpread, translateY: 40, zIndex: BEHIND_Z_INDEX, scale: 0.85, opacity: 0.9 },
        { rotate: 0, translateX: 0, translateY: 0, zIndex: ACTIVE_Z_INDEX, scale: 1, opacity: 1 },
      ];
    }
  };

  const renderMockups = () => {
    if (!safeSlidesForAnimation.length || mockupPositions.length === 0) {
      return <div className="h-[500px] md:h-[600px] lg:h-[700px] w-full relative flex items-center justify-center" />;
    }
    
    return (
      <div className="h-[500px] md:h-[600px] lg:h-[700px] w-full relative flex items-center justify-center mb-5 scale-75 md:scale-90 lg:scale-100">
        {safeSlidesForAnimation.map((slide, index) => {
          const position = mockupPositions[index] || { rotate: 0, translateX: 0, translateY: 0, zIndex: 1, scale: 1, opacity: 1 };
          
          return (
            <button
              key={slide.id}
              onClick={() => handleSelectMockup(index)}
              className="absolute cursor-pointer transition-all duration-[650ms] ease-out"
              style={{
                transform: `translateX(${position.translateX}px) translateY(${position.translateY}px) rotate(${position.rotate}deg) scale(${position.scale})`,
                zIndex: position.zIndex,
                opacity: position.opacity,
              }}
            >
              <div
                className={`transition-shadow duration-300 ${
                  index === activeIndex
                    ? 'shadow-[0_20px_30px_rgba(0,0,0,0.3)]'
                    : 'shadow-[0_12px_20px_rgba(0,0,0,0.2)]'
                }`}
              >
                {/* Mockup with image */}
                <div
                  className="w-[280px] md:w-[300px] h-[450px] md:h-[500px] rounded-3xl p-5 md:p-6 flex flex-col items-center justify-center overflow-hidden"
                  style={{ backgroundColor: index === 0 ? '#ffa07a' : '#212121' }}
                >
                  <div className="w-full flex-1 flex items-center justify-center mb-3 md:mb-4">
                    <Image
                      src={slide.imageSource}
                      alt={slide.title}
                      width={180}
                      height={180}
                      className="object-contain md:w-[200px] md:h-[200px]"
                    />
                  </div>
                  <h3 className="text-white text-lg md:text-xl font-bold mb-2 text-center">{slide.title}</h3>
                  <p className="text-white/80 text-xs md:text-sm text-center line-clamp-3">{slide.description}</p>
                </div>
              </div>
            </button>
          );
        })}
        
        {/* Next button */}
        <div className="absolute bottom-[30px] z-20">
          <button
            onClick={handleNextMockup}
            className="bg-[#212121] w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all active:translate-y-1"
          >
            <span className="text-white text-xl md:text-2xl font-bold">→</span>
          </button>
        </div>
      </div>
    );
  };
  
  return (
    <main className="flex-1 bg-[#fbeee3] min-h-screen">
      <div className="pb-[60px]">
        {/* Logo Header */}
        <header className="absolute top-5 left-10 z-10">
          <div className="flex flex-row items-center scale-75 md:scale-100 origin-left">
            <Image
              src="https://pub-abe4a6405e724602a7fac9bf761e290c.r2.dev/uniwell-logo-nobg.png"
              alt="UniWell Logo"
              width={40}
              height={40}
            />
            <h1 className="text-xl md:text-2xl font-semibold text-[#212121] ml-2" style={{ fontFamily: 'Helvetica' }}>UniWell</h1>
          </div>
        </header>

        <div className="flex-1 flex items-center flex-col p-5">
          {/* Header Section */}
          <div className={`mt-[100px] md:mt-[120px] mb-[50px] md:mb-[60px] flex items-center justify-center max-w-[900px] w-full px-5 mx-auto transition-all duration-800 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center w-full mb-3 md:mb-4 text-[#212121] tracking-tight" style={{ fontFamily: 'Helvetica' }}>
                Mental Wellness for Students
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-center text-[#4A4A4A] leading-[28px] max-w-[700px] w-full mx-auto font-normal">
                Tools and resources to help students thrive academically and emotionally
              </p>
            </div>
          </div>

          {/* Mockups Section */}
          {renderMockups()}

          {/* CTA Buttons */}
          <div className="flex flex-row justify-center gap-3 md:gap-4 my-8 md:my-12 flex-wrap">
            <button 
              onClick={handleGetStarted}
              className="px-6 md:px-8 py-3 md:py-4 bg-[#212121] text-white rounded-full text-sm md:text-base font-semibold hover:bg-[#333] transition-all shadow-lg hover:shadow-xl"
            >
              Get Started →
            </button>
            <button className="px-6 md:px-8 py-3 md:py-4 bg-white text-[#212121] rounded-full text-sm md:text-base font-semibold hover:bg-gray-100 transition-all border-2 border-[#212121]">
              Learn More
            </button>
          </div>

          {/* Features Section */}
          <div className="flex flex-row flex-wrap justify-center max-w-[1200px] my-[40px] md:my-[60px] gap-6 md:gap-8">
            {slides.map((slide, index) => (
              <div key={slide.id} className="w-[280px] md:w-[300px] p-4 md:p-5 flex items-center flex-col">
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full mb-5 md:mb-6 flex justify-center items-center"
                  style={{ backgroundColor: index === 0 ? '#ffa07a' : '#212121' }}
                >
                  <Icon name={slide.icon} size={28} className="text-white md:hidden" />
                  <Icon name={slide.icon} size={32} className="text-white hidden md:block" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-center text-[#212121]">
                  {slide.title}
                </h3>
                <p className="text-sm md:text-base text-center text-[#4A4A4A] leading-6">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 mx-5 pb-10">
          <Footer />
          <div className="text-center mt-8">
            <p className="text-md text-[#4A4A4A] flex items-center justify-center gap-2">
              Made by an over caffeinated undergrad 
              <Image 
                src="https://pub-abe4a6405e724602a7fac9bf761e290c.r2.dev/sean_pfp_peace-removebg-preview.png" 
                alt="Sean" 
                width={40} 
                height={40} 
                className="inline-block rounded-full" 
              />
            </p>
          </div>
        </div>
      </div>

      {/* Download Dialog */}
      {showDownloadDialog && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowDownloadDialog(false)}
        >
          <div 
            className="bg-[#fbeee3] rounded-3xl shadow-2xl max-w-md w-full p-6 md:p-8 relative mx-auto my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowDownloadDialog(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={24} weight="bold" className="text-[#212121]" />
            </button>

            {/* Dialog content */}
            <div className="flex flex-col items-center pt-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#212121] mb-2 text-center" style={{ fontFamily: 'Helvetica' }}>
                Download UniWell
              </h3>
              <Image
                src="https://pub-abe4a6405e724602a7fac9bf761e290c.r2.dev/uniwell-logo-nobg.png"
                alt="UniWell Logo"
                width={60}
                height={60}
                className="mb-4"
              />
              <p className="text-[#4A4A4A] text-center mb-6 md:mb-8 text-sm md:text-base">
                Scan the QR code with your phone
              </p>

              {/* Desktop: Show QR code */}
              <div className="bg-white p-4 md:p-6 rounded-2xl border-2 border-gray-200">
                <QRCode
                  value={downloadUrl}
                  size={200}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  viewBox={`0 0 200 200`}
                />
              </div>

              <p className="text-xs md:text-sm text-[#4A4A4A] mt-4 md:mt-6 text-center">
                Available for iOS and Android
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}