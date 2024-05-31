"use client"

import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { getTrends } from "@/util";
import Spinner from "@/components/Spinner";
import Trend from "@/components/Trend";
import Nav from "../nav";

export default function Latest() {

  const [isLoading, setIsLoading] = useState(true);
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const trends = await getTrends();
        setTrends(trends);
      } catch (error) {
        alert("Something went wrong with loading the trends!");
        console.log(`Error: ${error}`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [])

  return (
    <main className={styles.main}>
      <Nav />
      <div className={styles.container}>
      <video autoPlay muted loop className={styles.videoBackground}>
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {isLoading
        && <Spinner />}=
        <div className={styles.trendsGridContainer}>
          {trends.map(trend => (
            <Trend {...trend}/>
          ))}
        </div>
      </div>
    </main>
  );
}
