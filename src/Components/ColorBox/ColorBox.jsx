import React, { useState } from 'react';
import './ColorBox.scss';

const getRandomColor = () => {
   const COLOR_LIST = ['green', 'blue', 'black', 'red', 'yellow'];
   // Math.random() tra ve 1 so thap phan tu (0 , 1)
   // Math.trunc lay phan nguyen
   const randomIndex = Math.trunc(Math.random() * 5);
   return COLOR_LIST[randomIndex];
}


export const ColorBox = () => {

   const [color, setColor] = useState(() => {
      // Neu localStorage null thi dung 'deeppink'
      const initColor = localStorage.getItem('box_color') || ('deeppink');
      return initColor;
   });

   const handleBoxClick = () => {
      // get random color -> setColor
      const newColor = getRandomColor();
      setColor(newColor);
      localStorage.setItem('box_color', newColor);
   }

   return (
      <div className="color-box" style={{ backgroundColor: color }}
         onClick={handleBoxClick}
      />
   )
}
