import { useEffect, useState } from "react";

export function useLocalStorage (key, baseValue) {
    
    const [value, setValue] = useState(baseValue);

    const removeValue = () => {
    setValue(null);
    localStorage.removeItem(key);
    };

    useEffect(() => {
        if (!value) return;
        localStorage.setItem(key, value);
    }, [value])

    useEffect(() => {
    setValue(localStorage.getItem(key));
    }, []);
    
    return [value, setValue, removeValue]

}