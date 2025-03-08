import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Home from "./pages/Home/Home";
import CountryDetails from "./pages/CountryDetails/CountryDetails";

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
      <main className="main">
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
