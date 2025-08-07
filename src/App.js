import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Gallary from './components/Gallary';
import Contactus from './components/Contactus';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Home/>
      <Routes>

        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/gallary' element={<Gallary/>} />
        <Route path='/contact' element={<Contactus/>} />

      </Routes>
      <Footer/>
    
    </BrowserRouter>
    </div>
  );
}
export default App;