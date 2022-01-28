import { useEffect, useState } from "react"

export default function useJsonFetch(url) {
    const [data, setData] = useState('');
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setData('');
        const fetchData = async() => {
            try {
                setLoading(true);
                const resp = await fetch(url);
                const data = await resp.json();
                if(!resp.ok)
                {
                    setError(resp.status + ' ' + data.status);
                }
                setData(data);
                setLoading(false);
            }
            catch (e) {
                setError(e);
                setLoading(false);
            }
        }
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
        
    return [data, loading, error]
}
