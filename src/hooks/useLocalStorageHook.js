import { useState } from "react"

const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        try {
            let item = localStorage.getItem(key);
    
            return item ? JSON.parse(item) : initialValue;
            
        } catch (err) {
            console.log(err);

            return initialValue;
        }
    });

    const setItem = (value) => {
        // TODO: Add support for functions
        
        try {
            // Save to local storage
            localStorage.setItem(key, JSON.stringify(value));

            setState(value);

        } catch (err) {
            console.log(err);
        }

        // Save to state
    }

    return [
        state,
        setItem
    ]
};

export default useLocalStorage;