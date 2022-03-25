import { useState, useEffect } from "preact/hooks";

const useRequest = (request, onSuccess, onError) => {
    const [ loading, setLoading ] = useState(false)
    const [ data, setData ] = useState(null)
    const [ error, setError ] = useState(null)

    const handleRequest = async (e) => {
        setLoading(true)
        e.preventDefault()

        const res = await request()

        if (res.status === 200) setData(res), setError(null)
        else setError(res.response), setData(null)

        setLoading(false)
    }

    useEffect(() => {
        if (data) return onSuccess()
        if (error) return onError()
    }, [data, error])

    return [ handleRequest, loading, data, error, setError ]
}

export { useRequest }
