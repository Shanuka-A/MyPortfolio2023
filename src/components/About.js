import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// Import your images
import CIAS from '../assets/CIAS.jpeg';


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen '>
          {/* Text */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-fuchsia-300'>About Me</h2>
            <h3 className='h3 mb-4'>I'm an undergraduate Student at SLIIT </h3>
            <p className='mb-6 text-[20px]'>
              Hello! I'm Shanuka Udara and I'm currently an undergraduate student at the SLIIT Faculty of Computing.
              I am a hardworking learner who is passionate about providing exceptional service of the highest quality.
              I always strive to complete projects to the best of my abilities and I am determined to achieve excellence.
              I take my responsibilities seriously and I am motivated to give my best in both professional duties and daily activities.
            </p>
            {/* Stats */}
            <div className='flex gap-x-10 lg:gap-x-12 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={3} duration={4} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[3px]'>
                  Years of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={10} duration={4} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[3px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
            </div>
          </motion.div>

          {/* Work History */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h3 className='h3 mb-4'>Work History  </h3>
            <p className='mb-6 text-[20px]'>
              LEO club of SLIIT Member - Information Technology
              2022 - Present (1 Year)
            </p>
             
            <p className='mb-6 text-[20px]'>
              SLIIT Student [ June 2021 - Present (2 Years) ]
            </p>
            
            <p className='mb-6 text-[20px]'>
              FCSC SLIIT Member [ June 2021 - Present (2 Years) ]
            </p>

            <p className='mb-6 text-[20px]'>
              Client Ambassador at Commercial Credit & Finance PLC  2020-2021(7 Months)
            </p>

            <h3 className='h3 mb-4'>Volunteer Work  </h3>
            <p className='mb-6 text-[20px]'>
              Member of Central Intiative for Astronomical Studies(CIAS)
            </p>

            <img src={CIAS} alt="CIAS" className="mb-4" style={{ width: '300px', height: 'auto' }} />
            

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
