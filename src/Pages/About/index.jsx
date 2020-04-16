import React, {useState} from 'react';

function About (props) {

  const [count, setCount] = useState(0);
  const [ count1, setCount1 ] = useState(0);
  const [ count2, setCount2 ] = useState(0);

  const onClick = () => {
    setCount(count+1);
    setCount1(count1+1);
    setCount2(count2+1);
  }

  return (
    <div onClick={onClick}> 联系方式：379522872{count}{count1}{count2} </div>
  )

}

export default About;