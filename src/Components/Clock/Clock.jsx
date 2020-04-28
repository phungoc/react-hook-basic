import React, { useState, useEffect } from 'react'
import useClock from '../../hooks/useClock';

const Clock = () => {

   const { timeString } = useClock();

   return (
      <div>
         <p style={{ fontSize: '40px' }}>{timeString}</p>
      </div>
   )
}

export default Clock