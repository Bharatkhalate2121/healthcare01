
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';
import About from './component/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './component/Login';
// import Register from './component/Register';


function App() {
  return (
  <>


    <Router>

    
    <Routes>

    <Route path="/" element={<><Navbar home="Bharat"/><Home/><Footer/></>}/>
      

    <Route path='/About' element={<><Navbar home="Bharat"/><About/><Footer/></>}/>


    {/* <Route path='/Login' element={<Login/>}/> */}
      
    {/* <Route path="/Register" element={<Register/>}/> */}
    </Routes>


    
    </Router>
    </>
  );
}

export default App;
