import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Comment from "./pages/Comment.jsx";
import "semantic-ui-css/semantic.min.css";
import "./index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/comment" element={<Comment />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
