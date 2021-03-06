import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/checkout" element={
          <>
            <Header/>
            <Checkout/>
          </>
        }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={
        <>
          <Header/>
          <Home/>
        </>}/>
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
