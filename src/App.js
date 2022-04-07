
import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase.init';

function App() {

  const auth = getAuth(app);

const HandleEmailChange = () => {
  console.log('something typed');
}

  return (
    <div className="App">
  <h1> this is progamming </h1>


 <form action="">
<input onChange={HandleEmailChange} type="email" name="" id="" />
<input type="password" name="" id="" />

 </form>



    </div>
  );
}

export default App;
