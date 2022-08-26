import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Navigate,
  BrowserRouter
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
function App() {
  return (
  <BrowserRouter>
        <Navbar/>

      <Routes>

      <Route path='/' element={<Home/>}  />
      <Route path='/skills' element={<Skills/>}  />
      <Route path='/projects' element={<Projects/>}  />




      </Routes>
  </BrowserRouter>
     
    
     
  //          <Routes>
     
  //    <Route path='/' element={<Home/>}  />


   


  //  </Routes>
   
  );
}

export default App;
