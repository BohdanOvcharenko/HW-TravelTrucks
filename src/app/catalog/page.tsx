import type { Metadata } from "next";
import CatalogContent from "@/components/CatalogContent/CatalogContent";
import Header from "@/components/Header/Header";
import { fetchFilters } from "@/lib/api/campers";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Catalog",
  description:
    "Browse our catalog of available campers. Filter by location, vehicle type, engine, and transmission.",
};

export default async function CatalogPage() {
  const filtersData = await fetchFilters();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <CatalogContent filtersData={filtersData} />
        </div>
      </main>
    </>
  );
}
