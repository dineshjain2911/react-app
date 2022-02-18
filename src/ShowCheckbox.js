import React from 'react'
import CheckBox from './components/CheckBox'
import {useState} from "react"
import {Row,Col,Container,h1,hr} from 'react-bootstrap'

function ShowCheckbox() {
    const label="employee"
 
    const [checkState,setCheckState]=useState(true)
    const handleChange=(e)=>{
      
      setCheckState(!checkState)
     
    
    }
    return (
        <div>
        <h1 className="display-4 pt-5 my-5"> check Box Designs</h1>
        <CheckBox checkState={checkState} handleChange={handleChange} checkStyles="d-checkbox-primary" label={label}></CheckBox>
        <CheckBox checkState={checkState} handleChange={handleChange} checkStyles="d-checkbox-warning" label={label}></CheckBox>
        <CheckBox checkState={checkState} handleChange={handleChange} checkStyles="d-checkbox-danger" label={label}></CheckBox>
        <CheckBox checkState={checkState} handleChange={handleChange} checkStyles="d-checkbox-dark" label={label}></CheckBox>
        <CheckBox checkState={checkState} handleChange={handleChange} checkStyles="" label={label}></CheckBox>
        </div>
    )
}

export default ShowCheckbox
