import styles from './End.module.css';

export default function End({ score, setScore, setQuestionIndex, setHasEnded }) {

    const restart = () => {
        setScore(0);
        setQuestionIndex(0);
        setHasEnded(false);
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.text}>Congratulations, &nbsp;you scored &nbsp;&nbsp;<span className={styles.score}>{score}</span>&nbsp;&nbsp;for this quiz!</h2>
            <dotlottie-player src="https://lottie.host/dfaa94b0-a148-4036-bfbf-f8e684dbb9aa/5SEe6I29ht.json" background="transparent" speed="1" style={{width: '400px', height: '400px'}} loop autoplay></dotlottie-player>
            <div className={styles.button} onClick={restart}>
                Restart
            </div>
        </div>
    );
}
