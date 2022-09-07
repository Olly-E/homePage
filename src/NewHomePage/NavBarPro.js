import React, {useState} from 'react';
import navbarprologo from './home_img/navbarprologo.png';
import './NavBarPro.css';
import {motion} from 'framer-motion';
import {navAnimation} from './animation';


const NavBarPro = () => {

  const [navBar, setNavBar] = useState('navbarpro__div');
    window.addEventListener("scroll", () => {
        window.pageYOffset > 100 ? setNavBar('navbarpro__scroll') : setNavBar('navbarpro__div');
    })

  return (
    <motion.div className={navBar}
      variants={navAnimation}
      viewport={{ once: true }}
            whileInView="show"
            initial="hidden"
    >
      <img src={navbarprologo} alt="" />
      <div className='navbar__linkkk'>
          <span>About Us</span>
          <div><span>Company</span></div>
          <div><span>Resources</span></div>
          <span>FAQ</span>
      </div>
      <div className='join__us'>
          <span>Login</span>
          <motion.span
            animate={{scale: [1, 1.1, 1, 1.1, 1, 1.1, 1]}}
            transition={{delay: 0.2, type:"spring", stiffness: 300, duration: 2.5}}
            whileHover={{scale: 1.1}}
          >Register</motion.span>
      </div>
    </motion.div>
  );
}

export default NavBarPro;
