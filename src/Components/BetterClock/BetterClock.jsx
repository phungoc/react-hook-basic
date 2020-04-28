import React, { useState, useEffect } from 'react'
import useClock from '../../hooks/useClock';
import './BetterClock.scss';

const BetterClock = () => {

   const { timeString } = useClock();

   return (
      <div className="better-clock">
         <p className="better-clock_time">{timeString}</p>
      </div>
   )
}

export default BetterClock
