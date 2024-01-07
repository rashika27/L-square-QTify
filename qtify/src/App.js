import React, { useState } from "react"
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/HeroSection"

function App() {
  const [searchData, useSearchData]= useState()
  return (
    <>
      <Navbar searchData= {searchData} /> 
      <Hero/>
    </>
  );
}

export default App;
