import { findAllByDisplayValue } from "@testing-library/react";
import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [status, setStatus] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [singleCocktail, setSingleCocktail] = useState({});

  let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}${search}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        setCocktails(drinks);
        setStatus(true);
      } else {
        setStatus(false);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <AppContext.Provider
      value={{
        cocktails,
        setSearch,
        search,
        status,
        isLoading,
        setSingleCocktail,
        singleCocktail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
