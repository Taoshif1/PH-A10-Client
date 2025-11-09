import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

function App() {

  return (
     <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar></Navbar>
      
      {/* Main Content - This will render the page components */}
      <main className="flex-grow">
        <Outlet></Outlet>
      </main>
      
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
