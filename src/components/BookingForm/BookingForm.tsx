"use client";

import { useState } from "react";
import { IoAlertCircle } from "react-icons/io5";
import toast from "react-hot-toast";
import { createBookingRequest } from "@/lib/api/campers";
import styles from "./BookingForm.module.css";

interface BookingFormProps {
  camperId: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}

export default function BookingForm({ camperId }: BookingFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!name.trim()) {
      nextErrors.name = "Please enter your name.";
    } else if (/^\d+$/.test(name.trim())) {
      nextErrors.name = "Please enter your full name.";
    }

    if (!email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await createBookingRequest(camperId, {
        name: name.trim(),
        email: email.trim(),
      });
      toast.success(response.message);
      setName("");
      setEmail("");
      setErrors({});
    } catch {
      toast.error("Failed to submit booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <aside className={styles.formWrapper}>
      <h2 className={styles.title}>Book your campervan now</h2>
      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label
            htmlFor="booking-name"
            className={`${styles.label} ${errors.name ? styles.labelError : ""}`}
          >
            Name*
          </label>
          <div className={styles.inputWrapper}>
            <input
              id="booking-name"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                if (errors.name) {
                  setErrors((prev) => ({ ...prev, name: undefined }));
                }
              }}
              placeholder="Enter your name"
              className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
            />
            {errors.name && (
              <IoAlertCircle className={styles.errorIcon} aria-hidden="true" />
            )}
          </div>
          {errors.name && <p className={styles.errorText}>{errors.name}</p>}
        </div>

        <div className={styles.field}>
          <label
            htmlFor="booking-email"
            className={`${styles.label} ${errors.email ? styles.labelError : ""}`}
          >
            Email*
          </label>
          <div className={styles.inputWrapper}>
            <input
              id="booking-email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (errors.email) {
                  setErrors((prev) => ({ ...prev, email: undefined }));
                }
              }}
              placeholder="Enter your email"
              className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
            />
            {errors.email && (
              <IoAlertCircle className={styles.errorIcon} aria-hidden="true" />
            )}
          </div>
          {errors.email && <p className={styles.errorText}>{errors.email}</p>}
        </div>

        <button type="submit" className={styles.button} disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </aside>
  );
}
