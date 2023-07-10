import { useState } from "react";
import './index.css'
import Test from "./components/Test";
import Employee from "./components/Employee";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dictionary from "./components/Dictionary";

function App() {
  const [role, setRole] = useState("");

  return (
    <BrowserRouter>

    <Routes>
    <Route path="/dictionary" element={<Dictionary />} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
