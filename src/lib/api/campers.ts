import { API_BASE_URL, CAMPERS_PER_PAGE } from "@/lib/constants";
import type {
  BookingRequest,
  BookingResponse,
  CamperDetails,
  CamperFilters,
  CamperListResponse,
  FiltersResponse,
  ReviewsResponse,
} from "@/types/camper";

function buildSearchParams(
  filters: CamperFilters,
  page: number,
  perPage: number
): string {
  const params = new URLSearchParams({
    page: String(page),
    perPage: String(perPage),
  });

  if (filters.location?.trim()) {
    params.set("location", filters.location.trim());
  }
  if (filters.form) {
    params.set("form", filters.form);
  }
  if (filters.engine) {
    params.set("engine", filters.engine);
  }
  if (filters.transmission) {
    params.set("transmission", filters.transmission);
  }

  return params.toString();
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function fetchCampers(
  filters: CamperFilters = {},
  page = 1,
  perPage = CAMPERS_PER_PAGE
): Promise<CamperListResponse> {
  const query = buildSearchParams(filters, page, perPage);
  const response = await fetch(`${API_BASE_URL}/campers?${query}`);

  return handleResponse<CamperListResponse>(response);
}

export async function fetchFilters(): Promise<FiltersResponse> {
  const response = await fetch(`${API_BASE_URL}/campers/filters`, {
    next: { revalidate: 3600 },
  });

  return handleResponse<FiltersResponse>(response);
}

export async function fetchCamperById(camperId: string): Promise<CamperDetails> {
  const response = await fetch(`${API_BASE_URL}/campers/${camperId}`, {
    next: { revalidate: 60 },
  });

  return handleResponse<CamperDetails>(response);
}

export async function fetchCamperReviews(
  camperId: string
): Promise<ReviewsResponse> {
  const response = await fetch(`${API_BASE_URL}/campers/${camperId}/reviews`, {
    next: { revalidate: 60 },
  });

  return handleResponse<ReviewsResponse>(response);
}

export async function createBookingRequest(
  camperId: string,
  data: BookingRequest
): Promise<BookingResponse> {
  const response = await fetch(
    `${API_BASE_URL}/campers/${camperId}/booking-requests`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );

  return handleResponse<BookingResponse>(response);
}
