
import { useState, useEffect } from "react";
function Debounce(value, delay) {
    const [debounce, setDebounce] = useState(value)
    return debounce;
}

export default Debounce;