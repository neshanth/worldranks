import Header from "../../components/Header/Header";
import Status from "../../components/Filters/Status/Status";
import Table from "../../components/Table/Table";
import Sorting from "../../components/Filters/Sorting/Sorting";
import Region from "../../components/Filters/Region/Region";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className={styles.homeContent}>
        <div className="filters">
          <Sorting />
          <Region />
          <Status />
        </div>
        <div className="countries-table">
          <Table />
        </div>
      </div>
    </div>
  );
};
export default Home;
