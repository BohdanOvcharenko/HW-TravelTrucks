import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import FeatureBadges from "@/components/FeatureBadges/FeatureBadges";
import {
  formatLocation,
  formatReviewsCount,
} from "@/lib/constants";
import type { CamperListItem } from "@/types/camper";
import styles from "./CamperCard.module.css";

interface CamperCardProps {
  camper: CamperListItem;
  priority?: boolean;
}

export default function CamperCard({ camper, priority = false }: CamperCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={camper.coverImage}
          alt={camper.name}
          fill
          sizes="219px"
          priority={priority}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{camper.name}</h2>
          <p className={styles.price}>€{camper.price.toLocaleString()}</p>
        </div>

        <div className={styles.meta}>
          <div className={styles.ratingRow}>
            <FaStar className={styles.star} aria-hidden="true" />
            <span className={styles.ratingValue}>
              {formatReviewsCount(camper.rating, camper.totalReviews)}
            </span>
          </div>

          <div className={styles.location}>
            <HiOutlineLocationMarker aria-hidden="true" />
            <span>{formatLocation(camper.location)}</span>
          </div>
        </div>

        <p className={styles.description}>{camper.description}</p>

        <FeatureBadges
          engine={camper.engine}
          transmission={camper.transmission}
          form={camper.form}
        />

        <Link
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Show more
        </Link>
      </div>
    </article>
  );
}
