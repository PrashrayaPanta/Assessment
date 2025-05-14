import React from "react";

const MobileScreenCardComponent = ({ service }) => {
  return (
    <div>
      <a href="" className="block py-2">
        <ul>
          <li className="font-bold shadow-amber-400">{service.title}</li>
          <li className="text-sm font-medium">{service.desc}</li>
        </ul>
      </a>
    </div>
  );
};

export default MobileScreenCardComponent;
