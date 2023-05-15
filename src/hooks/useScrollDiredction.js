import { useState, useEffect } from 'react';

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {

      const currentScrollY = window.pageYOffset;
      console.log(`currentScrollY: ${currentScrollY}, lastScrollY: ${lastScrollY}`); // Log scroll positions

      if (currentScrollY > lastScrollY) {
        // scrolling down
        setScrollDirection("down");
      } else {
        // scrolling up
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollDirection;
}

export default useScrollDirection;
