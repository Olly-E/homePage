import React from 'react';
import './MobileSection.css';
import phoneMock from '../home_img/phoneMock.png';
import playstore_download  from '../home_img/playstore_download.png';
import applestore_download from '../home_img/applestore_download.png';
import Apple_play_store from '../home_img/Apple_play_store.png';
import Google_play_btn from '../home_img/Google_play_btn.png';
import { useScroll } from '../UseScroll';
import { motion } from 'framer-motion';
import { mainMobileTextAnimation, mobileIconAnimation, mobilePhoneAnimation } from '../animation';
import {mobileTextpAnimation} from '../animation';
import { mobileTextHAnimation } from '../animation';

const MobileSection = () => {


  const [element, controls] = useScroll();
  return (
    <div className='mobile-sec-div' ref={element}>
        <div className='mockupdiv'><motion.img className='mockup' src={phoneMock} alt="" 
          variants={mobilePhoneAnimation}
          animate={controls}
          initial= "hidden"
        />
          <div className='mockup-text'>
            <div className='tex-mockup-divv'>
                <motion.h3
                  variants={mobileTextHAnimation}
                  initial="hidden"
                  animate={controls}
                >Download the Paybuymax App</motion.h3>
                <motion.p
                  variants={mobileTextpAnimation}
                  initial="hidden"
                  animate={controls}
                >The app is now available in Google Play and Apple Store</motion.p>
            </div>
            
            <motion.div className='mockup-text-logo'
              variants={mobileIconAnimation}
              initial="hidden"
              animate={controls}
            >
              <img src={applestore_download} alt="" />
              <img src={playstore_download} alt="" />
            </motion.div>
          </div>
        </div>
        <motion.div className='mobile-sec-text'
          variants={mainMobileTextAnimation}
          animate={controls}
          initial="hidden"

        >
          <h1><span style={{color: '#fff'}}>Trade on the</span> Mobile App</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien turpis at eget leo vitae fermentum nisi odio duis. Risus nullam tincidunt scelerisque donec lectus mattis arcu ac. Viverra in feugiat dolor ullamcorper eget enim libero.</p>
          <div className='google-app-redirect'>
            <img src={Apple_play_store} alt="" />
            <img src={Google_play_btn} alt="" />
          </div>
        </motion.div>
    </div>
  );
}

export default MobileSection;
