import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => <p className={styles.error}>{message}</p>;

export default ErrorMessage;
