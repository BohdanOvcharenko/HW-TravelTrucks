import styles from "./LoadingModal.module.css";

export default function LoadingModal() {
  return (
    <div className={styles.overlay} role="status" aria-live="polite">
      <div className={styles.modal}>
        <span className={styles.spinner} aria-hidden="true" />
        <h2 className={styles.title}>Loading tracks...</h2>
        <p className={styles.text}>
          Please wait while we fetch the best travel trucks for you.
        </p>
      </div>
    </div>
  );
}
