
import './App.css';
import Community from './components/Community';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar.js';
import ScrollToTop from "./components/ScrollTop";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  
  return (
    <>
      <Navbar/>
      <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/community' element={<Community/>}/>
      </Routes>

      
      </BrowserRouter>
      

      
    </>
  );
}

export default App;
