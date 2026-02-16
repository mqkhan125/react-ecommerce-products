import React, {useState} from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer";

const App = () => {

   const [search, setSearch] = useState("");

   const handleSearch = (event) => {
    console.log(event.target.value)
     setSearch(event.target.value);
   };

  return (
    <>
    <Navbar search={search} handleSearch={handleSearch} />
    <Outlet context={{search}}/>
    <Footer />
    </>
  );
};

export default App;
