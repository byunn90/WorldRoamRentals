import React, { useState } from "react";
import NavBar from "./NavBar";

function Home() {
  const [backGroundChanger, setBackGround] = useState(false);

  const myslider = () => {
    setBackGround(!backGroundChanger);
    console.log("hi");
  };

  return (
    <div
      className={`home min-h-screen p-0 flex flex-col ${
        backGroundChanger ? "bg-light" : "bg-dark"
      }`}
    >
      <NavBar
        backGroundChanger={backGroundChanger}
        toggleBackground={myslider}
      />
      <div className="container mx-auto mt-12 flex-1 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to my Home page</h1>
        <p className="text-lg text-gray-700">
          This is the content of my home page.
        </p>
      </div>
    </div>
  );
}

export default Home;
