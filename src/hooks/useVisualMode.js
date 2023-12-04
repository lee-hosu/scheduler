import { useState } from 'react';

const useVisualMode = (initialMode) => {
  const [history, setHistory] = useState([initialMode]);

  const transition = (newMode, replace = false) => {
    setHistory((prevHistory) => {
      if (replace) {
        // Replace the current mode by slicing off the last entry and adding the new mode
        return [...prevHistory.slice(0, -1), newMode];
      }
      // If not replacing, just add the new mode to the history
      return [...prevHistory, newMode];
    });
  };

  const back = () => {
    if (history.length > 1) {
      setHistory((prevHistory) => prevHistory.slice(0, -1));
    }
  };

  return { mode: history[history.length - 1], transition, back };
};

export default useVisualMode;
