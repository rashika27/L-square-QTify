import React from "react"
import  { useState, useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api"; 
import { StyledEngineProvider } from "@mui/material";


function App() {
  const [searchData, useSearchData]= useState()
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
    generateData("songs", fetchSongs)

  }, [])

  const {topAlbums = [], newAlbums= [], songs= []}= data
  return (
    <>
    <StyledEngineProvider injectFirst>
      <Navbar searchData= {[...topAlbums, ...newAlbums]} /> 
      <Outlet context= {{data:{topAlbums, newAlbums,songs} }}/>
      </StyledEngineProvider>
    </>
  );
}

export default App;
