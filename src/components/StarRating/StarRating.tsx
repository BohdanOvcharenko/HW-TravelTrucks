import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import styles from "./StarRating.module.css";

interface StarRatingProps {
  rating: number;
  size?: number;
}

export default function StarRating({ rating, size = 16 }: StarRatingProps) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;

    if (rating >= starValue) {
      return <FaStar key={index} size={size} className={styles.filled} />;
    }

    if (rating >= starValue - 0.5) {
      return (
        <FaStarHalfAlt key={index} size={size} className={styles.filled} />
      );
    }

    return <FaRegStar key={index} size={size} className={styles.empty} />;
  });

  return <div className={styles.rating}>{stars}</div>;
}
