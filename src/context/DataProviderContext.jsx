import { useEffect, useRef, useState, createContext, useContext } from "react";

const dataContext = createContext();

function DataProviderContext({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // Stop observing the element
      }
      // setIsVisible(entry.isIntersecting);
    });

    const elementReff = elementRef.current;

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementReff) {
        observer.unobserve(elementReff);
      }
    };
  }, []);

  return (

      <dataContext.Provider value={{ isVisible, elementRef }}>
        {children}
      </dataContext.Provider>
  );
}

export default DataProviderContext;

export function useData() {
  return useContext(dataContext);
}
