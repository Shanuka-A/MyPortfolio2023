import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { BsArrowUpRight } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';

import htmlImg from '../assets/Screenshot (15).png';
import cssImg from '../assets/Screenshot (16).png';
import javascriptImg from '../assets/Screenshot (17).png';
import mongodbImg from '../assets/Screenshot (14).png';
import reactImg from '../assets/Screenshot (18).png';

const Work = () => {
  const techs = [
    {
      id: 1,
      src: htmlImg,
      title: 'Travel Page - Home',
    },
    {
      id: 2,
      src: cssImg,
      title: 'Travel Page - Home',
    },
    {
      id: 3,
      src: javascriptImg,
      title: 'Travel Page - Services',
    },
    {
      id: 4,
      src: mongodbImg,
      title: 'Online Cake Delivery Page',
    },
    {
      id: 5,
      src: reactImg,
      title: 'Online Cake Delivery Page',
    },
  ];

  return (
    <section className="section" id="work">
      <div className="container mx-auto flex">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="test-4xl font-bold"
          >
            <h2 className="h2 text-fuchsia-400 mb-6">Recent </h2>
            <h3 className="h3 mb-4">These are the Recent Projects that I've worked on </h3>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
          >
            {techs.map(({ id, src, title }) => (
              <motion.div
                key={id}
                className="shadow-md hover:scale-105 hover:shadow-blue-500 duration-500 py-6 rounded-lg"
              >
                <img src={src} alt="" className="w-19 mx-auto" />
                <p className="mt-4">{title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
