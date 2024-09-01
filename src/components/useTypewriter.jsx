import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 70) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;

    // Clear the previous displayed text when the new text comes in
    setDisplayedText(text.charAt(index));

    const intervalId = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return displayedText;
};

export default useTypewriter;
