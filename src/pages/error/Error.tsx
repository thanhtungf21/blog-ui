import clsx from "clsx";
import styles from "./error.module.css";

const Error = () => {
  return (
    <div className={clsx(styles.error_page)}>
      <div className="font-extrabold">Error</div>
    </div>
  );
};

export default Error;
