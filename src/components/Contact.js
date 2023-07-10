import React, { useState } from 'react'
import '../styles/Contact.scss';


function Contact() {
  const [isRotating, setRotating] = useState(false);
  const [cardStyle, setCardStyle] = useState({});
  const [glowStyle, setGlowStyle] = useState({});

  const handleMouseEnter = () => {
    setRotating(true);
    const bounds = document.querySelector('.card').getBoundingClientRect(); // bounds 변수를 handleMouseEnter 함수 내에서 정의
    document.addEventListener('mousemove', rotateToMouse);
    setCardStyle({
      transform: 'scale3d(1.07, 1.07, 1.07)',
    });
  };

  const handleMouseLeave = () => {
    setRotating(false);
    document.removeEventListener('mousemove', rotateToMouse);
    setCardStyle({});
    setGlowStyle({});
  };

  const rotateToMouse = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const bounds = document.querySelector('.card').getBoundingClientRect(); // bounds 변수를 rotateToMouse 함수 내에서 정의
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    setCardStyle({
      ...cardStyle,
      transform: `scale3d(1.07, 1.07, 1.07) rotate3d(${center.y / 100}, ${-center.x / 100}, 0, ${Math.log(distance) * 2}deg)`,
      
    });

    setGlowStyle({
      backgroundImage: `radial-gradient(circle at ${center.x * 2 + bounds.width / 2}px ${center.y * 2 + bounds.height / 2}px, #ffffff55, #0000000f)`,
    });
  };

  return (
    <>
      <div
        className="card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={cardStyle}
      >
        <div className="glow" style={glowStyle}></div>
        <div className="cardname">
          <p>Suh Jiseok</p>
          <p>Front-End<br/> Developer</p>
        </div>
        <div className="cardinfo">
          <p>Tel : 010 6789 4086</p>
          <p>E-mail : nastudiolab@gmail.com</p>
          <p>Github :<a href='https://github.com/SuhJiseok'> https://github.com/SuhJiseok</a></p>
        </div>
      </div>
    </>
  );
}

export default Contact;