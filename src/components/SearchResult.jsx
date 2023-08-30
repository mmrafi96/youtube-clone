import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = () => {
    const [result, setResult] = useState();
    const { searchQuery } = useParams();
    const { setLoading } = useContext(Context);

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
        fetchSearchResults();
    }, [searchQuery]);
    console.log(searchQuery);
    const fetchSearchResults = () => {
        setLoading(true);
        fetchDataFromApi(`search?query=${searchQuery}`).then((res) => {
            console.log(res);
            setResult(res?.data);
            setLoading(false);
        });
    };

    return (
        <div className="flex flex-row h-[calc(100%-56px)]">
            <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white">
                <div className="grid grid-cols-1 gap-2 p-5">
                    {result?.map((item) => {
                        if (item?.type !== "video") return false;
                         
                        return (
                            <SearchResultVideoCard
                                key={item.videoId}
                                video={item}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SearchResult;