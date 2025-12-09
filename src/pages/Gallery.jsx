import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Image style for the grid
const imgStyle = {
  width: "100%",
  height: "220px",
  objectFit: "cover",
  borderRadius: "12px",
};

function Gallery() {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    'https://th.bing.com/th/id/OIP.4JqUVFFl9WSa00SHJgaxAgHaHa?w=172',
    'https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg',
    'https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg',
    'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
    'https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg',
    'https://images.pexels.com/photos/3214023/pexels-photo-3214023.jpeg',
    'https://images.pexels.com/photos/5381501/pexels-photo-5381501.jpeg',
    'https://th.bing.com/th?q=Audi+Cars&w=120',
    'https://th.bing.com/th/id/OIP.GWmhUFocRzcTVSeqkD3uqwHaHS?w=199',
  ]

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: 'top 28%',
        end: 'top -110%',
        scrub: 1,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      }
    });
  });

  return (
    <div>
      {/* -------- Section 1: Scroll Animation -------- */}
      <div className='section1 relative py-0'>
        <div
          ref={imageDivRef}
          className='h-[20vw] mt-[-12vh] rounded-3xl w-[15vw] absolute overflow-hidden top-0 left-[30vw]'
        >
          <img
            ref={imageRef}
            className='h-full object-cover w-full'
            src="https://i.pinimg.com/1200x/09/cb/29/09cb29c0e4701c5e0237f9cf22a7342f.jpg"
            alt=""
          />
        </div>

        <div className='relative font-[font2]'>
          <div className='mt-[40vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>
              Luxuries <br /> Drive
            </h1>
          </div>
          <div className='pl-[38%]'>
            <p className='text-4xl'>
              Last week, we released Services, allowing designers to sell freelance services that can be purchased instantly on Dribbble. Designers outline the work offered and set the price, completion time, number of revisions, and any other specifications they want to include.
            </p>
          </div>
        </div>
      </div>

      {/* -------- Section 2 -------- */}
      <div className='section2 h-[50vh]'></div>

      {/* -------- 9-Image Grid -------- */}
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        {imageArray.map((src, idx) => (
          <img key={idx} src={src} style={imgStyle} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
