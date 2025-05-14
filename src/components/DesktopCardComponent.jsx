import React from 'react'

const MobilScreenCardComponent = () => {
  return (
    <div>
          {[
            {
              title: "Custom Software Development",
              desc: "Tailored software solutions for your needs.",
              img: "https://metalogic.com.np/services/mainpage/computer.svg",
            },
            {
              title: "Web Development",
              desc: "Websites that work on all devices",
              img: "https://metalogic.com.np/services/web.svg",
            },
            {
              title: "Mobile App Development",
              desc: "App for phones and tablets",
              img: "https://metalogic.com.np/services/mobile.svg",
            },
            {
              title: "Cloud Computing Services",
              desc: "Use the internet to improve your business",
              img: "https://metalogic.com.np/services/cloud.svg",
            },
            {
              title: "Quality Assurance and Testing",
              desc: "Checking software for reliability",
              img: "https://metalogic.com.np/services/qa.svg",
            },
            {
              title: "UI/UX Designing",
              desc: "Creating user-friendly interfaces",
              img: "https://metalogic.com.np/services/ui.svg",
            },
            {
              title: "Maintenance and Support",
              desc: "Keep your software running smoothly",
              img: "https://metalogic.com.np/services/mainpage/computer.svg",
            },
            {
              title: "Blockchain Solutions",
              desc: "Secure technology for your business",
              img: "https://metalogic.com.np/services/support.svg",
            },
            {
              title: "DevOps",
              desc: "Faster and safer software delivery",
              img: "https://metalogic.com.np/services/mainpage/computer.svg",
            },
          ].map((service, i) => (
            <div key={i} className="flex items-center bg-red-500 gap-2 px-2 py-2">
              <img src={service.img} alt={service.title} className="w-14" />
              <div>
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-md font-light">{service.desc}</p>
              </div>
            </div>
          ))}
    </div>
  )
}

export default MobilScreenCardComponent
