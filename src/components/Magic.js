import React, { useEffect, useRef } from 'react';
import '../styles/Magic.scss'; // 이것은 만들 SCSS 파일에 맞게 변경해 주세요

const MagicStarSvg = () => (
  <svg viewBox="0 0 512 512">
    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
  </svg>
);

const Magic = () => {
  const magicStarRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);

  useEffect(() => {
    let index = 0,
        interval = 1500;

    const rand = (min, max) => 
      Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = star => {
      star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
      star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
      star.style.animation = "none";
      // eslint-disable-next-line no-unused-expressions
      star.offsetHeight; // This is required to trigger reflow for the animation
      star.style.animation = "";
    }

    for(const ref of magicStarRefs.current) {
      const star = ref.current;
      setTimeout(() => {
        animate(star);
        setInterval(() => animate(star), interval);
      }, index++ * (interval / 3))
    }
  }, []);

  return (
    <div className="magic">
      <h1>
        <span className="magic-star" ref={magicStarRefs.current[0]}><MagicStarSvg /></span>
        <span className="magic-star" ref={magicStarRefs.current[1]}><MagicStarSvg /></span>
        <span className="magic-star" ref={magicStarRefs.current[2]}><MagicStarSvg /></span>
        <span className="magic-text">빛나는</span>
      </h1>
    </div>
  );
};


export default Magic;
