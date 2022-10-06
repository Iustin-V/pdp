import {useEffect, useState} from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch("https://api-example2.onrender.com/api/sections")
                const res = response.json()
                setData(res.data)
                console.log(data, 'data from useFetch')
            } catch (err) {
                setError(err)
            }
            ;setLoading(false)
        };
        fetchData();
    }, [url])

    const reFetch = async () => {
        setLoading(true)
        try {
            const res = await axios.get(url)
            setData(res.data)
        } catch (err) {
            setError(err)
        }
        setLoading(false)
    }

    return {data, loading, error, reFetch}
}

export default useFetch;