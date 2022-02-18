import React from 'react'
import "./../../assets/css/scss/main.css";

const Styles=[
"d-btn-primary",
"d-btn-warning",
"d-btn-danger",
"d-btn-sucess",
"d-btn-primary-outline",
"d-btn-warning-outline",
"d-btn-danger-outline",
"d-btn-sucess-outline"
]
const Sizes=[
    "d-btn-large",
    "d-btn-medium",
    "d-btn-small",
]

function Button({children,type,onClick,buttonStyle,buttonSize}) {
    const checkButtonStyles=Styles.includes(buttonStyle)?buttonStyle:Styles[0];
    const checkButtonSize=Sizes.includes(buttonSize)?buttonSize:Sizes[0];
    return (
        <button className={`d-btn ${checkButtonStyles} ${checkButtonSize}`} onClick={onClick} type={type}>
      {  children }
        </button>
    )
}

export default Button
