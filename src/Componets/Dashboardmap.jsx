import React from "react";
import WorldMap from "react-svg-worldmap";

function DashboardMap() {
  const data = [
    { country: "CN", value: 1389618778 }, // China
    { country: "IN", value: 1311559204 }, // India
    { country: "US", value: 331883986 }, // United States
    { country: "ID", value: 264935824 }, // Indonesia
    { country: "PK", value: 210797836 }, // Pakistan
    { country: "BR", value: 210301591 }, // Brazil
    { country: "NG", value: 208679114 }, // Nigeria
    { country: "BD", value: 161062905 }, // Bangladesh
    { country: "RU", value: 141944641 }, // Russia
    { country: "MX", value: 127318112 }, // Mexico
  ];

  return (
    <div className="flex justify-center mt-[-1rem] bg-transparent">
      <WorldMap
        color="#000"
        valueSuffix=" people"
        size="responsive"
        data={data}
      />
    </div>
  );
}

export default DashboardMap;
