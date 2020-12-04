// write your custom hook here to control your checkout form
import React, { useState } from "react"

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key))
        } else {
            localStorage.setItem(key, JSON.stringify(initialValue))
            return initialValue
        }
    })

    const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setValue]
}

const useForm = (formFields) => {
    const [values, setValues] = useLocalStorage("form", formFields);
  
    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
  
    return [values, handleChanges]
}

export default useForm
