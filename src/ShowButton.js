import React from 'react';
import Button from "./components/buttons/Button"; 
import {Row,Col,Container,h1,hr} from 'react-bootstrap';

function ShowButton() {
    const show =()=>{
        console.log("test");
    }
    return (
        <div>
        <Row>
        <Col>
        <Button buttonStyle="d-btn-primary"> Submit </Button>
        </Col>
        <Col>
        <Button buttonStyle="d-btn-sucess" onClick={show}> Submit </Button>
        </Col>
        <Col>
        <Button buttonStyle="d-btn-danger"> Submit </Button>
        </Col>
        <Col>
        <Button buttonStyle="d-btn-warning"> Submit </Button>
        </Col>
        </Row>
        <Row className="mt-5">
        <Col>
        <Button buttonStyle="d-btn-primary" buttonSize="d-btn-medium"> Submit </Button>
        </Col>
        <Col>
        <Button buttonStyle="d-btn-sucess" buttonSize="d-btn-medium"> Submit </Button>
        </Col>
        <Col>
        <Button buttonStyle="d-btn-danger" buttonSize="d-btn-medium"> Submit </Button>
        </Col>
        <Col>
        <Button buttonStyle="d-btn-warning" buttonSize="d-btn-medium"> Submit </Button>
        </Col>
        </Row>
        <Row className="mt-5">
        <Col>
        <Button buttonStyle="d-btn-primary" buttonSize="d-btn-small"> Submit </Button>
        </Col>
        <Col>
        <Button buttonStyle="d-btn-sucess" buttonSize="d-btn-small"> Submit </Button>
        </Col>
        <Col>
        <Button buttonStyle="d-btn-danger" buttonSize="d-btn-small"> Submit </Button>
        </Col>
        <Col>
        <Button buttonStyle="d-btn-warning" buttonSize="d-btn-small"> Submit </Button>
        </Col>
        </Row>
        <Row className="mt-5">
        <Col>
        <Button buttonStyle="d-btn-primary-outline"> Submit </Button>
        </Col>
        <Col>
        <Button buttonStyle="d-btn-sucess-outline"> Submit </Button>
        </Col>
        <Col>
        <Button buttonStyle="d-btn-danger-outline"> Submit </Button>
        </Col>
        <Col>
        <Button buttonStyle="d-btn-warning-outline"> Submit </Button>
        </Col>
        </Row>
        <Row className="mt-5 mb-5">
        <Col>
        <Button buttonStyle="d-btn-primary-outline" buttonSize="d-btn-medium"> Submit </Button>
        </Col>
        <Col>
        <Button buttonStyle="d-btn-sucess-outline" buttonSize="d-btn-medium"> Submit </Button>
        </Col>
        <Col>
        <Button buttonStyle="d-btn-danger-outline" buttonSize="d-btn-medium"> Submit </Button>
        </Col>
        <Col>
        <Button buttonStyle="d-btn-warning-outline" buttonSize="d-btn-medium"> Submit </Button>
        </Col>
        </Row>
        <Row className="mt-5 mb-5">
        <Col>
        <Button buttonStyle="d-btn-primary-outline" buttonSize="d-btn-small"> Submit </Button>
        </Col>
        <Col>
        <Button buttonStyle="d-btn-sucess-outline" buttonSize="d-btn-small"> Submit </Button>
        </Col>
        <Col>
        <Button buttonStyle="d-btn-danger-outline" buttonSize="d-btn-small"> Submit </Button>
        </Col>
        <Col>
        <Button buttonStyle="d-btn-warning-outline" buttonSize="d-btn-small"> Submit </Button>
        </Col>
        </Row>
        </div>
    )
}

export default ShowButton
