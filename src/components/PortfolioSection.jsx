import React from 'react';
import project01 from '../assets/project-01.png';
import project02 from '../assets/project-02.png';
import project03 from '../assets/project-03.png';
import project04 from '../assets/project-04.png';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl md:leading-normal font-bold mb-10 text-center">Our Projects</h2>
        <p className="mb-8 font-light text-center">
          We have been providing great flooring for service<br />
          problem solutions and finished the task
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src={project01} alt="Project 1" className="w-full rounded-md" />
          <img src={project02} alt="Project 2" className="w-full rounded-md" />
          <img src={project03} alt="Project 3" className="w-full rounded-md" />
          <img src={project04} alt="Project 4" className="w-full rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
