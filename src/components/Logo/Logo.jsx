import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import styles from "./Logo.module.css";

const Logo = () => {
  return <img className={styles.logo} src={logo} alt="logo" />;
};
export default Logo;
