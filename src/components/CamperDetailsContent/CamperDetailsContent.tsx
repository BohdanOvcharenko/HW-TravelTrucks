import { FaStar } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import CamperGallery from "@/components/CamperGallery/CamperGallery";
import BookingForm from "@/components/BookingForm/BookingForm";
import CamperSpecs from "@/components/CamperSpecs/CamperSpecs";
import ReviewsList from "@/components/ReviewsList/ReviewsList";
import {
  formatLocation,
  formatReviewsCount,
} from "@/lib/constants";
import type { CamperDetails, Review } from "@/types/camper";
import styles from "./CamperDetailsContent.module.css";

interface CamperDetailsContentProps {
  camper: CamperDetails;
  reviews: Review[];
}

export default function CamperDetailsContent({
  camper,
  reviews,
}: CamperDetailsContentProps) {
  return (
    <div className={styles.page}>
      <div className={styles.topSection}>
        <CamperGallery images={camper.gallery} camperName={camper.name} />

        <div className={styles.info}>
          <h1 className={styles.title}>{camper.name}</h1>

          <div className={styles.meta}>
            <div className={styles.ratingRow}>
              <FaStar className={styles.star} aria-hidden="true" />
              <span>
                {formatReviewsCount(camper.rating, camper.totalReviews)}
              </span>
            </div>

            <div className={styles.location}>
              <HiOutlineLocationMarker aria-hidden="true" />
              <span>{formatLocation(camper.location)}</span>
            </div>
          </div>

          <p className={styles.price}>€{camper.price.toLocaleString()}</p>
          <p className={styles.description}>{camper.description}</p>
          <CamperSpecs camper={camper} />
        </div>
      </div>

      <div className={styles.bottomSection}>
        <section className={styles.reviewsSection}>
          <h2 className={styles.sectionTitle}>Reviews</h2>
          <ReviewsList reviews={reviews} />
        </section>

        <BookingForm camperId={camper.id} />
      </div>
    </div>
  );
}
