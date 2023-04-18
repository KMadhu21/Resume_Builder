import logo from './logo.svg';
import './App.css';
import Nav from './pages/nav';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Contact from './pages/contact';
import Createres from './pages/createres';
function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/createres' element={<Createres/>}/>
      </Routes>
    </>
  );
}

export default App;
