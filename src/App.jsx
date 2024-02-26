// eslint-disable-next-line no-unused-vars
import React from "react";
// import gsap from "gsap";
import Routes from "./Routes/Route";

import Header from "./Componets/Header";
function App() {
  return (
    <div className="w-full h-full overflow-hidden ">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
