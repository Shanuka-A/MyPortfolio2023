import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { FaHtml5, FaReact } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiCss3, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const services = [
  {
    name: 'HTML',
    icon: <FaHtml5 />,
    description: ' is the standard markup language for creating the structure and content of web pages. It provides the foundation for building the skeleton of a website.',
  },
  // {
  //   name: 'CSS',
  //   icon: <SiCss3 />,
  //   description: 'CSS is used to style and visually enhance the HTML elements on a webpage. It enables the customization of colors, fonts, layouts, and other visual aspects.',
  // },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    description: ' is a utility-first CSS framework that offers a set of pre-built CSS classes. It allows for rapid UI development by providing a comprehensive styling system.',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript />,
    description: ' is a programming language that enables dynamic and interactive behavior on websites. It adds interactivity, performs computations, and manipulates web page content.',
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
                const { name, icon,description } = service;
                return (
                  <div className="border-b border-white/20 h-[146px] mb-[38px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {icon}
                        {name}
                        {description}
                      </h4>
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
