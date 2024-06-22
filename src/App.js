import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar Title="TEXT_UTILS" About="About Us"/>
      <div className="container my-3">
        <TextForm heading="Enter the  Text below to Analyze" />
      </div>
    </>
  );
}

export default App;
