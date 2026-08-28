import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header/Header";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover premium campers for unforgettable road trips. Browse our catalog and find your perfect travel companion.",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.hero}>
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h1 className={styles.title}>Campers of your dreams</h1>
          <p className={styles.subtitle}>
            You can find everything you want in our catalog
          </p>
          <Link href="/catalog" className={styles.button}>
            View Now
          </Link>
        </div>
      </main>
    </>
  );
}
