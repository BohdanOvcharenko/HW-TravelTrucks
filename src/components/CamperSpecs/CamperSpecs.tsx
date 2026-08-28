import {
  AMENITY_LABELS,
  ENGINE_LABELS,
  FORM_LABELS,
  TRANSMISSION_LABELS,
} from "@/lib/constants";
import type { CamperDetails } from "@/types/camper";
import styles from "./CamperSpecs.module.css";

interface CamperSpecsProps {
  camper: CamperDetails;
}

function formatDimension(value: string): string {
  return value.replace(/(\d+(?:\.\d+)?)(m|l|kWh)/i, "$1 $2");
}

function formatConsumption(value: string): string {
  return value.replace(
    /(\d+(?:\.\d+)?)\s*(l|kWh)\/100km/i,
    "$1 $2 / 100km"
  );
}

export default function CamperSpecs({ camper }: CamperSpecsProps) {
  const badges = [
    TRANSMISSION_LABELS[camper.transmission],
    ...camper.amenities.map((item) => AMENITY_LABELS[item] ?? item),
    ENGINE_LABELS[camper.engine],
    FORM_LABELS[camper.form],
  ];

  const specs = [
    { label: "Form", value: FORM_LABELS[camper.form] ?? camper.form },
    { label: "Length", value: formatDimension(camper.length) },
    { label: "Width", value: formatDimension(camper.width) },
    { label: "Height", value: formatDimension(camper.height) },
    { label: "Tank", value: formatDimension(camper.tank) },
    { label: "Consumption", value: formatConsumption(camper.consumption) },
  ];

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Vehicle details</h2>

      <div className={styles.wrapper}>
      <ul className={styles.badges}>
        {badges.map((badge) => (
          <li key={badge} className={styles.badge}>
            {badge}
          </li>
        ))}
      </ul>

      <dl className={styles.specs}>
        {specs.map(({ label, value }) => (
          <div key={label} className={styles.row}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      </div>
    </div>
  );
}
