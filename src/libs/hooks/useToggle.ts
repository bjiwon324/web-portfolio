import { useState, useCallback } from "react";

export const useToggle = (initialValue = false) => {
  const [isToggle, setIsToggle] = useState(initialValue);

  const handleToggle = useCallback(() => {
    setIsToggle(prev => !prev); 
  }, []); 

  return [isToggle, handleToggle] as const; 
};

