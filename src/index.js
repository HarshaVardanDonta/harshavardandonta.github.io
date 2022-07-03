import React from 'react';
import ReactDOM from 'react-dom/client';
import DesktopHome from './pages/DesktopHome';
import MobileHome from './pages/MobileHome';
import DefaultLayout from './pages/DefaultLayout'
import Profile from './pages/Profile'
import Direct from './pages/Direct'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function isWide(){
  if(window.innerWidth > 600){
    return true;
  }
  else{
    return false;
  }
}

function Start(){
  const width = window.innerWidth;
  const [count, setCount] = useState(0);
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count+1);
      }, 3000);
    });
    return(
      <body>
        {
          width > 700   ? 
          (
            
            <BrowserRouter>
              <Routes>
              {count}
                <Route path ="/" element={<DefaultLayout/>} >
                <Route index element={<DesktopHome/>} />
                <Route path='direct' element={<Direct/>} />
                <Route path='profile' element={<Profile/>} />
                </Route>
              </Routes>
            </BrowserRouter>
          )
          :
          (
            <MobileHome/>
          )
        }
      </body>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
const width = window.innerWidth;
root.render(
  <Start/>
);