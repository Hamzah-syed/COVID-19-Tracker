import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//css
import "./css/App.css";
import "./css/tailwind.css";

//layout
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

//PAGES
import Home from "./pages/Home";
import SearchCountry from "./pages/SearchCountry";
import SearchProvince from "./pages/SearchProvince";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/searchcountry" component={SearchCountry} />
        <Route path="/searchprovince" component={SearchProvince} />
        <Route path="/About" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
