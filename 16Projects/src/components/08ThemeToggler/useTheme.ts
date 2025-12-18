import { useEffect, useState } from "react";

export const useTheme = (
  key: string,
  defaultValue: string,
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [value, setValue] = useState<string>(() => {
    let currentValue;
    try {
      currentValue = localStorage.getItem(key) || defaultValue;
    } catch (error) {
      console.error(error);
      currentValue = defaultValue;
    }
    return currentValue;
  });
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};
