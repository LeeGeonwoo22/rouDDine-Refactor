import { useState, useEffect } from "react";

function useLocalStorage(key, initialState) {
  const [state, setState] = useState(
    typeof window !== "undefined"
      ? () => JSON.parse(window.localStorage.getItem(key)) || initialState
      : null
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;