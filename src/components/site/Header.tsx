import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.Header}>
      <div>
        <p style={{ margin: "0 auto" }}>TheCoppinger's Design Feedback Shack</p>
      </div>
    </header>
  );
}
