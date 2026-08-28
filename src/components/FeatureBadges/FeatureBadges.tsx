import { FaCogs, FaGasPump, FaTruck } from "react-icons/fa";
import {
  ENGINE_LABELS,
  FORM_LABELS,
  TRANSMISSION_LABELS,
} from "@/lib/constants";
import type { CamperEngine, CamperForm, CamperTransmission } from "@/types/camper";
import styles from "./FeatureBadges.module.css";

interface FeatureBadgesProps {
  engine: CamperEngine;
  transmission: CamperTransmission;
  form: CamperForm;
}

export default function FeatureBadges({
  engine,
  transmission,
  form,
}: FeatureBadgesProps) {
  const badges = [
    { icon: FaGasPump, label: ENGINE_LABELS[engine] ?? engine },
    { icon: FaCogs, label: TRANSMISSION_LABELS[transmission] ?? transmission },
    { icon: FaTruck, label: FORM_LABELS[form] ?? form },
  ];

  return (
    <ul className={styles.list}>
      {badges.map(({ icon: Icon, label }) => (
        <li key={label} className={styles.badge}>
          <Icon aria-hidden="true" />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}
