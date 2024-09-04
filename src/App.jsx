import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const isNotFound = location.pathname !== "/" && location.pathname !== "/home";
  return (
    <>
      {!isNotFound && isLoading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
}
export default App;
