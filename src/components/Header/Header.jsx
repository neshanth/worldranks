import Search from "../Search/Search";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className="header">
      <p className={styles.headerTitle}>Found 234 countries</p>
      <Search />
    </div>
  );
};
export default Header;
