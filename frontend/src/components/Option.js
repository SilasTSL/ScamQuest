import styles from './Option.module.css';

export default function Option({ text, onClick }) {

  return (
    <div onClick={onClick} className={`${styles.container} ${styles.btn}`}>
        <span>{text}</span>
    </div>
  );
}
