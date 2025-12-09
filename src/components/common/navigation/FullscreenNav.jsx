import React, { useContext, useRef, useEffect } from "react";
import gsap from "gsap";
import { NavbarContext } from "../../context/NavContext.jsx";

const FullScreenNav = () => {
  const fullScreenRef = useRef(null);
  const fullNavLinksRef = useRef(null);
  const { navOpen, setNavOpen } = useContext(NavbarContext);

  const openAnimation = () => {
    const tl = gsap.timeline();
    tl.set(fullScreenRef.current, { display: "block" });
    tl.to(".stairing", { height: "100%", stagger: 0.1, duration: 0.5 });
    tl.to(fullNavLinksRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.3");
    tl.to(".link", { opacity: 1, rotateX: 0, stagger: 0.2, duration: 0.4 }, "-=0.3");
  };

  const closeAnimation = () => {
    const tl = gsap.timeline();
    tl.to(".link", { opacity: 0, rotateX: 90, stagger: 0.1, duration: 0.3 });
    tl.to(".stairing", { height: 0, stagger: 0.1, duration: 0.3 }, "-=0.2");
    tl.to(fullNavLinksRef.current, { opacity: 0, y: 30, duration: 0.3 }, "-=0.2");
    tl.set(fullScreenRef.current, { display: "none" });
  };

  useEffect(() => {
    if (navOpen) openAnimation();
    else closeAnimation();
  }, [navOpen]);

  const handleHover = (ref) => {
    const el = ref.current;
    gsap.to(el, {
      x: -el.scrollWidth / 2,
      duration: 15,
      ease: "linear",
      repeat: -1,
    });
  };

  const handleLeave = (ref) => {
    gsap.killTweensOf(ref.current);
    gsap.set(ref.current, { x: 0 });
  };

  const links = [
    {
      title: "Gallery",
      items: [
        {
          text: "Pour Car Vious",
          img: "https://th.bing.com/th?q=Audi+Cars&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3",
        },
        {
          text: "Pour Car Vious",
          img: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg",
        },
      ],
    },
    {
      title: "Models",
      items: [
        {
          text: "Pour Car Vious",
          img: "https://th.bing.com/th/id/OIP.4JqUVFFl9WSa00SHJgaxAgHaHa?w=172&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        },
        {
          text: "Pour Car Vious",
          img: "https://images.pexels.com/photos/3214023/pexels-photo-3214023.jpeg",
        },
      ],
    },
    {
      title: "Contact",
      items: [
        {
          text: "Pour Car Vious",
          img: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg",
        },
        {
          text: "Pour Car Vious",
          img: "https://images.pexels.com/photos/3214023/pexels-photo-3214023.jpeg",
        },
      ],
    },
  ];

  return (
    <div
      ref={fullScreenRef}
      style={{
        display: "none",
        color: "white",
        overflow: "hidden",
        height: "100vh",
        width: "100%",
        position: "absolute",
        zIndex: 50,
        backgroundColor: "#000",
      }}
    >
      <div style={{ height: "100vh", width: "100%", position: "fixed" }}>
        <div style={{ display: "flex", height: "100%", width: "100%" }}>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="stairing"
              style={{ height: 0, width: "20%", backgroundColor: "black" }}
            />
          ))}
        </div>
      </div>

      <div ref={fullNavLinksRef} style={{ position: "relative", top: "3rem", padding: "0 2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "2rem",
          }}
        >
          <div
            onClick={() => setNavOpen(false)}
            style={{
              width: "2rem",
              height: "2rem",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "2px",
                height: "100%",
                background: "#D3FD50",
                top: 0,
                left: "50%",
                transform: "rotate(45deg)",
                transformOrigin: "center",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "2px",
                height: "100%",
                background: "#D3FD50",
                top: 0,
                left: "50%",
                transform: "rotate(-45deg)",
                transformOrigin: "center",
              }}
            />
          </div>
        </div>

        {links.map((link, i) => {
          const moveRef = useRef(null);
          return (
            <div
              key={i}
              style={{
                margin: "2rem 0",
                position: "relative",
                borderTop: "1px solid white",
                paddingTop: "1rem",
              }}
              className="link"
            >
              <h1
                style={{
                  fontFamily: "font2",
                  fontSize: "4rem",
                  textAlign: "center",
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                }}
              >
                {link.title}
              </h1>
              <div
                ref={moveRef}
                style={{
                  display: "flex",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  gap: "1.2rem",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  background: "#D3FD50",
                  padding: "1rem 2.2rem",
                  borderRadius: "50px",
                  opacity: 0,
                }}
                onMouseEnter={() => {
                  handleHover(moveRef);
                  gsap.to(moveRef.current, { opacity: 1, duration: 0.3 });
                  gsap.to(moveRef.current.previousSibling, { opacity: 0, duration: 0.3 });
                }}
                onMouseLeave={() => {
                  handleLeave(moveRef);
                  gsap.to(moveRef.current, { opacity: 0, duration: 0.3 });
                  gsap.to(moveRef.current.previousSibling, { opacity: 1, duration: 0.3 });
                }}
              >
                {link.items.map((item, idx) => (
                  <React.Fragment key={idx}>
                    {Array(5)
                      .fill(0)
                      .map((_, repeatIdx) => (
                        <React.Fragment key={repeatIdx}>
                          <h2
                            style={{
                              fontFamily: "font2",
                              fontSize: "4.2rem",
                              marginRight: "1rem",
                              textTransform: "uppercase",
                              color: "#000",
                            }}
                          >
                            {item.text}
                          </h2>
                          <div
                            style={{
                              width: "calc(200px + 40px)",
                              height: "100px",
                              borderRadius: "50px",
                              overflow: "hidden",
                              marginRight: "1rem",
                            }}
                          >
                            <img
                              src={item.img}
                              alt=""
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </React.Fragment>
                      ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FullScreenNav;


