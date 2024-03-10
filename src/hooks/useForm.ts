import { ChangeEvent, useState } from "react"

export const useForm = <T>(initState: T) => {
    const [formData, setFormData] = useState(initState)


    const handleChange = (
        event: ChangeEvent<HTMLInputElement>,
    ): void => {
        const { value, name } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const resetForm = (): void => {
        setFormData({ ...initState })
    }

    return {
        ...formData,
        handleChange,
        resetForm
    }
}