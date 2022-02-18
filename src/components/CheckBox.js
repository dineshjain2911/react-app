import React from 'react'
const Styles=["d-checkbox-sucess",
"d-checkbox-primary",
"d-checkbox-dark",
"d-checkbox-danger",
"d-checkbox-warning"]
function CheckBox({checkState,handleChange,label,checkStyles}) {
    const checkBoxStyles=Styles.includes(checkStyles)?checkStyles:Styles[0];
    return (
        <label className="d-checkbox-container ">
        {label}
        <input type="checkbox" className="" checked={checkState} onChange={(e)=>handleChange(e)} />
        <span class={`checkmark ${checkBoxStyles}`}></span>
        </label>
    )
}

export default CheckBox
