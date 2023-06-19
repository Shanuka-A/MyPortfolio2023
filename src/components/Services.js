import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { FaHtml5, FaReact } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiCss3, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const services = [
  {
    name: 'Frontend Developing',
    description: 'Proficient in HTML, CSS, and JavaScript. Experience with front-end frameworks such as React and Angular. Skilled in creating responsive and user-friendly interfaces.',
  },
  
  {
    name: 'Backend Developing',
    description: 'Strong knowledge of server-side programming languages like Node.js and Python. Familiarity with databases such as MySQL and MongoDB. Experienced in building robust and scalable back-end systems.',
  },
  
  {
    name: 'UX / UI Designing',
    description: 'Proficient in user-centered design principles and practices. Skilled in creating intuitive and visually appealing user interfaces. Experience in conducting user research, creating wireframes. Strong knowledge of interaction design and usability testing.',
  },
  
];

const Services = () => {
  const handleSeeWorkClick = () => {
    window.open('https://github.com/Shanuka-A', '_blank'); 
  };

  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className=''></div>
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  lg:bg-bottom bg-no-repeat mix-blend-lighten lg:mb-0"
          >
            <h2 className="h2 text-fuchsia-400 mb-6">What I do</h2>
            <p className='mb-6 text-[20px]'>
            I'm currently engaged in designing the UI/UX of a website or web application. They are using HTML, CSS, and JavaScript as the core technologies for building the frontend, which is the part of a website that users interact with. Additionally, they mentioned using Tailwind CSS, which is a popular utility-first CSS framework that provides pre-built CSS classes to streamline the styling and layout process. By combining these technologies, the person is able to create visually appealing and interactive frontend designs for their web projects.
            </p>
            <button className="btn btn-sm" onClick={handleSeeWorkClick}>
              See My Work
            </button>
          </motion.div>

          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name,description } = service;
                return (
                  <div className="border-b border-white/20 h-[180px] mb-[28px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        
                        {name}
                        
                      </h4>
                      <p>{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
