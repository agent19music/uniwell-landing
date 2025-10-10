import React from 'react';
import { useRouter } from 'next/navigation';

interface FooterLinkProps {
  title: string;
  onClick: () => void;
}

const FooterLink: React.FC<FooterLinkProps> = ({ title, onClick }) => {
  const router = useRouter();
      return (
    <button onClick={onClick} className="mb-3 text-left">
      <span className="text-[#AAAAAA] text-sm hover:text-white transition-colors">
        {title}
      </span>
    </button>
  );
};

interface FooterSectionProps {
  title: string;
  links: Array<{
    title: string;
    onClick: () => void;
  }>;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
  return (
    <div className="mb-6 min-w-[150px]">
      <h3 className="text-white text-base font-semibold mb-4">{title}</h3>
      <div className="flex flex-col">
        {links.map((link, index) => (
          <FooterLink key={index} title={link.title} onClick={link.onClick} />
        ))}
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const router = useRouter();
  const handleTherapistLogin = () => {
    // Navigate to therapist login
    router.push('/comingsoon'); 
  };

  const aboutLinks = [
    { title: 'Principles', onClick: () => router.push('/comingsoon') },
    { title: 'The Team', onClick: () => router.push('/comingsoon') },
    { title: 'Roadmap', onClick: () => router.push('/comingsoon') },
    { title: 'Building', onClick: () => router.push('/comingsoon') },
    { title: 'Testimonials', onClick: () => router.push('/comingsoon') },
  ];

  const productLinks = [
      { title: 'Features', onClick: () => router.push('/comingsoon') },
    { title: 'Use cases', onClick: () => router.push('/comingsoon') },
    { title: 'Creators', onClick: () => router.push('/comingsoon') },
    { title: 'The future', onClick: () => router.push('/comingsoon') },
    { title: 'Pricing', onClick: () => router.push('/comingsoon') },
    { title: 'Therapist Login', onClick: handleTherapistLogin },
  ];

  const legalLinks = [
    { title: 'Privacy', onClick: () => router.push('/comingsoon') },
    { title: 'Terms', onClick: () => router.push('/comingsoon') },
    { title: 'Cookies', onClick: () => router.push('/comingsoon') },
    { title: 'Legal Info', onClick: () => router.push('/comingsoon') },
  ];

  const socialLinks = [
    { title: 'Instagram', onClick: () => router.push('/comingsoon') },
    { title: 'Discord', onClick: () => router.push('/comingsoon') },
    { title: 'X (Twitter)', onClick: () => router.push('/comingsoon') },
  ];

  return (
    <footer className="bg-[#171717] py-10 px-4 w-full rounded-[20px]">
      <div className="w-4/5 mx-auto">
        <div className="flex flex-row justify-between flex-wrap">
          <FooterSection title="About" links={aboutLinks} />
          <FooterSection title="Product" links={productLinks} />
          <FooterSection title="Legal" links={legalLinks} />
          <FooterSection title="Social" links={socialLinks} />
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;