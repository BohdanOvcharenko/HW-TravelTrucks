import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CamperDetailsContent from "@/components/CamperDetailsContent/CamperDetailsContent";
import Header from "@/components/Header/Header";
import { fetchCamperById, fetchCamperReviews } from "@/lib/api/campers";
import styles from "./page.module.css";

interface CamperDetailsPageProps {
  params: Promise<{ camperId: string }>;
}

async function getCamperData(camperId: string) {
  try {
    const [camper, reviewsData] = await Promise.all([
      fetchCamperById(camperId),
      fetchCamperReviews(camperId),
    ]);

    return { camper, reviews: reviewsData.value };
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: CamperDetailsPageProps): Promise<Metadata> {
  const { camperId } = await params;
  const data = await getCamperData(camperId);

  if (!data) {
    return { title: "Camper Details" };
  }

  return {
    title: data.camper.name,
    description: data.camper.description,
  };
}

export default async function CamperDetailsPage({
  params,
}: CamperDetailsPageProps) {
  const { camperId } = await params;
  const data = await getCamperData(camperId);

  if (!data) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <CamperDetailsContent
            camper={data.camper}
            reviews={data.reviews}
          />
        </div>
      </main>
    </>
  );
}
