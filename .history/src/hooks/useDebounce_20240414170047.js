
import { useState, useEffect } from "react";
function Debounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        setTimeout(() => setDebounceValue(value),de)
    },[value]);

    return debounceValue;
}

export default Debounce;