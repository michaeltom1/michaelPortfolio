import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Spinner from "./components/Spinner";
import { useState, useEffect } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or some async operation
    const fetchData = async () => {
      try {
        // Simulate loading
        await new Promise((resolve) => setTimeout(resolve, 3000));
        // Data fetched successfully, stop loading
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // stop loading even if there's an error
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header className={`fixed w-full z-50`}>
            <Nav />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </>
      )}
    </>
  );
}
export default App;
