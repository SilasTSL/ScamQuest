import React, { useState, useEffect } from 'react';
import styles from './Counter.module.css';

const Countdown = ({ setHasBegun }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setHasBegun(true);
    }
  }, [count]);

  return (
    <div>
        <h1 className={styles.count}>{count}</h1>
    </div>
  );
};

export default Countdown;
