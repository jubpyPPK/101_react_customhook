import React, {useEffect, useState} from 'react';
import {InputState, InputProps} from '../types/types'

const useFormInputs = (initialValue: InputState, inputProps: InputProps[]) => {

    const [inputs, setInputs] = useState<InputState>(initialValue);
    const [errors,setErrors] = useState<InputState>({});
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

    const handleOnSubmit : React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        validateRequired();
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setInputs(initialValue);
    };

    const validateRequired = () => {
        inputProps
            .filter(prop => prop.required)
            .forEach(prop => {

                let key = prop.name;
                let value = inputs[key];

                if(!value || value === '') {
                    setErrors({
                        ...errors,
                        [key]: 'This field is required.',
                    })
                }else {
                    setErrors({
                        ...errors,
                        [key]: '',
                    })
                }
            })
    }

    const validateButtonDisabled = () => {

        const isInvalid = inputProps
            .filter(prop => prop.required)
            .some(prop => (!inputs[prop.name] || inputs[prop.name] === ''))

        if (!isInvalid){
            setIsButtonDisabled(false);
        }

    };

    useEffect(() => {
        validateButtonDisabled();
    }, [inputs, inputProps]);

    return {
        inputs,
        isButtonDisabled,
        errors,
        resetForm,
        handleOnChange,
        handleOnSubmit,
    };

}

export default useFormInputs