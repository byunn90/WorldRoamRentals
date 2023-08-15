import React from "react";
import NavBar from "./NavBar";

function Home() {
  return (
    <div className="home bg-grey-100 min-h-screen p-0 flex flex-col">
      <NavBar />
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
