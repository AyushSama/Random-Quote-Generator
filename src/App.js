import './App.css';
import Dropdown from './Components/Dropdown';
import Quote from './Components/Quote';
import React , {useState} from 'react'


function App() {

  const [type , setType] = useState('love');

  const getType = (s)=>{
      setType(s);
  }

  return (
    <>
    <div className="container my-4">
        <div className='d-flex justify-content-between'>
          <h1>Random Quote For Ya!</h1>
          <Dropdown getType={getType}/>
        </div>
    </div>
      <Quote type={type}/>
    </>
  );
}

export default App;
