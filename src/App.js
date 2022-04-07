
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from './firebase.init';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function App() {

  const auth = getAuth(app);
  const [Email, setEmail]= useState('');
  const [passoword, setPassoword]= useState('');



const handleEmailBlur = event => {
  setEmail(event.target.value);
}
const handlePasswordBlur = event => {
  setPassoword(event.target.value);
}
const handleFormSubmit = event => {
 
  createUserWithEmailAndPassword(auth,Email,passoword)
  .then(result => {
    const user = result.user;
    console.log(user);
  } )
  .catch(error => {
 console.error(error);
  })

  event.preventDefault();
}

  return (
    <div className="App">
  <h1> this is progamming </h1>

<div className='w-50 mx-auto'>
  <Form onSubmit={handleFormSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
  </Form.Group>

  <Button  variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>


    </div>
  );
}

export default App;
