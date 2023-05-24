import React, { useEffect, useRef, useState } from 'react'
import '../styles/Sub3.scss';


function Sub3() {
  const [outputText, setOutputText] = useState('');
  const [startTyping, setStartTyping] = useState(false);
  const text = '대화의 창조.<br/> 미래와의 대화.<br/> 무한한 대화의<br/> 세계.<br/> 인공지능의 기준<br/> <span>ChatGPT</span>와 <br/><span>리액트</span>의 놀라운<br/> 결합';
  const speed = 50;

  const typingRef = useRef(null);
  const gptSubRef = useRef(null);


  useEffect(() => {
    const timer = setInterval(() => {
      if (outputText.length < text.length) {
        let nextChar = text[outputText.length];
        if (nextChar === '<') {
          // Include the entire tag
          const tagCloseIndex = text.indexOf('>', outputText.length);
          setOutputText(text.slice(0, tagCloseIndex + 1));
        } else {
          setOutputText(text.slice(0, outputText.length + 1));
        }
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [outputText, text]);

 // Setup Intersection Observer
 useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  observer.observe(typingRef.current);

  return () => {
    observer.unobserve(typingRef.current);
  };
}, []);

useEffect(() => {
  const gptSubObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        } 
      });
    },
    {
      threshold: 0.7, 
    }
  );

  gptSubObserver.observe(gptSubRef.current);

  return () => {
    gptSubObserver.unobserve(gptSubRef.current);
  };
}, []);


  return (
    <>
    <div className='content3inner3'>
          <div>
          <p className='gpttyping' ref={typingRef} dangerouslySetInnerHTML={{ __html: outputText }}></p>
          </div>
        <div className='dvcontainer3'>
          <div className='iphone'>
            <img src={require(`../images/iphone.png`)} alt=""></img>
            <div className='videocontainer'>
              <video autoPlay muted loop preoload>
                <source src="/jsportfolio/video/aichat.mp4" type='video/mp4'></source>
              </video>
            </div>
          </div>
          <div className='gptsub' ref={gptSubRef} style={{opacity: 0, transform: 'translateY(-70px)', transition: 'all 3s'}}>
            <p>React.js의 강력한 구조와 <span>axios</span>의 빠른 통신, <span>Firebase</span>의 실시간 데이터베이스, <span>SCSS</span>의 유연한 스타일링, 그리고 <span>OpenAI</span> 의 마법같은 인공지능 챗봇이 결합된 이 채팅 애플리케이션은 사용자에게 놀라운 대화 경험을 선사합니다. 실시간 메시지 전달, 이미지 공유, 인공지능 챗봇과의 대화 등 다양한 기능을 경험하실 수 있습니다. 새로운 대화의 세계를 지금 바로 만나보세요.</p>
          </div>
        </div>
    </div>


    </>
    
  )
}

export default Sub3