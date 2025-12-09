import React, { useRef, useContext } from "react";
import { NavbarContext } from "../../context/NavContext.jsx";

function Navbar() {
  const navGreenRef = useRef(null);
  const { navOpen, setNavOpen } = useContext(NavbarContext);
  const width = 130;
  const height = 100;
  const primary = "#D32F2F";
  const secondary = "#111111";

  return (
    <div className="fixed top-0 z-50 flex w-full justify-between items-center p-4">
        <div className="w-36">
            <svg width={width} height={height} viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="300" cy="245" rx="180" ry="18" fill="#000" opacity="0.12" />

              <g>
                <path
                  d="M80 190 H460 Q500 190 520 150 L540 110 Q550 90 530 80 
                    L420 60 Q360 40 300 40 H180 Q140 40 110 60 
                    L50 90 Q30 100 40 140 Q50 180 80 190 Z"
                  fill={primary}
                  stroke={secondary}
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
                <path d="M200 100 L200 170" stroke={secondary} strokeWidth="3" opacity="0.18" />
                <path d="M320 100 L320 170" stroke={secondary} strokeWidth="3" opacity="0.18" />
                <path
                  d="M210 75 L380 75 Q395 75 395 90 L395 120 Q395 135 380 135 
                    L240 135 Q225 135 220 125 L210 95 Z"
                  fill={secondary}
                  opacity="0.95"
                />
                <rect x="470" y="135" width="40" height="22" rx="6" fill={secondary} opacity="0.9" />
              </g>

              <g>
                <g transform="translate(170,200)">
                  <circle cx="0" cy="0" r="42" fill={secondary} />
                  <circle cx="0" cy="0" r="24" fill="#f5f5f5" opacity="0.06" />
                  <circle cx="0" cy="0" r="16" fill="#eee" />
                </g>
                <g transform="translate(420,200)">
                  <circle cx="0" cy="0" r="42" fill={secondary} />
                  <circle cx="0" cy="0" r="24" fill="#f5f5f5" opacity="0.06" />
                  <circle cx="0" cy="0" r="16" fill="#eee" />
                </g>
              </g>
            </svg>
          </div>

      <div
        className="relative h-16 w-32 bg-black cursor-pointer"
        onClick={() => setNavOpen(!navOpen)}
        onMouseEnter={() =>
          navGreenRef.current && (navGreenRef.current.style.height = "100%")
        }
        onMouseLeave={() =>
          navGreenRef.current && (navGreenRef.current.style.height = "0%")
        }
      >
        <div
          ref={navGreenRef}
          className="absolute top-0 w-full h-0 bg-[#D3FD50] transition-all duration-300"
        ></div>

        <div className="relative flex flex-col justify-center items-end h-full px-4 gap-1">
          <div className="w-8 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

