import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Header />
        <Route path="/" element={<Home />}
     </Routes>

    </Router>
  );
}
export default App;
