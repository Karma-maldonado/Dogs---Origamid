import Dogs from "@Assets/images/dogs-footer.svg?react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos reservados</p>
    </footer>
  );
};

export default Footer;
