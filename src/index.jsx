import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Form from "./pages/Form.jsx";
import FullNew from "./components/FullNew.jsx";
import "./index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<Form />} />
        <Route path="/new" element={<FullNew />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
