import { useEffect, useState } from 'react';

const useDebounce = <Type>(value: Type, time?: number): Type => {
  // * State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState<Type>(value);

  // * 每次在 value 变化以后，设置一个定时器
  // * Update debounced value after delay
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, time);

    // * 每次在上一个 useEffect 处理完以后再运行
    return () => {
      clearTimeout(handler);
    };
  }, [value, time]);

  return debouncedValue;
};

export default useDebounce;
