import { useState } from "react";


interface ChangeEvent {
    target: HTMLInputElement | HTMLTextAreaElement 
}

interface FormValues {
    user_name: string;
    user_email: string;
    message: string;
    user_subject: string;
}

export const useForm = (initialValue: FormValues) => {
    const [formState, setFormState] = useState(initialValue)

    const onInputChange = ({ target }: ChangeEvent ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })

    }
    function onResetForm() {
        setFormState(initialValue)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}