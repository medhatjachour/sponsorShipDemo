import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
//import MainNavBar from './components/MainNavBar'
import Playerpage from "./pages/PlayerPage";
function App() {
  return (
    <>
    {/*<MainNavBar/>*/}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Playerpage/:id" element={<Playerpage />} />
      </Routes>
    </>
  );
}
 
export default App;
