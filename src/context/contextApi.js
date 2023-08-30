import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";



export const Context= createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(()=>{
      fetchSelectedCategoryData(selectedCategory)
    },[selectedCategory])
    const fetchSelectedCategoryData =(query) =>{
        setLoading(true);
        fetchDataFromApi(`search?query=${query}`).then(({data})=>{
            console.log("data:" +data.data);
            setSearchResults(data);
            setLoading(false)
        })
    };
    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                selectedCategory,
                setSelectedCategory,
                mobileMenu,
                setMobileMenu,
            }}
        >
            {props.children}
        </Context.Provider>
    );

}

