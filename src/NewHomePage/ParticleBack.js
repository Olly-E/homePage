import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import './ParticleBack.css'

const ParticleBack = () => {
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };

      return (
        <div className="particle_div">
           <Particles
          id="tsparticles"
          init={particlesInit}
    
          options={{
            "fullScreen": {
                "enable": false,
                "zIndex": 1
            },
            "particles": {
                "number": {
                    "value": 20,
                    "density": {
                        "enable": false,
                        "factor": 800,
                        "value_area": 3000
                    }
                },
                "color": {
                    "value": "#F24405"
                },
                "shape": {
                    "type": "circle",
                    "options": {
                        "sides": 5
                    }
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 4,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.9,
                        "sync": false
                    }
                },
                "rotate": {
                    "value": 0,
                    "random": true,
                    "direction": "clockwise",
                    "animation": {
                        "enable": true,
                        "speed": 5,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 600,
                    "color": "#FFC700",
                    "opacity": 0.4,
                    "width": 2
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 3000,
                        "rotateY": 3000,
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": ["grab"]
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "bubble"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 900,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "background": {
                "color": "trasnparent",
                "image": "",
                "position": "50% 50%",
                "repeat": "no-repeat",
                "size": "cover"
            }
        }}
        />
        </div>
      );
    }

export default ParticleBack;
