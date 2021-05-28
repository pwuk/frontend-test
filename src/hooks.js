import { useState, useEffect } from "react";
import {API_URL} from "./Constants";

const useFetch = () => {
    const [theData, setTheData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(API_URL);
            const data = await result.json();
            setTheData(data);
        };
        fetchData();
    }, []);

    return theData;
};

export { useFetch };