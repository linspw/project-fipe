import type { NextComponentType } from "next";
import styles from "../styles/Home.module.css";
import { AppHeader } from "@components/app/app-header";

const DefaultLayout: NextComponentType = ({ children }) => {
  return (
    <div className={styles.container}>
      <AppHeader />

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Foi</footer>
    </div>
  );
};

export { DefaultLayout };
