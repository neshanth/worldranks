import SearchIcon from "./SearchIcon";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.search}>
      <SearchIcon />
      <input className={styles.searchInput} placeholder="Search by Name, Region" />
    </div>
  );
};
export default Search;
