import { useState } from "preact/hooks";

const useRequest = (cb) => {
    const [ data, setData ] = useState()
    const [ error, setError ] = useState()
    const [ loading, setLoading ] = useState(false)

    const handleRequest = async (e) => {
        setLoading(true)
        e.preventDefault()

        const res = await cb()

        if (res.status === 200) {
            setData(res)
        }
        else setError(res)
    }

    return [ handleRequest, data, error, loading ]
}

export { useRequest }
