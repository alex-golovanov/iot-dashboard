import { useCallback, useState } from 'react';

export function useLocalStorage<T>(
  key: string,
  fallbackValue: T,
): [T, (nextValue: T) => void] {
  const [value, setValue] = useState<T>(() => {
    const localStorageValue = window.localStorage.getItem(key);
    return (localStorageValue ? JSON.parse(localStorageValue) : fallbackValue) as T;
  });

  const setLocalStorageValue = useCallback(
    (nextValue: T) => {
      window.localStorage.setItem(key, JSON.stringify(nextValue));
      setValue(nextValue);
    },
    [key],
  );

  return [value, setLocalStorageValue];
}
