import React, { useEffect, useState } from "react";
import { InputState, InputProps } from "../types/types";

const useFormInputs = (initialValue: InputState, inputProps: InputProps[]) => {
  const [inputs, setInputs] = useState<InputState>(initialValue);
  const [errors, setErrors] = useState<InputState>({});
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateRequired();
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    console.log(name, value);
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
    validateOnChange(name, value);
  };

  const resetForm = () => {
    setInputs(initialValue);
    setErrors({});
  };

  const validateOnChange = (name: string, value: string) => {
    inputProps
      .filter((prop) => prop.name === name && prop.required)
      .forEach((prop) => {
        if (!value || value === "") {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "This field is required.",
          }));
        } else {
          if (errors[name]) {
            setErrors((prevErrors) => {
              const { [name]: _, ...newErrors } = prevErrors;
              return newErrors;
            });
          }
        }
      });
  };

  const validateRequired = () => {
    const newErrors: InputState = {};
    inputProps
      .filter((prop) => prop.required)
      .forEach((prop) => {
        let key = prop.name;
        let value = inputs[key];
        if (!value || value === "") {
          newErrors[key] = "This field is required.";
        } else {
          if (newErrors[key]) {
            delete newErrors[key];
          }
        }
      });
    setErrors(newErrors);
  };

  const validateButtonDisabled = () => {
    const isInvalid = inputProps
      .filter((prop) => prop.required)
      .some((prop) => !inputs[prop.name] || inputs[prop.name] === "");

    if (!isInvalid) {
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
};

export default useFormInputs;
