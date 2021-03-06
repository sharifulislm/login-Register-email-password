
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase.init';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
const auth = getAuth(app);

function App() {

 
    const [error , setError]=useState('');
    const [registered, setregistered] = useState(false);
  const [validated, setValidated] = useState(false);
  const [Email, setEmail]= useState('');
  const [passoword, setPassoword]= useState('');



const handleEmailBlur = event => {
  setEmail(event.target.value);
}
const handlePasswordBlur = event => {
  setPassoword(event.target.value);
}
const HandleRegisterchange = event => {
  setregistered(event.target.checked);
}

const handleFormSubmit = event => {
  event.preventDefault();

  const form = event.currentTarget;
  if (form.checkValidity() === false) {
   
    event.stopPropagation();
  }
  if(!/(?=,*?[#?!@$%^&*-])/.test(passoword)){
   setError('password should contain atleast one number and one special character')
   return;
  }

  setValidated(true);


 setError('');


if(registered) {
  signInWithEmailAndPassword(auth,Email,passoword)
  .then(result => {
    const user =result.user;
    console.log(user);
  });
  setError(error.massage)

}else{
  createUserWithEmailAndPassword(auth,Email,passoword)
  .then(result => {
    const user = result.user;
    console.log(user);
    setEmail('');
    setPassoword('');
    verifyEmail()
  } )
  .catch(error => {
 console.log(error);
 setError(error.message);
  })

 
}


event.preventDefault();

}
const handlePasswordReset = () => {
sendPasswordResetEmail(auth,Email)
.then(() => {
  console.log('email sent')
})

}

const verifyEmail = () => {
  sendEmailVerification(auth.currentUser)
  .then(() => {
    console.log('Email Verification Sent');
  })
}


  return (
    <div className="App">
  <h1> Please {registered ? 'Login': 'Register'} </h1>

<div className='w-50 mx-auto'>
  <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
    <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
    <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check onChange={HandleRegisterchange} type="checkbox" label="Already Registered?" />
  </Form.Group>

  <p className='text-danger'>{error}</p>

  <button onClick={handlePasswordReset} variant="link"> Forget Password</button>

  <Button  variant="primary" type="submit">
   {registered ? 'Login': ' Register'}
  </Button>
</Form>
</div>


    </div>
  );
}

export default App;
