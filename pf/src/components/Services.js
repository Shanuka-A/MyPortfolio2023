import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import { motion } from 'framer-motion';
import{fadeIn} from '../variants'
import { Link } from 'react-scroll';

const services=[
  {
    name: 'Designning',
    description:'dbdhvdhfvbdshvfbdsbvhdbvfhbdsfvhbdsfhvbsdhfvbhsdbfvhsdbfvh',
    link:'learn more',
  },

  {
    name: 'Designning',
    description:'dbdhvdhfvbdshvfbdsbvhdbvfhbdsfvhbdsfhvbsdhfvbhsdbfvhsdbfvh',
    link:'learn more',
  },

  {
    name: 'Designning',
    description:'dbdhvdhfvbdshvfbdsbvhdbvfhbdsfvhbdsfhvbsdhfvbhsdbfvhsdbfvh',
    link:'learn more',
  },
]

const Services = () => {
  return( 
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/*text */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-fuchsia-400 mb-6'>What I do</h2>
          <h3 className='h3 max-w-[450px] mb-16'>
            .................................................
          </h3>
          <button className='btn btn-sm'>See my work</button>
        </motion.div>

        {/*services */}
        <motion.div 
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          <div>
          {services.map((services, index)=>{

            const{name, description,link}= services;
            return(
              <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                <div className='max-w-[476px]'>
                  <h4 classname='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                    {name}
                    </h4>
                  <p className='font-secondary leading-tight'>
                    {description}
                    </p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a href='#'className='btn w-9 h-9 mb-[42px]'>
                    <BsArrowUpRight/>
                  </a>
                  <a href='#'>{link}</a>
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
