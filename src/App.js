import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/style.css"

import Navbar from "./componets/Navbar";
import SimpleSlider from "./componets/SimpleSlider";
import React from "react";
import Footer from "./componets/Footer";
import AboutUs from "./componets/AboutUs";
import Missionaries from "./componets/Missionaries";
import TextBlock from "./componets/TextBlock";


function App() {
  return (
    <div className="App">
      <Navbar />
        <div style={{marginTop:"80px"}}>
            <SimpleSlider />
            <TextBlock />
            <Missionaries/>
            <AboutUs />
            <Footer />
        </div>

    </div>
  );
}

export default App;
