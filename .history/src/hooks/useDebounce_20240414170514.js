import { useState, useEffect } from 'react';
function Debounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        setTimeout(() => setDebounceValue(value), delay);

        //cleanup function
        return () => {
            clearTimeout()
        };
    }, [value]);

    return debounceValue;
}

export default Debounce;
