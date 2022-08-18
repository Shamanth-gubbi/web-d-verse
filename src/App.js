import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
    
      <Routes>
        <Route path="/" element ={<Login/>}>
         
        </Route>
        <Route path="/home" element ={<Home/>}>
         
        </Route>
        <Route path="/login" element ={<App/>}>
         
        </Route>
      </Routes>
    
      </div>
    </Router>
  );
}

export default App;
