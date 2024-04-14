import { useState, useEffect } from 'react';
function Debounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        setTimeout(() => setDebounceValue(value), delay);

        return () => {}
    }, [value]);

    return debounceValue;
}

export default Debounce;
