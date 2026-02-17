import React, {useState} from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer";

const App = () => {

   const [search, setSearch] = useState("");
   const [category, setCategory] = useState("all");

   const handleSearch = (event) => {
    console.log(event.target.value)
     setSearch(event.target.value);
   };

   const handleInputCategory = (event) => {
     setCategory(event.target.value);
   }

  return (
    <>
    <Navbar search={search} handleSearch={handleSearch} category={category} handleInputCategory={handleInputCategory}/>
    <Outlet context={{search, category}}/>
    <Footer />
    </>
  );
};

export default App;
