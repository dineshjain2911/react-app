import React from 'react'
const Styles=["d-radio-primary",
"d-radio-danger",
"d-radio-dark",
"d-radio-sucess",
"d-radio-warning"]

function Radio({handleChange,status,radioStyle,name}) {
  const checkRadiotStyles=Styles.includes(radioStyle)?radioStyle:Styles[0];
  
    return (
        
        <label class="d-radio-container">One
        <input type="radio" {...status} onChange={(e)=>handleChange(e)} name={name}/>
        <span class={`d-radio-checkmark ${checkRadiotStyles}`}></span>
      </label>
        
    )
}

export default Radio
