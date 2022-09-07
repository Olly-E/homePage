import React, {useState, useRef, useEffect} from 'react';
// import './HomePagePro.css'

const NumberData = () => {

    const end = 500;

    const ref = useRef(0)
    const [count, setCount] = useState(null);
  
    const acc = end/200;
    const updateCounterState = () => {
      if (ref.current < end){
        const result = Math.ceil(ref.current + acc)
        if (result > end ) return setCount(end)
        setCount(result)
        ref.current = result
      }
      setTimeout(updateCounterState, 50)
    }
  
    useEffect(() => {
      let isMounted = true;
      if (isMounted){
        updateCounterState()
      }
      return () => isMounted = false
    }, [end])
  return (
    <div className='ring-sec-div' >
    <div>
      <h3
        dataTarget="542"
      >${count}B</h3>
      <p>Quality volume traded</p>
    </div>
    <div>
      <h3>$547B</h3>
      <p>Dollar Price Rate</p>
    </div>
    <div>
      <h3>89+M</h3>
      <p>Verified Users</p>
    </div>
  </div>
  );
}

export default NumberData;
