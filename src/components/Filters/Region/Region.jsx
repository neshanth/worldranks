import { useState } from "react";
import styles from "./Region.module.css";
const Region = () => {
  const [regions, setRegions] = useState([
    {
      name: "Americas",
      value: "Americas",
    },
    {
      name: "Antarctic",
      value: "Antarctic",
    },
    {
      name: "Europe",
      value: "Europe",
    },
    {
      name: "Asia",
      value: "Asia",
    },
    {
      name: "Africa",
      value: "Africa",
    },
    {
      name: "Oceania",
      value: "Oceania",
    },
  ]);
  return (
    <div className={styles.region}>
      <p className="filter-title">Region</p>
      <div className={styles.regionOptions}>
        {regions.map((region) => (
          <div key={region.value}>{region.name}</div>
        ))}
      </div>
    </div>
  );
};
export default Region;
