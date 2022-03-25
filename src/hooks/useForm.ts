import { ChangeEvent, useState } from 'react';

// interface FormProps {
//     name: string;
//     email: string;
//     subject: string;
//   }

export const useForm = <T>( initialState: T ) => {
    
    const [formValues, setFormValues] = useState(initialState);
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
    }); }

    const resetForm = () => {
        setFormValues({ ...initialState });
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        ...formValues,
        formValues,
        isValidEmail,
        onChange,
        resetForm
    };

}