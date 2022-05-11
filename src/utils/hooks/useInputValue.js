import { useState, useCallback } from 'react';

export const useInputValue = (validator) => {
  const [inputValue, setInputValue] = useState('');

  const valueHandler = useCallback((event) => {
    validator(event.target.value);
    setInputValue(event.target.value);
  }, []);

  return [inputValue, valueHandler];
};
