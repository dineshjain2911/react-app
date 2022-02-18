import React from 'react'
const Styles=[

    "d-input-border-primary",
    "d-input-border-warning",
    "d-input-border-danger",
    "d-input-border-sucess",
    "d-input-border-dark",
    "d-input-border-bottom-primary",
    "d-input-border-bottom-warning",
    "d-input-border-bottom-danger",
    "d-input-border-bottom-sucess",
    "d-input-border-bottom-dark",
    "d-input-capsule-primary",
    "d-input-capsule-sucess",
    "d-input-capsule-danger",
    "d-input-capsule-warning",
    "d-input-capsule-dark",
    "d-input-shark-dark",
    "d-input-shark-warning",
    "d-input-shark-sucess",
    "d-input-shark-primary",
    "d-input-shark-danger",
    ]
    const Sizes=[
        "d-btn-large",
        "d-btn-medium",
        "d-btn-small",
    ]

function Input({type,onChange,inputSize,required,disabled,value,inputStyle,placeholder}) {
    const checkInputStyles=Styles.includes(inputStyle)?inputStyle:Styles[0];
  

    return (
        <div>
            <input type={type} className={` ${checkInputStyles} d-input `} onChange={(e)=>onChange(e)} required={required} disabled={disabled} value={value} inputSize={inputSize} placeholder={placeholder}/>
        </div>
    )
}

export default Input
