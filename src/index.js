import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
