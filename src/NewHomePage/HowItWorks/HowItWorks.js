import React from 'react';
import './HowItWorks.css';
import card_pattern from '../home_img/card_pattern.png';
import step1 from '../home_img/step1.png';
import { useScroll } from '../UseScroll'
import { motion } from 'framer-motion';
import { howItWorksAnimation, tradeHeading } from '../animation';




const HowItWorks = () => {


  return (
    <motion.div className='how-it-works-overall' 

    >
      <motion.div className='intro-how-it-works'
        variants={tradeHeading}
        initial="hidden"
        viewport={{ once: true }}
            whileInView="show"
      >
          <p>Three Successful Steps</p>
          <h1>How It <span style={{color: '#F24405'}}>Works</span> </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa sed volutpat donec interdum lacus. Gravida sagittis eu morbi dui, sagittis maecenas eget ultricies. Nullam nisl scelerisque augue odio sapien mauris, arcu fringilla. Lorem et ac arcu sit tempus nam mi sit turpis. Id massa quam a tellus habitant cum ut non neque ut tortor donec.</p>
      </motion.div>
      <div className='how-it-works-flex-div'>
      <motion.div className='how-it-works-card1 hoverCardd' style={{backgroundImage: `url(${card_pattern})`}}
        variants={howItWorksAnimation}
        initial="hidden"
        viewport={{ once: true }}
            whileInView="show"
      >
          <div className='how-it-works-step'>
              <img src={step1} alt="" />
              <h1>1</h1>
          </div>
          <div className='how-it-works-card'>
            <h1>Create your account</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum mauris non pellentesque accumsan. Nec pellentesque eget.</p>
          </div>
      </motion.div>
      <motion.div className='how-it-works-card2 hoverCardd' style={{backgroundImage: `url(${card_pattern})`}}
        variants={howItWorksAnimation}
        initial="hidden"
        viewport={{ once: true }}
            whileInView="show"
      >
          <div className='how-it-works-step'>
              <img src={step1} alt="" />
              <h1>1</h1>
          </div>
          <div className='how-it-works-card'>
            <h1>Create your account</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum mauris non pellentesque accumsan. Nec pellentesque eget.</p>
          </div>
      </motion.div>
      <motion.div className='how-it-works-card3 hoverCardd' style={{backgroundImage: `url(${card_pattern})`}}
        variants={howItWorksAnimation}
        initial="hidden"
        viewport={{ once: true }}
            whileInView="show"
      >
          <div className='how-it-works-step'>
              <img src={step1} alt="" />
              <h1>1</h1>
          </div>
          <div className='how-it-works-card'>
            <h1>Create your account</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum mauris non pellentesque accumsan. Nec pellentesque eget.</p>
          </div>
      </motion.div>
      </div>
    </motion.div>
  );
}

export default HowItWorks;
