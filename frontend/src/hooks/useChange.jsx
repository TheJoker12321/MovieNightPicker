import { useState } from "react"

export function useDebouncedValue(value) {

    const [val, setVal] = useState(value)

    function debounce(newVal) {

        setVal('')
        setTimeout(() => {
            
            setVal(newVal)

        }, 5000)
    }

    return {debounce, val}
}