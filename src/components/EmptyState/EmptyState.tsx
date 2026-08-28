import Image from "next/image";
import { IoClose } from "react-icons/io5";
import styles from "./EmptyState.module.css";

interface EmptyStateProps {
  onClearFilters: () => void;
  onViewAll: () => void;
}

export default function EmptyState({ onClearFilters, onViewAll }: EmptyStateProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.illustration}>
        <Image
          src="/empty-state.png"
          alt=""
          width={488}
          height={463}
          priority
        />
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
