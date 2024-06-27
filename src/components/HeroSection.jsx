import React from 'react';
import hero from '../assets/hero.png';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl md:text-5xl md:leading-normal font-bold mb-10">
            Build Your Brand<br/>
            With #1 Hiring Expert<br/>
            <span className="text-primary underline">Freelancer</span> World.
          </h2>
          <p className="mb-8 font-light md:max-w-[550px]">
            Work with the best freelance talent from around the world on our secure, flexible, and cost-effective platform. Hiring expert freelancer world and you can contact us if you don’t understand about this application for your asking in here.
          </p>
          <button
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition duration-300"
            onClick={() => scrollToSection('contact-form')} 
          >
            Contact Us
          </button>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <img src={hero} alt="Hero Image" className="rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
