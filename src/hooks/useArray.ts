import { useState } from 'react';

const useArray = <Type>(initialValue: Type[]): unknown => {
  const [value, setValue] = useState(initialValue);

  const removeIndex = (index: number) => {
    // * 浅拷贝
    const clonedValue = [...value];
    clonedValue.splice(index, 1);
    setValue(clonedValue);
  };

  const add = (item: Type) => {
    // * 浅拷贝
    const newValue = [...value, item];
    setValue(newValue);
  };

  const clear = () => {
    setValue([]);
  };

  return { value, add, removeIndex, clear };
};

export default useArray;
