// import {Row,Button,Col} from 'react-bootstrap'
import {Row,Col,Container,h1,hr} from 'react-bootstrap'
import ShowInput from "./ShowInput"
import ShowButton from "./ShowButton"
import ShowCheckbox from "./ShowCheckbox";
import Radio from "./components/Radio"
import {useState} from "react"


function App() {
  const [status,setStatus]= useState('checked')
  const radioChange=(e) => {
    setStatus(status=='checked'?"":status)

  }

 
  
  return ( 
    <div className="App">
    <Container className="mt-5">
<h1 className="display-1">
Hi, Diginnovators Folk!
</h1>
<h2 className="display-2">Lets Get Started!</h2>
<h5 className="display-6">With React Base Template</h5>
<hr / >
<div className="mb-5"></div>
<h1 className="display-4"> Button Designs</h1>
<hr />
<ShowButton></ShowButton>
<hr />
<h1 className="display-4 pt-5 my-5"> Input Designs</h1>
<ShowInput></ShowInput>
<hr />
<ShowCheckbox/>
<hr />
<h1 className="display-4 pt-5 my-5"> Radio Designs</h1>
<Radio status={status} handleChange={radioChange} radioStyle={"d-radio-primary"} name={"radio"}></Radio>
<Radio status={status} handleChange={radioChange} radioStyle={"d-radio-sucess"} name={"radio"}></Radio>
<Radio status={status} handleChange={radioChange} radioStyle={"d-radio-danger"} name={"radio"}></Radio>
<Radio status={status} handleChange={radioChange} radioStyle={"d-radio-dark"} name="radio"></Radio>
<Radio status={status} handleChange={radioChange} radioStyle={"d-radio-warning"} name="radio"></Radio>

    </Container>
    <div className="my-5"></div>
    </div>
  );
}

export default App;
