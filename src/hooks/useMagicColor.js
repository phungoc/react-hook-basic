import React, { useState, useEffect, useRef } from "react";

const randomColor = (currentColor) => {
  const LIST_COLOR = ["red", "green", "yellow"];

  const currentIndex = LIST_COLOR.indexOf(currentColor);
  let newIndex = currentIndex;

  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 3);
  }
  return LIST_COLOR[newIndex];
};

const useMagicColor = () => {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  // Change color every 1 second
  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 1000);
    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return color;
};

export default useMagicColor;
