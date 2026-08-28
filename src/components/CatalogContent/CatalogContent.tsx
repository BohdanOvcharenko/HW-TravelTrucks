"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import CamperCard from "@/components/CamperCard/CamperCard";
import CatalogFilters from "@/components/CatalogFilters/CatalogFilters";
import EmptyState from "@/components/EmptyState/EmptyState";
import LoadingModal from "@/components/LoadingModal/LoadingModal";
import Loader from "@/components/Loader/Loader";
import { fetchCampers } from "@/lib/api/campers";
import { CAMPERS_PER_PAGE } from "@/lib/constants";
import type { CamperFilters, FiltersResponse } from "@/types/camper";
import styles from "./CatalogContent.module.css";

interface CatalogContentProps {
  filtersData: FiltersResponse;
}

export default function CatalogContent({ filtersData }: CatalogContentProps) {
  const [activeFilters, setActiveFilters] = useState<CamperFilters>({});
  const [clearKey, setClearKey] = useState(0);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isFetching,
    isError,
  } = useInfiniteQuery({
    queryKey: ["campers", activeFilters],
    queryFn: ({ pageParam }) =>
      fetchCampers(activeFilters, pageParam, CAMPERS_PER_PAGE),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
  });

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];
  const showInitialLoader = isLoading || (isFetching && !isFetchingNextPage && !data);

  const handleClear = () => {
    setActiveFilters({});
    setClearKey((key) => key + 1);
  };

  return (
    <div className={styles.layout}>
      <CatalogFilters
        key={clearKey}
        filtersData={filtersData}
        onSearch={setActiveFilters}
        onClear={handleClear}
      />

      <section className={styles.listSection}>
        {showInitialLoader && <LoadingModal />}

        {isError && (
          <p className={styles.message}>
            Failed to load campers. Please try again later.
          </p>
        )}

        {!showInitialLoader && !isError && campers.length === 0 && (
          <EmptyState
            onClearFilters={handleClear}
            onViewAll={handleClear}
          />
        )}

        {!showInitialLoader && campers.length > 0 && (
          <ul className={styles.list}>
            {campers.map((camper) => (
              <li key={camper.id}>
                <CamperCard camper={camper} />
              </li>
            ))}
          </ul>
        )}

        {!showInitialLoader && hasNextPage && (
          <button
            type="button"
            className={styles.loadMore}
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading..." : "Load more"}
          </button>
        )}

        {isFetchingNextPage && <Loader />}
      </section>
    </div>
  );
}
