import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./common/Navbar";
import Home from "./components/Home";
import InputForm from "./components/InputForm";
import NavbarCondition from "./common/NavbarCondition";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavbarCondition> <Navbar /></NavbarCondition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<InputForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
