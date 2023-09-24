import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
// Подключение доп страницы
// import MyDevice from "./components/MyDevice/MyDevice";

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Роут на доп.страницу */}
        {/* <Route path="/mydevice" element={<MyDevice />} /> */}
      </Routes>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
