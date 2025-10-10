import React from 'react';

interface FooterLinkProps {
  title: string;
  onClick: () => void;
}

const FooterLink: React.FC<FooterLinkProps> = ({ title, onClick }) => {
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
  const handleTherapistLogin = () => {
    // Navigate to therapist login
    window.location.href = '/therapist/loginscreen';
  };

  const aboutLinks = [
    { title: 'Principles', onClick: () => console.log('Principles pressed') },
    { title: 'The Team', onClick: () => console.log('The Team pressed') },
    { title: 'Roadmap', onClick: () => console.log('Roadmap pressed') },
    { title: 'Building', onClick: () => console.log('Building pressed') },
    { title: 'Testimonials', onClick: () => console.log('Testimonials pressed') },
  ];

  const productLinks = [
    { title: 'Features', onClick: () => console.log('Features pressed') },
    { title: 'Use cases', onClick: () => console.log('Use cases pressed') },
    { title: 'Creators', onClick: () => console.log('Creators pressed') },
    { title: 'The future', onClick: () => console.log('The future pressed') },
    { title: 'Pricing', onClick: () => console.log('Pricing pressed') },
    { title: 'Therapist Login', onClick: handleTherapistLogin },
  ];

  const legalLinks = [
    { title: 'Privacy', onClick: () => console.log('Privacy pressed') },
    { title: 'Terms', onClick: () => console.log('Terms pressed') },
    { title: 'Cookies', onClick: () => console.log('Cookies pressed') },
    { title: 'Legal Info', onClick: () => console.log('Legal Info pressed') },
  ];

  const socialLinks = [
    { title: 'Instagram', onClick: () => console.log('Instagram pressed') },
    { title: 'Discord', onClick: () => console.log('Discord pressed') },
    { title: 'X (Twitter)', onClick: () => console.log('X (Twitter) pressed') },
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