import { useState, useEffect } from "react";
import styles from "./Trend.module.css";

export default function Trend({ trendId, header, author, date, body }) {
  const [isTooLong, setIsTooLong] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    if (body.length > 200) {
      setIsTooLong(true);
    }
  }, []);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div 
      className={styles.container}
    >
      <h2 className={styles.trendHeader}>
        {trendId}. {header}
      </h2>
      <div className={styles.trendDetailsContainer}>
        <p className={styles.trendAuthor}> {author} </p>
        <p className={styles.trendDate}> {date} </p>
      </div>
      <h5 className={styles.trendBody}>
        {isTooLong && !showFullText ? `${body.substring(0, 200)}...` : body}
      </h5>
      {isTooLong && (
        <button onClick={toggleText} className={styles.readMoreButton}>
          {showFullText ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
}
