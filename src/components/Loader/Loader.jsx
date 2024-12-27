import { Circles } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => (
  <div className={styles.loader}>
    <Circles height="80" width="80" color="#4fa94d" />
  </div>
);

export default Loader;
