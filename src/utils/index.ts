const isFalsy = <Type>(value: Type): boolean => {
  return typeof value === 'number' && value === 0 ? true : !!value;
};

const isEmpty = (object: Record<string, unknown>): boolean => {
  // Object.keys will return an Array, which contains the property name of the object.
  // If the length of the array is 0, then we know that the object is empty.
  return Object.keys(object).length === 0;
};

const cleanObject = (object: Record<string, unknown>): Record<string, unknown> => {
  // Object.assign({}, object)
  const clonedObject = { ...object };

  Object.keys(object).forEach((key) => {
    const value = object[key];

    if (!isFalsy(value)) {
      delete clonedObject[key];
    }
  });

  return clonedObject;
};

const formatNumber = (value: number): number => {
  // First, convert the number to a string and slice the string
  // Second, convert the string back to a number
  return Number(value.toString().slice(0, 7));
};

const debounce = (func: () => void, delay: number): (() => void) => {
  let timeout: ReturnType<typeof setTimeout>;

  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func();
    }, delay);
  };
};

export { isEmpty, isFalsy, cleanObject, formatNumber, debounce };
