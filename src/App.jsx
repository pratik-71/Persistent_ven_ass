import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./common/Navbar";
import Home from "./components/Home";
import InputForm from "./components/InputForm";
import NavbarCondition from "./common/NavbarCondition";
import User from "./components/User";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavbarCondition> <Navbar /></NavbarCondition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<InputForm />} />
          <Route path="/user/:index" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
