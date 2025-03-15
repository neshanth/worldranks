import styles from "./Status.module.css";
import { useState } from "react";

const Status = () => {
  const [status, setStatus] = useState([
    {
      id: 1,
      name: "Member of the United Nations",
      value: "Member of the United Nations",
    },
    {
      id: 2,
      name: "Independent",
      value: "Independent",
    },
  ]);
  return (
    <div className={styles.status}>
      <p className="filter-title">Status</p>
      {status.map((s) => (
        <div className={styles.statusOption}>
          <input className={styles.statusInput} type="checkbox" id={s.id} name={s.name} value={s.value} />
          <label htmlFor={s.id}>{s.name}</label>
        </div>
      ))}
    </div>
  );
};
export default Status;
