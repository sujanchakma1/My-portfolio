// components/Typewriter.jsx
import React, { useEffect, useState } from "react";

const Typewriter = ({
  texts = ["Web Developer.","Front End Developer.", "MERN Stack Developer.", "React Developer."],
  speed = 100,
  delay = 1500,
  className = "",
}) => {
  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let interval;

    if (typing) {
      interval = setInterval(() => {
        setText((prev) => prev + texts[textIndex].charAt(charIndex));
        setCharIndex((prev) => prev + 1);

        if (charIndex === texts[textIndex].length) {
          clearInterval(interval);
          setTimeout(() => setTyping(false), delay);
        }
      }, speed);
    } else {
      interval = setInterval(() => {
        setText((prev) => prev.slice(0, -1));
        if (text.length === 0) {
          clearInterval(interval);
          setTextIndex((prev) => (prev + 1) % texts.length);
          setCharIndex(0);
          setTyping(true);
        }
      }, speed / 2);
    }

    return () => clearInterval(interval);
  }, [charIndex, typing, textIndex, texts, speed, delay, text]);

  return (
    <p className={`inline-block ${className}`}>
      I'm a {text}
      <span className="animate-pulse text-white"> |</span>
    </p>
  );
};

export default Typewriter;
