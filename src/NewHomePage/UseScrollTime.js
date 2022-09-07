import React, {useState} from 'react'
import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';

export const useScrollTime = (thresh = 0.1) => {

    const [animTitle, setAnimTitle] = useState('');
    const [animeDesc, setAnimDesc] = useState('');
    const [animBUtton, animButton] = useState('');

    const controls = setInterval(() => {
        
    }, 5000)
    const [element, view] = useInView({threshold: thresh});
    if (view) {

    } else {
        
    }
    return [element, controls];
 }