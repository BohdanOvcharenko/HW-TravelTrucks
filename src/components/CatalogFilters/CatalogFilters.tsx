"use client";

import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import {
  ENGINE_LABELS,
  FORM_LABELS,
  TRANSMISSION_LABELS,
} from "@/lib/constants";
import type {
  CamperEngine,
  CamperFilters,
  CamperForm,
  CamperTransmission,
  FiltersResponse,
} from "@/types/camper";
import styles from "./CatalogFilters.module.css";

interface CatalogFiltersProps {
  filtersData: FiltersResponse;
  onSearch: (filters: CamperFilters) => void;
  onClear: () => void;
}

export default function CatalogFilters({
  filtersData,
  onSearch,
  onClear,
}: CatalogFiltersProps) {
  const [location, setLocation] = useState("");
  const [form, setForm] = useState<CamperForm | "">("");
  const [engine, setEngine] = useState<CamperEngine | "">("");
  const [transmission, setTransmission] = useState<CamperTransmission | "">(
    ""
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSearch({
      location: location.trim() || undefined,
      form: form || undefined,
      engine: engine || undefined,
      transmission: transmission || undefined,
    });
  };

  const handleClear = () => {
    setLocation("");
    setForm("");
    setEngine("");
    setTransmission("");
    onClear();
  };

  return (
    <aside className={styles.sidebar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.field}>
          <span className={styles.label}>Location</span>
          <div className={styles.inputWrapper}>
            <HiOutlineLocationMarker className={styles.inputIcon} aria-hidden="true" />
            <input
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="City"
              className={styles.input}
            />
          </div>
        </label>

        <h2 className={styles.title}>Filters</h2>

        <fieldset className={styles.fieldset}>
          <legend className={styles.label}>Camper form</legend>
          {filtersData.forms.map((item) => (
            <label key={item} className={styles.radioLabel}>
              <input
                type="radio"
                name="form"
                value={item}
                checked={form === item}
                onChange={() => setForm(item)}
              />
              <span>{FORM_LABELS[item] ?? item}</span>
            </label>
          ))}
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend className={styles.label}>Engine</legend>
          {filtersData.engines.map((item) => (
            <label key={item} className={styles.radioLabel}>
              <input
                type="radio"
                name="engine"
                value={item}
                checked={engine === item}
                onChange={() => setEngine(item)}
              />
              <span>{ENGINE_LABELS[item] ?? item}</span>
            </label>
          ))}
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend className={styles.label}>Transmission</legend>
          {filtersData.transmissions.map((item) => (
            <label key={item} className={styles.radioLabel}>
              <input
                type="radio"
                name="transmission"
                value={item}
                checked={transmission === item}
                onChange={() => setTransmission(item)}
              />
              <span>{TRANSMISSION_LABELS[item] ?? item}</span>
            </label>
          ))}
        </fieldset>

        <button type="submit" className={styles.searchButton}>
          Search
        </button>

        <button type="button" className={styles.clearButton} onClick={handleClear}>
          <IoClose aria-hidden="true" />
          Clear filters
        </button>
      </form>
    </aside>
  );
}
