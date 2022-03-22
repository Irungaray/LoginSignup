import { useState } from "preact/hooks";

const useFormData = (values) => {
    const [formData, setFormData] = useState(values)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return [ formData, handleChange ]
}

export { useFormData }
