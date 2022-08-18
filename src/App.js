import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./About";
import Home from './Home';
function App() {
  return (
    <Router>
      <div className="App">
    
      <Routes>
        <Route path="/login" element ={<App/>}>
         
        </Route>
        <Route path="/" element ={<Home/>}>
         
        </Route>
        <Route path="/aboutus" element ={<About/>}>
         
        </Route>
        <Route path="/menu" element ={<App/>}>

        </Route>
        <Route path="/cart" element ={<App/>}>
        </Route>
      </Routes>
    
      </div>
    </Router>
  );
}

export default App;
