
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

const Counter = () => {

  const navigate = useNavigate();

  //creating state variable with initial value zero
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1); //adding value every second
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="Counter">
      <h1 className="title">Counter</h1>
      <p className="count"> {count}</p>

      <a className="goBack" type="primary" onClick={() => navigate('/')}>
        &#x21E6; Go Back
      </a>
    </div>    
  );
};

export default Counter;