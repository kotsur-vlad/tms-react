import { useState, useCallback } from 'react';

export const useInputValue = (validator) => {
  const [inputValue, setInputValue] = useState('');

  const valueHandler = useCallback((event) => {
    console.log(validator);
    if (validator) {
      validator(event.target.value);
    }
    setInputValue(event.target.value);
  }, []);

  return [inputValue, valueHandler];
};
