
import { useState, useEffect } from "react";
function Debounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value)
    return debounceValue;
}

export default Debounce;