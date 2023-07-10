import { useState } from "react";
import './index.css'
import Test from "./components/Test";
import Employee from "./components/Employee";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dictionary from "./components/Dictionary";
import Definition from "./components/Definition";

function App() {
  const [role, setRole] = useState("");

  return (
    <BrowserRouter>

    <Routes>
    <Route path="/dictionary" element={<Dictionary />} />
    <Route path="/definition" element={<Definition />} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
