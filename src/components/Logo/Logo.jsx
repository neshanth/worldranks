import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/">
      <img className={styles.logo} src={logo} alt="logo" />
    </Link>
  );
};
export default Logo;
