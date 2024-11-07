import React from "react";
import Header from "./SharedComponent/Header.jsx";
import Footer from "./SharedComponent/Footer.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./home.jsx";
import ContactPage from "./contact.jsx";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
