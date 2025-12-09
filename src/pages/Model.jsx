

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const cars = [
  {
    name: "Tesla Model S Plaid",
    desc: "All-electric performance sedan with 0-60 mph in 1.99 seconds, top speed 200 mph, and 396 miles of range.",
    img: "https://www.bing.com/th/id/OIP.0H6a4tOc6DItsEWJIU3sEQHaEo?w=249&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
  },
  {
    name: "Porsche Taycan",
    desc: "Luxury electric sports car combining performance, advanced technology, and elegant design.",
    img: "https://www.bing.com/th/id/OIP.cAobzB0mBSlBjpBXbNRdSwHaE7?w=254&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
  },
  {
    name: "BMW i8",
    desc: "Plug-in hybrid sports car with futuristic design, dynamic driving, and eco-friendly technology.",
    img: "https://www.bing.com/th/id/OIP.f6ved8wranJjaO8g0qDStgHaEK?w=277&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
  },
  {
    name: "Audi e-tron GT",
    desc: "Fully electric Gran Turismo offering luxury, speed, and cutting-edge Audi technology.",
    img: "https://www.bing.com/th/id/OIP.qYCUWrXU149uQhB8FwKzcwHaE8?w=254&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
  },
   {
    name: "Audi e-tron GT",
    desc: "Fully electric Gran Turismo offering luxury, speed, and cutting-edge Audi technology.",
    img: "https://www.bing.com/th/id/OIP.CIac5BAbYhrvBddLTcoNxAHaEW?w=235&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
  },
  {
    name: "Mercedes EQS",
    desc: "Luxury electric sedan with ultra-modern interior, long-range, and premium comfort.",
    img: "https://th.bing.com/th?q=Most+Expensive+Car&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-WW&cc=PK&setlang=en&adlt=moderate&t=1&mw=247",
  },
];

const Model = () => {
  const containerRef = useRef([]);

  useEffect(() => {
    containerRef.current.forEach((el, index) => {
      gsap.from(el, {
        opacity: 1,
        y: 50,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">
        Our Car Models
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car, index) => (
          <div
            key={index}
            ref={(el) => (containerRef.current[index] = el)}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-500 cursor-pointer"
          >
            <div className="h-64 w-full overflow-hidden">
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">{car.name}</h2>
              <p className="text-gray-700 text-base">{car.desc}</p>
              <button className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition font-semibold">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Model;
