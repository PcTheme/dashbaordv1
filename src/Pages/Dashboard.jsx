// eslint-disable-next-line no-unused-vars
import React from "react";
import Cards from "../Componets/Cards";
import Dashboardmap  from "../Componets/Dashboardmap";

function Dashboard() {
  return (
    <div className="ml-[11rem] h-full w-full">
      <div className="w-full h-[100vh] px-3 py-3 ">
      <Cards />
      <Dashboardmap />
      </div>
    </div>
  );
}

export default Dashboard; 