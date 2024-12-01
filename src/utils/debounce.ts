import { useRef, useCallback } from 'react';

function useDebounce<T extends (...args: any[]) => void>(func: T, wait: number): T {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(() => {
        func(...args);
      }, wait);
    },
    [func, wait] // Ensure debounce respects these dependencies
  ) as T;
}

export default useDebounce;
