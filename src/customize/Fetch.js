import { useState, useEffect } from 'react';
import axios from 'axios';


const useFetch = (url,isUserData) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setErrMsg] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    signal: controller.signal
                });
                let data = res && res.data ? res.data : [];
                setData(data);
                setIsLoading(false);
                setErrMsg(false);
            }

            catch (e) {
                if (axios.isCancel(e)) {
                    console.log('Request canceled', e.message);
                } else {
                    setErrMsg(true);
                    setIsLoading(false);
                }
                console.log("check error", e);

            }
        }

        setTimeout(() => {
            fetchData();
        }, 1000);


        return () => {
            controller.abort()
        }
    }, [url])

    return {
        data, isLoading, isError
    }
}

export default useFetch;