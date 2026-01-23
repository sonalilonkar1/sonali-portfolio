import { useState, useEffect } from 'react';

export const useTypewriter = (phrases, typingSpeed = 55, deletingSpeed = 30, pauseTime = 1400) => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;
    
    const currentPhrase = phrases[phraseIndex];
    let timeout;
    
    if (isTyping) {
      if (charIndex <= currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, charIndex));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
      }
    } else {
      if (charIndex >= 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, charIndex));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
          setCharIndex(0);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }, 180);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

