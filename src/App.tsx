import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Main3 from "./Components/Main3";

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/Main3" element={<Main3 />} />
        
      </Routes>
    </Router>
  );
}

export default App;
