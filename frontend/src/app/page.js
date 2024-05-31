"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { getQuestions } from "@/util";
import Spinner from "@/components/Spinner";
import Question from "@/components/Question";
import Nav from "./nav";
import End from "@/components/End";
import Countdown from "@/components/Counter";

export default function Home() {

  const [hasBegun, setHasBegun] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);

  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const questions = await getQuestions();
        setQuestions(questions);
      } catch (error) {
        alert("Something went wrong with loading the questions!");
        console.log(`Error: ${error}`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [])

  const nextQuestion = () => {
    if ((questionIndex + 1) < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setHasEnded(true);
    }
  }

  const selectQuestion = (index) => {
    if (index < questionIndex) {
      return;
    }
    setQuestionIndex(index);
  }

  return (
    <main className={styles.main}>
      <Nav score={score} />
      <div className={styles.container}>
        <video autoPlay muted loop className={styles.videoBackground}>
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!hasBegun
        && <Countdown setHasBegun={setHasBegun} />}
        {(!hasEnded && !isLoading && hasBegun)
        && <><Question {...questions[questionIndex]} nextQuestion={nextQuestion} setScore={setScore} score={score}/>
        <div className={styles.questionIndexContainer}>
          <dotlottie-player src="https://lottie.host/f4f5d736-8ec0-4cb8-9671-bc389490625a/3Seb1Rqgje.json" background="transparent" speed="1" style={{position: 'absolute', top: '-40px', left: `calc(-15px + ${questionIndex} * (1.5rem + 1.5vw))`, width: '80px', height: '80px', transitionDuration: '2s'}} loop autoplay></dotlottie-player>
          {questions.map((_, index) => (<div key={index} className={styles.questionIndexDot} onClick={() => selectQuestion(index)}>
            <span className={`${index === questionIndex ? styles.selectedQuestionIndexDot : ''} ${index < questionIndex ? styles.pastQuestionIndexDot : ''}`}>.</span>
          </div>))}
        </div></>}
        {hasEnded
        && <End score={score} setScore={setScore} setQuestionIndex={setQuestionIndex} setHasEnded={setHasEnded}/>
        }
      </div>
    </main>
  );
}
