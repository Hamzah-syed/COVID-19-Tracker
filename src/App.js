import React from 'react';
//css
import './App.css';
import './css/tailwind'

//layout
import Header from './components/layout/header'
import Footer from './components/layout/footer'

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
