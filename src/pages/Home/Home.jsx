import Region from "../../components/Filters/Region";
import Sorting from "../../components/Filters/Sorting";
import Header from "../../components/Header/Header";
import Status from "../../components/Filters/Status";
import Table from "../../components/Table/Table";

const Home = () => {
  return (
    <div className="home">
      <div className="filters">
        <Header />
        <Sorting />
        <Region />
        <Status />
      </div>
      <div className="countries-table">
        <Table />
      </div>
    </div>
  );
};
export default Home;
