import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderSuccess from './components/OrderSuccess';
import { Menu } from './components/Menu';
import Error404 from './components/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/#about" element={<Homepage/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/order" element={<Error404/>} />
        <Route path="/login" element={<Error404/>} />
        <Route path="/confirmation" element={<OrderSuccess/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
