import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return(
  <section className='section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col'>
        {/*text */}
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
         className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-x1 lg:text-[40px] uppercase text-accent font-medium mb-2 tracking-wide'>
              Get In Touch
            </h4>
            <h2 className='text-[45px] lg:text-[80px] leading-none mb-12'>
              Let's work <br/> together !
            </h2>
          </div>
        </motion.div>

        <motion.div 
        variants={fadeIn('left', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex justify-center items-center'>
        <form action="https://getform.io/f/fdb52fcc-bfbc-4bc1-a8e6-3bc17fa046c7" method='POST' className='flex flex-col w-full md:w-11/12'>
          <input 
          type='text' 
          name='name' 
          placeholder='Enter Your Name'
          className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
          />
          <input 
          type='text' 
          name='email' 
          placeholder='Enter Your E-mail'
          className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
          />
          <input 
          type='text' 
          name='phone' 
          placeholder='Enter Your Phone Number'
          className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
          />
          <textarea
          name='message'
          placeholder='Enter Your Message'
          rows={10}
          className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
          >

          </textarea>
          <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
            Let's talk
          </button>

        </form>
        </motion.div>

      </div>
    </div>
  </section>
  );
};

export default Contact;
