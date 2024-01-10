import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api"; 


function App() {
  const [data,setData] = useState({})

  const generateData = (key, source) => {

    source().then((data) => {
      setData((prevData) => {
        return {...prevData, [key]: data}
      })

    })
  }

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums)
    generateData("newAlbums", fetchNewAlbums)
    generateData("Songs", fetchSongs)

  }, [])

  const {topAlbums = [], newAlbums= [], songs= []}= data
  return (
    <>
      <Navbar searchData= {[...topAlbums, ...newAlbums]} /> 
      
      <Outlet context= {{data:{topAlbums, newAlbums,songs}}}/>
    </>
  );
}

export default App;
