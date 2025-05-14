import React from 'react';

interface Service {
  img: string;
  title: string;
  desc: string;
}

interface DesktopCardComponentProps {
  service: Service;
  index: number;
}

const DesktopCardComponent: React.FC<DesktopCardComponentProps> = ({ service, index }) => {
  const shouldHavePadding = index === 0 || index === 3 || index === 6;

  return (
    <div className={`flex items-center gap-3 bg-red-500 ${shouldHavePadding ? "px-2" : ""}`}>
      <img src={service.img} alt={service.title} className="w-14" />
      
      <nav>
        <a href="#">
          <h1 className="text-xl font-medium">{service.title}</h1>
          <p className="text-md font-light">{service.desc}</p>
        </a>
      </nav>
    </div>
  );
};

export default DesktopCardComponent;
