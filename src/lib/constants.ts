export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://campers-api.goit.study";

export const CAMPERS_PER_PAGE = 4;

export const FORM_LABELS: Record<string, string> = {
  alcove: "Alcove",
  panel_van: "Panel Van",
  integrated: "Integrated",
  semi_integrated: "Semi Integrated",
};

export const ENGINE_LABELS: Record<string, string> = {
  diesel: "Diesel",
  petrol: "Petrol",
  hybrid: "Hybrid",
  electric: "Electric",
};

export const TRANSMISSION_LABELS: Record<string, string> = {
  automatic: "Automatic",
  manual: "Manual",
};

export const AMENITY_LABELS: Record<string, string> = {
  ac: "AC",
  bathroom: "Bathroom",
  kitchen: "Kitchen",
  tv: "TV",
  radio: "Radio",
  refrigerator: "Refrigerator",
  microwave: "Microwave",
  gas: "Gas",
  water: "Water",
};

export function formatLocation(location: string): string {
  const parts = location.split(",").map((part) => part.trim()).filter(Boolean);

  if (parts.length >= 2) {
    const [country, city] = parts;
    return `${city}, ${country}`;
  }

  return location;
}

export function formatReviewsCount(rating: number, count: number): string {
  return `${rating} (${count} Review${count === 1 ? "" : "s"})`;
}
