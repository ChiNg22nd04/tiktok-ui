import { useState, useEffect } from 'react';
function Debounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handle

        //cleanup function
        return () => {
            clearTimeout();
        };
    }, [value]);

    return debounceValue;
}

export default Debounce;
