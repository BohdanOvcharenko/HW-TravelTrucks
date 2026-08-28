import StarRating from "@/components/StarRating/StarRating";
import type { Review } from "@/types/camper";
import styles from "./ReviewsList.module.css";

interface ReviewsListProps {
  reviews: Review[];
}

export default function ReviewsList({ reviews }: ReviewsListProps) {
  if (!reviews?.length) {
    return <p className={styles.empty}>No reviews yet.</p>;
  }

  return (
    <ul className={styles.list}>
      {reviews.map((review) => (
        <li key={review.id} className={styles.item}>
          <div className={styles.avatar} aria-hidden="true">
            {review.reviewer_name.charAt(0).toUpperCase()}
          </div>

          <div className={styles.content}>
            <div className={styles.header}>
              <span className={styles.name}>{review.reviewer_name}</span>
              <StarRating rating={review.reviewer_rating} />
            </div>
            <p className={styles.comment}>{review.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
