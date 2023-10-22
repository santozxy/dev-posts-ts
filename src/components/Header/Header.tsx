import styles from "./Header.module.css";

import logo from "../../assets/logo.png";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo DevPosts" />
    </header>
  );
}
