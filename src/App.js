import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import { handleChanges } from './reducers/CalculationReducer';
import { Col, Container, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function App() {
  const instialState = "";
  const [result, dispatcher] = useReducer(handleChanges, instialState);
  return (
    <div className="cont">
      <Container className="calculator">
        <Row>
          <Col xs={12}>
            <input className="input" type={"text"} value={result} />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Button variant="danger" className='w-100' onClick={() => { dispatcher("AC") }}>AC</Button>
          </Col>
          <Col xs={3}>
            <Button className='w-100' onClick={() => { dispatcher("DEL") }}>DEL</Button>
          </Col>
          <Col>
            <Button className='w-100' onClick={() => { dispatcher("/") }}>&divide;</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Button className='w-100' onClick={() => { dispatcher("1") }}>1</Button>
          </Col>
          <Col xs={3}>
            <Button className='w-100' onClick={() => { dispatcher("2") }}>2</Button>
          </Col>
          <Col xs={3}>
            <Button className='w-100' onClick={() => { dispatcher("3") }}>3</Button>
          </Col>
          <Col xs={3}>
            <Button className='w-100' onClick={() => { dispatcher("*") }}>&times;</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Button className='w-100' onClick={() => { dispatcher("4") }}>4</Button>
          </Col>
          <Col xs={3}>
            <Button className='w-100' onClick={() => { dispatcher("5") }}>5</Button>
          </Col>
          <Col xs={3}>
            <Button className='w-100' onClick={() => { dispatcher("6") }}>6</Button>
          </Col>
          <Col xs={3}>
            <Button className='w-100' onClick={() => { dispatcher("+") }}>+</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Button className='w-100' onClick={() => { dispatcher("7") }}>7</Button>
          </Col>
          <Col xs={3}>
            <Button className='w-100' onClick={() => { dispatcher("8") }}>8</Button>
          </Col>
          <Col xs={3}>
            <Button className='w-100' onClick={() => { dispatcher("9") }}>9</Button>
          </Col>
          <Col xs={3}>
            <Button className='w-100' onClick={() => { dispatcher("-") }}>-</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Button className='w-100' onClick={() => { dispatcher(".") }}>.</Button>
          </Col>
          <Col xs={3}>
            <Button className='w-100' onClick={() => { dispatcher("0") }}>0</Button>
          </Col>
          <Col xs={6}>
            <Button variant="secondary" className='w-100' onClick={() => { dispatcher("=") }}>=</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
