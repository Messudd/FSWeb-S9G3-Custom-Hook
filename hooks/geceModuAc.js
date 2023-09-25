import React, { useState } from 'react'


const geceModuAc = (val) => {

const [geceModu, setGeceModu] = useState(val);

 function toggleMode(e) {
    e.preventDefault();
    setGeceModu(!geceModu);
 }

  return [geceModu,toggleMode];
}

export default geceModuAc;