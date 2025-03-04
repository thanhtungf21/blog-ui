import clsx from "clsx";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={clsx(styles.footer, "mt-5")}>
      Copyright © 2025 Tran Trung Nguyen. All Rights Reserved.
    </div>
  );
};

export default Footer;
