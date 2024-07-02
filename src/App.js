// import About from './components/About';
import './App.css';
import Navbar  from './components/Navbar';
import TextForm from './components/TextForm';
import { useState} from 'react';
import Alert from './components/Alert';



function App(){

 const [mode,setMode] = useState('light');

 const [alert,setAlert] = useState(null);

 const showAlert =(message,type)=>{
    setAlert({
      type : type,
      msg : message
    })

 }

 const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mode has been enable","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundcolor = 'white';
      showAlert( "Light mode has been enable","success")
    }
  }
  return (
    <>
      <Navbar Title="TEXT_UTILS" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3 text-warning">
    <TextForm showAlert={showAlert} heading="Enter the  Text below to Analyze" mode={mode} />
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
