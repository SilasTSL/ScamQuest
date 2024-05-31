import styles from './Question.module.css';
import Option from './Option';

export default function Question({ questionId, questionType, body, question, options, answer, nextQuestion, setScore, score }) {

  const pickOption = (answerIndex) => {
    if (answerIndex === answer) {
      setScore(score + 1);
    }
    nextQuestion();
  }

  return (
    <div className={styles.container}>
        {questionType == 0
        && <>
            <h2 className={styles.questionNumber}>{questionId}.&nbsp;&nbsp;&nbsp;<span className={styles.questionText}>{question}</span></h2>
            <div className={styles.options}>
                {options.map((option, index) => <Option onClick={() => pickOption(index)} key={index} text={option} />)}
            </div>
        </>
        }
    </div>
  );
}
