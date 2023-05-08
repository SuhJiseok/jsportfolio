import React, { useEffect, useRef } from 'react'
import '../styles/MainPage.scss';

import Header from '../components/Header';
import Hitmap from '../components/Hitmap';


function MainPage() {
  const pebbleRef = useRef(null);
  const pebbleWrapRef = useRef(null);



  useEffect(() => {
    const handleMouseMove = (event) => {
      const pebble = pebbleRef.current;
      const pebbleWrap = pebbleWrapRef.current;
      const pebbleWrapRect = pebbleWrap.getBoundingClientRect();

      const x = event.clientX - pebbleWrapRect.left - pebble.offsetWidth / 2;
      const y = event.clientY - pebbleWrapRect.top - pebble.offsetHeight / 2;

      const maxX = pebbleWrapRect.width - pebble.offsetWidth;
      const maxY = pebbleWrapRect.height - pebble.offsetHeight;

      pebble.style.transform = `translate(${Math.min(Math.max(x, 0), maxX)}px, ${Math.min(Math.max(y, 0), maxY)}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <>
    <div>
    {/* <div className='bgmove'></div>
    <div className='bgmove2'></div> */}
      <Header/>
      <h1 className='mainh1'>트렌디하고<br/>
      유저 중심적인<br/>
      프론트엔드 개발자</h1>
      <div className='content1'>
        <p>디지털 아름다움을 선사하는 프론트엔드 개발자<br/> 사용자의 마음을 사로잡는 웹 경험을 창조합니다.<br/>매력 넘치는 디자인과 혁신적인 기술이 결합된<br/> 세련된 웹 환경으로 여러분의 디지털 무대를 한 단계<br/> 업그레이드합니다.</p>
        <div className='pebblewrap' ref={pebbleWrapRef}>
          <div className='pebble' ref={pebbleRef}>
            <div className='logoimg'></div>
          </div>
        </div>
        <div className='logobtn'>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button> 
        </div>
      </div>
      <div className='content2'>
        <div>
          <h2>단, 5개월 만의 성과</h2>
          <p>많은 시간과 노력을 투자해 HTML5, CSS3, JavaScript, React, TypeScript, 그리고 Next.js 기술들을 배운 개발자입니다. 사용자 중심의 웹 경험을 만들기 위해 끊임없이 학습하고 도전하는 것이 제 열정입니다. 이러한 최첨단 기술들을 통해 디지털 환경에서 여러분의 웹 경험를 높일 수 있는 솔루션을 제공하고자 합니다.</p>
        </div>
      </div>
    </div>
    <Hitmap/>
    </>
  )
}

export default MainPage