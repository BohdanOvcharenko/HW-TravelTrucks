import { IoClose } from "react-icons/io5";
import styles from "./EmptyState.module.css";

interface EmptyStateProps {
  onClearFilters: () => void;
  onViewAll: () => void;
}

export default function EmptyState({ onClearFilters, onViewAll }: EmptyStateProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.illustration} aria-hidden="true">
        <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 90 L40 70 L60 80 L80 60 L120 75 L160 55 L180 90 Z" stroke="#829B91" strokeWidth="2" fill="#F2F4F7"/>
          <rect x="70" y="55" width="60" height="30" rx="4" stroke="#829B91" strokeWidth="2" fill="#fff"/>
          <circle cx="85" cy="90" r="8" fill="#829B91"/>
          <circle cx="115" cy="90" r="8" fill="#829B91"/>
          <circle cx="130" cy="45" r="20" stroke="#829B91" strokeWidth="3" fill="none"/>
          <line x1="145" y1="60" x2="155" y2="70" stroke="#829B91" strokeWidth="3"/>
        </svg>
      </div>

      <h2 className={styles.title}>No campers found</h2>
      <p className={styles.text}>
        We couldn&apos;t find any campers that match your filters. Try adjusting
        your search or clearing some filters.
      </p>

      <div className={styles.actions}>
        <button type="button" className={styles.clearButton} onClick={onClearFilters}>
          <IoClose aria-hidden="true" />
          Clear filters
        </button>
        <button type="button" className={styles.viewAllButton} onClick={onViewAll}>
          View all campers
        </button>
      </div>
    </div>
  );
}
