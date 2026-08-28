import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header/Header";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "404 — Camper not found",
  description:
    "The camper you are looking for does not exist or has been removed.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>404 — Camper not found</h1>
        <p className={styles.text}>
          The camper you are looking for does not exist or has been removed.
        </p>
        <Link href="/catalog" className={styles.link}>
          Back to catalog
        </Link>
      </main>
    </>
  );
}
