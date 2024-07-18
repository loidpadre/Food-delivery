import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { HomePage } from './pages/Home';
import { NavBar } from './components/NavBar/Index';
import { Cart } from './pages/cart';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>} /> 
          <Route path='/cart' element={<Cart/>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
