import styles from "./Sorting.module.css";
import { useState } from "react";

const Sorting = () => {
  const [options, setOptions] = useState([
    {
      name: "Region",
      value: "region",
    },
    {
      name: "Population",
      value: "population",
    },
    {
      name: "Area",
      value: "area",
    },
  ]);
  return (
    <div className={styles.sorting}>
      <p className={styles.sortingTitle}>Sort by</p>
      <select className={styles.sortingOptions}>
        {options.map((option) => (
          <option className={styles.option} key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Sorting;
