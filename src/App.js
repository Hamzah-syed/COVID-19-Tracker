import React from "react";
//css
import "./css/App.css";
import "./css/tailwind.css";

//layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

//PAGES
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
