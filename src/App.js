import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar  from './components/Navbar';
import TextForm from './components/TextForm';



function App(){

 const [mode,setMode] = useState('light');

 const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
    }
    else{
      setMode('light');
      document.body.style.backgroundcolor = 'white';
    }
  }
  return (
    <>
      <Navbar Title="TEXT_UTILS" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3 text-warning">
      <TextForm heading="Enter the  Text below to Analyze" mode={mode} />
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
