import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValues, seDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      seDebouncedValue(value);
    }, delay || 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValues;
}

export default useDebounce;
