import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          In Progress Portfolio: Please await updates or see relevant links below
        </p>
      </div>

      <div className={styles.center}>
        <h1 >
          Isabelle Greenberg
        </h1>
      </div>

      <div className={styles.grid}>
        <a
          href="https://www.linkedin.com/in/isabelle-greenberg"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            LinkedIn <span>-&gt;</span>
          </h2>
          <p>Find details on my previous job and project experience</p>
        </a>
      </div>
    </main>
  );
}
