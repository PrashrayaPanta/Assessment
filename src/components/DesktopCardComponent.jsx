import React from "react";

const DesktopCardComponent = ({service}) => {

  return (
    <div>
      <div className="flex items-center bg-red-500 gap-2">
        <img
          src={service.img}
          alt=""
          srcSet=""
          className="w-14"
        />

        <nav>
          <a href="">
            <h1 className="text-xl font-medium ">{service.title}</h1>
            <p className="text-md font-light">
              {service.description}
            </p>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default DesktopCardComponent;
