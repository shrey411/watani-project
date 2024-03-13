import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from './pages/Register'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/Home" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/Registerpage" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
