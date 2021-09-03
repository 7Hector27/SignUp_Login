import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Container,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';

function App() {
  const [name, setName] = useState('hi');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [email1, setEmail1] = useState('');
  const [password1, setPassword1] = useState('');
  return (
    <>
      <Container>
        <Row style={{ marginTop: '20px' }}>
          <Col>
            <h1>Sign Up</h1>
            <InputGroup size='sm' className='mb-3'>
              <InputGroup.Text id='inputGroup-sizing-sm'>Name</InputGroup.Text>
              <FormControl
                aria-label='Small'
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
            <InputGroup size='sm' className='mb-3'>
              <InputGroup.Text id='inputGroup-sizing-sm'>Email</InputGroup.Text>
              <FormControl
                aria-label='Small'
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup size='sm' className='mb-3'>
              <InputGroup.Text id='inputGroup-sizing-sm'>
                Password
              </InputGroup.Text>
              <FormControl
                aria-label='Small'
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
            <Button>Sign Up</Button>
          </Col>
          <Col>
            <h1>Sign In</h1>
            <InputGroup size='sm' className='mb-3'>
              <InputGroup.Text id='inputGroup-sizing-sm'>Email</InputGroup.Text>
              <FormControl
                aria-label='Small'
                onChange={(e) => setEmail1(e.target.value)}
              />
            </InputGroup>
            <InputGroup size='sm' className='mb-3'>
              <InputGroup.Text id='inputGroup-sizing-sm'>
                Password
              </InputGroup.Text>
              <FormControl
                aria-label='Small'
                onChange={(e) => setPassword1(e.target.value)}
              />
            </InputGroup>

            <Button>Sign In</Button>
          </Col>
        </Row>
        {name}
      </Container>
    </>
  );
}

export default App;
