import React from 'react'
import {Row,Col,Container,h1,hr} from 'react-bootstrap'
import {useState} from "react"
import Input from "./components/Input"

function ShowInput() {
    const initialState="";
    const [state, setState] = useState(initialState)
    const setInput=(e)=>{
        // console.log(e)
        setState(e.target.value)
    
      }
    return (
        <div>
        <Row className="my-5">
        <Col>
        <Input type="text" onChange={setInput}   value={state} inputStyle="" placeholder="Enter Username"/>
        </Col>
        <Col>
        <Input type="text" onChange={setInput}   value={state} inputStyle="d-input-border-warning"/>
        </Col>
        <Col>
        <Input type="text" onChange={setInput}   value={state} inputStyle="d-input-border-sucess"/>
        </Col>
        
        
        </Row>
        <Row className="my-5">
        <Col>
        <Input type="text" onChange={setInput}   value={state} inputStyle="d-input-border-danger"/>
        </Col>
        <Col>
        <Input type="text" onChange={setInput}   value={state} inputStyle="d-input-border-dark"/>
        </Col>
        <Col>
        <Input type="text" onChange={setInput}   value={state} inputStyle="d-input-border-bottom-danger"/>
        </Col>
        
        
        </Row>
        <Row  className="my-5">
        <Col>
        <Input type="text" onChange={setInput}   value={state} inputStyle="d-input-border-bottom-sucess"/>
        </Col>
        <Col>
        <Input type="text" onChange={setInput}   value={state} inputStyle="d-input-border-bottom-dark"/>
        </Col>
        <Col>
        <Input type="text" onChange={setInput}   value={state} inputStyle="d-input-border-bottom-warning"/>
        </Col>
        
        
        </Row>
        <Row  className="my-5">
        <Col>
        <Input type="text" onChange={setInput}   value={state} inputStyle="d-input-capsule-primary"/>
        </Col>
        <Col>
        <Input type="text" onChange={setInput}   value={state} inputStyle="d-input-capsule-warning"/>
        </Col>
        <Col>
        <Input type="text" onChange={setInput}   value={state} inputStyle="d-input-capsule-sucess"/>
        </Col>
        
        
        </Row>
        <Row  className="my-5">
        <Col>
        <Input type="text" onChange={setInput}   value={state} inputStyle="d-input-capsule-danger"/>
        </Col>
        <Col>
        <Input type="text" onChange={setInput}   value={state} inputStyle="d-input-capsule-dark"/>
        </Col>
        <Col>
        <Input type="text" onChange={setInput}   value={state} inputStyle="d-input-shark-sucess"/>
        </Col>
        
        </Row>
        <Row  className="my-5">
        <Col>
        <Input type="text" onChange={setInput}   value={state} inputStyle="d-input-shark-danger"/>
        </Col>
        <Col>
        <Input type="text" onChange={setInput}   value={state} inputStyle="d-input-shark-dark"/>
        </Col>
        <Col>
        <Input type="text" onChange={setInput}   value={state} inputStyle="d-input-shark-primary"/>
        </Col>
        
        </Row>
        </div>
    )
}

export default ShowInput
