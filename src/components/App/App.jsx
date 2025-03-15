import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logo from "../Logo/Logo";
import Home from "../../pages/Home/Home";
import CountryDetails from "../../pages/CountryDetails/CountryDetails";
import styles from "./App.module.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/country/:code",
      element: <CountryDetails />,
    },
  ]);
  return (
    <>
      <Logo />
      <main className={styles.main}>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
