import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';

const Stairs = ({ children }) => {
  const currentPath = useLocation().pathname;
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.set(stairParentRef.current, { display: 'block' });
    tl.from('.stairs', { height: 0, stagger: -0.2 });
    tl.to('.stairs', { y: '100%', stagger: -0.25 });
    tl.to(stairParentRef.current, { display: 'none' });
    tl.set('.stairs', { y: '0%' });

    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.2,
      scale: 1.2,
      transformOrigin: 'top center',
    });
  }, [currentPath]);

  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full fixed z-20 top-0">
        <div className="h-full w-full flex fixed">
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>{children}</div>
    </div>
  );
};

export default Stairs;
