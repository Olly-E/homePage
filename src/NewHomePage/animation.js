// export const navAnimation = {
//     hidden: {y: '-10vh'},
//     show:  {y: '0vh', opacity: 1,
//     transition: {delay: 0.2, type: 'spring', stiffness: 120}
//     }
// }

import { type } from "@testing-library/user-event/dist/type"

export const navAnimation = {
    hidden: {y: -50, opacity: 0},
    show: {y: 1, opacity: 1, transition: {
        type: 'spring',
        stiffness: 160
    }}
}

export const globeAnimation = {
    hidden: {x: '0vw', opacity: 1},
    visible: {
        x: ['0vw', '-170vw'], opacity: 1,
        transition: {
            type: 'tween',
            duration: 20,
            repeatType: 'reverse',
            repeat: Infinity
        },
    exit: {
        x: ['-100vw', '0vw'],
        transition: {
            type: 'tween',
            duration: 15,
            repeat: Infinity
        },
    }
    }
}


export const ringAnimation1 = {
    hidden: {opacity: 0},
    show: {x:['0vw', '3vw', '0vw'], opacity:[1, 0, 1]}
}
export const ringAnimation2 = {
    hidden: {opacity: 0},
    show: {x:['-3vw', '0vw', '0vw'], opacity: [0, 1, 1]}
}

export const tradeContainer = {
    show: {
        opacity: 1,
        transition: {
        }
    }
}

export const tradeHeading = {
    hidden: {scale: 0, opacity: 0},
    show: {scale: 1, opacity: 1,
    transition: {
        delay: 0.2,
        duration: 0.6,
        ease: 'easeInOut'
    }
    }
}

export const tradeAnimation = {
    hidden: {y: '120vh'},
    show: {y: '0vh', transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 5.3,
    }}
}
export const tradeAnimationImg = {
    hidden: {y: '120vh'},
    show: {y:'0vh', transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 5.3,
    }}
}

// ........................................

export const tradeAnimation2 = {
    hidden: {y: '120vh'},
    show: {y:  '0vh', transition: {
        duration: 1.5,
        repeat: Infinity,
        delay: 7,
        repeatType: 'reverse',
        repeatDelay: 5.3
    }}
}

export const tradeAnimationImg2 = {
    hidden: {y: '120vh'},
    show: {y: '0vh', transition: {
        duration: 1.5,
        repeat: Infinity,
        delay: 7,
        repeatType: 'reverse',
        repeatDelay: 5.3
    }}
}

//........................................

export const tradeAnimation3 = {
    // hidden: {y: 250},
    show: {y: [750, 0, 750], transition: {
        // type: 'tween',
        duration: 5,
        delay: 13,
        yoyo: Infinity
    }}
}

export const tradeAnimationImg3 = {
    // hidden: {y: 750},
    show: {y: [750, 0, 750], transition: {
        // type: 'tween',
        duration: 10,
        delay: 13,
        yoyo: Infinity
    }}
}

export const mobilePhoneAnimation ={
    hidden: {x: '-24vw'},
    show: {x: '0vw',
    transition: {
        delay: 0.3,
        duration: 1.5,
        type: 'tween',
        ease: 'easeInOut'
    }
}
}
export const mobileIconAnimation = {
    hidden: {x: '-17vw'},
    show: {x: '0vw',
    transition: {
        delay: 1,
        duration: 1.5,
        type: 'tween',
        ease: 'easeInOut'
    }
}
}
export const mobileTextpAnimation ={
    hidden: {y: '10vh'},
    show: {y: '0vh',
    transition: {
        delay: 1,
        duration: 1.5,
        type: 'tween',
        ease: 'easeInOut'
    }
}
}
export const mobileTextHAnimation ={
    hidden: {y: '-10vh'},
    show: {y: '0vh',
    transition: {
        delay: 1,
        duration: 1.5,
        type: 'tween',
        ease: 'easeInOut'
    }
    }
}

export const mainMobileTextAnimation = {
    hidden: {opacity: 0},
    show: {opacity: 1,
    transition: {
        delay: 0.5,
        duration: 2,
        ease: 'easeInOut'
    }
    }
}

export const howItWorksAnimation = {
    hidden: {
        scale: 1.2
    },
    show: {
        scale: 1,
        transition: {
            delay: 0.1,
            duration: 0.8,
            ease: 'easeInOut'
        }
    }

}
