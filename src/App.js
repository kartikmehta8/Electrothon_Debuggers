import React from 'react'
import Main from './Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Creators from "./components/Creators/Creators";

export default function App(props) {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/creators" element={<Creators />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
