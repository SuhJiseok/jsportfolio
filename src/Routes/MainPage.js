import React, { useContext, useEffect, useRef, useState } from 'react'
import '../styles/MainPage.scss';

import Header from '../components/Header';
import Hitmap from '../components/Hitmap';
import Pagelist from '../components/Pagelist';
import More from '../components/More';
import Sub1 from '../components/Sub1';

import Navmenu from '../components/Navmenu';
import NavMenuContext from '../hooks/NavMenuContext';
import Bgmove from '../components/Bgmove';
import Reactinfo from '../components/Reactinfo';
import Loading from '../components/Loading';
import Sub2 from '../components/Sub2';
import Magic from '../components/Magic';
import Sub3 from '../components/Sub3';
import Profile from '../components/Profile';
import Thnk from '../components/Thnk';
import Contact from '../components/Contact';


const logoImages = Array(7).fill().map((_, i) => `/jsportfolio/images/logo${i + 1}.png`);
const buttonLabels = ["HTML5", "CSS3", "Javascript", "React", "Illustration", "Photoshop", "Next"];

function MainPage() {
  const pebbleRef = useRef(null);
  const pebbleWrapRef = useRef(null);
  const { setIsNavOpen } = useContext(NavMenuContext);

  const sectionRef = useRef(null);
  const bgmoveRef = useRef(null);

  const [logoIndex, setLogoIndex] = useState(0);

  const profileRef = useRef(null);
  const samRef = useRef(null);
  const kosdaqRef = useRef(null);
  const cjRef = useRef(null);
  const netflixRef = useRef(null);
  const aiRef = useRef(null);
  const contactRef = useRef(null);
  const refs = { profileRef, samRef, kosdaqRef, cjRef, netflixRef, aiRef, contactRef }
  
 const headline =[
  "아름다움과 사용성이",
  <br key="1" />,
  "공존하는 웹 경험"
 ]
 const headline2 =[
  "크기와 관계없는",
  <br key="1" />,
  "반응형 웹 경험"
 ]

 const headline3 =[
  "인터렉티브 웹의",
  <br key="1" />,
  "즐거움"
 ]
  
  const paragraph = [
    "HTML/CSS W3C 웹 접근성 검사 통과 ",
    <br key="1" />,
    "Javascript 와 css를 통한 탑다운 메뉴 구현 ",
    <br key="2" />,
    "스크롤 addeventlistener를 통한 화면 구성 표현 조절 ",
    <br key="3" />,
  ];
  const paragraph2 = [
    "HTML/CSS W3C 웹 접근성 검사 통과 ",
    <br key="1" />,
    "media query를 이용한 반응형 페이지 구현",
    <br key="2" />,
    "Javascript 와 css를 통한 탑다운 메뉴 구현 ",
    <br key="3" />,
    "window.scroll 를 통한 스크롤 시 화면 이동 제어 "
  ];
  const paragraph3 = [
    "HTML/CSS W3C 웹 접근성 검사 통과",
    <br key="1" />,
    "media query를 이용한 반응형 페이지 구현",
    <br key="2" />,
    "이벤트 리스너를 통한 페이지 요소 애니메이션 효과 부여",
  ];

  const content2Ref = useRef(null);


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
    const mql = window.matchMedia("(max-width: 412px)");

    if (!mql.matches) {
      document.addEventListener('mousemove', handleMouseMove);
    }
  
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  useEffect(() => {


    const content2Observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            content2Observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.60 }
    );

    if (content2Ref.current) {
      content2Observer.observe(content2Ref.current);
    }

    return () => {
      if (content2Ref.current) {
        content2Observer.unobserve(content2Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (bgmoveRef.current) {
                        bgmoveRef.current.style.display = 'none';
                    }
                  observer.unobserve(entry.target);}
            });
        },
        { threshold: 0.1 }
    );

    if (sectionRef.current) {
        observer.observe(sectionRef.current);
    }


    return () => {
      if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
      }
  };
}, []);

useEffect(() => {
  const timer = setInterval(() => {
    setLogoIndex((logoIndex + 1) % logoImages.length);
  }, 3000); // changes every 3 seconds

  return () => clearInterval(timer); // This function runs when the component unmounts
}, [logoIndex]);


  const handleButtonClick = (i) => {
    setLogoIndex(i);
  };

  const dvContainerRef1 = useRef(null);
  const dvContainerRef2 = useRef(null);
  const dvContainerRef3 = useRef(null);

  // 이 Observer는 .dvcontainer 가 화면에 등장할 때 동작합니다.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          } else {
            entry.target.classList.remove('appear');
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(dvContainerRef1.current);
    observer.observe(dvContainerRef2.current);
    observer.observe(dvContainerRef3.current);

    return () => {
      observer.unobserve(dvContainerRef1.current);
      observer.unobserve(dvContainerRef2.current);
      observer.unobserve(dvContainerRef3.current);
    };
  }, []);



  
  return (
    <>
    <div>
      <Navmenu refs={refs} />  
      <Header onNavClick={() => setIsNavOpen(true)} />
      <Bgmove ref={bgmoveRef}/>
      <h1 className='mainh1'>트렌디하고<br/>
      유저 중심적인<br/>
      프론트엔드 개발자</h1>
      <div className='content1'>
        <p>디지털 아름다움을 선사하는 프론트엔드 개발자<br/> 사용자의 마음을 사로잡는 웹 경험을 창조합니다.<br/>매력 넘치는 디자인과 혁신적인 기술이 결합된<br/> 세련된 웹 환경으로 여러분의 디지털 무대를 한 단계<br/> 업그레이드합니다.</p>
        <div className='pebblewrap' ref={pebbleWrapRef}>
          <div className='pebble' ref={pebbleRef}>
            <div className='logoimg' style={{backgroundImage: `url(${logoImages[logoIndex]})`}}></div>
          </div>
        </div>
        <div className='btnwrap'>
          <div className='logobtn'>
          {logoImages.map((_, i) => (
            <button 
              key={i} 
              onClick={() => handleButtonClick(i)}
              style={{ backgroundColor: logoIndex === i ? 'white' : 'rgba(217, 217, 217, 0.5)' }}>
            </button>
          ))}
          </div>
          <p className='btnname'>{buttonLabels[logoIndex]}</p>
        </div> 
      </div>
      <section className='profilecontainer' ref={profileRef}>
          <Profile />
      </section>
      <div className='content2'>
        <div ref={content2Ref}>
          <h2>단, 5개월 만의 성과</h2>
          <p> 사용자 중심의 웹 경험을 만들기 위해 끊임없이 학습하고 도전하는 것이 제 열정입니다. 디지털 환경에서 여러분의 웹 경험를 높일 수 있는 솔루션을 제공하고자 합니다.</p>
        </div>
      </div>
    </div>
    <Hitmap/>
    <Pagelist/>
    <More />
    <div className='content3_1'  ref={samRef}>
      <div className='content3inner'>
        <div className='dvcontainer' ref={dvContainerRef1}>
          <div className='imac'>
            <img src={require(`../images/imac.png`)} alt=""></img>
            <div className='videocontainer'>
              <video autoPlay muted loop preoload>
                <source src="/jsportfolio/video/samsungem.mp4" type='video/mp4'></source>
              </video>
            </div>
          </div>
        </div>
       <Sub1 h2="삼성전기" p={paragraph} h3={headline} id="sam" githubUrl="https://github.com/SuhJiseok/samsungsem" Page="https://suhjiseok.github.io/samsungsem/"/>
      </div>

    </div>

    <div className='content3_2' ref={kosdaqRef} >
      <div className='content3inner'>
        <div className='dvcontainer' ref={dvContainerRef2}>
          
          <div className='imac'>
            <img src={require(`../images/imac.png`)} alt=""></img>
            <div className='videocontainer'>
              <video muted autoPlay loop >
                  <source src="/jsportfolio/video/kodsaqpc.mp4" type='video/mp4'></source>
                </video>
            </div>
          </div>

          <div className='ipad'>
              <img src={require(`../images/ipad.png`)} alt=""></img>
              <div className='videocontainer'>
                <video muted autoPlay loop>
                  <source src="/jsportfolio/video/kosdaqtablet.mp4" type="video/mp4"></source>
                </video>
              </div>
          </div>

          <div className='iphone'>
            <img src={require(`../images/iphone.png`)} alt=""></img>
            <div className='videocontainer'>
              <video muted autoPlay loop>
                <source src="/jsportfolio/video/kosdaqphone.mp4" type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
        <Sub1 h2="코스닥 글로벌 세그먼트"  p={paragraph2} h3={headline2} id="kos" githubUrl="https://github.com/SuhJiseok/kosdaqglobal" Page="https://suhjiseok.github.io/kosdaqglobal/"/>
      </div>

    </div>
  <section className='content3wrap'>
    <div className='content3_3' ref={cjRef}>
      <div className='content3inner'>
        <div className='dvcontainer' ref={dvContainerRef3}>
          <div className='imac'>
            <img src={require(`../images/imac.png`)} alt=""></img>
            <div className='videocontainer'>
              <video autoPlay muted loop preoload>
                  <source src="/jsportfolio/video/cjonepc.mp4" type='video/mp4'></source>
                </video>
            </div>
          </div>
          <div className='ipad'>
              <img src={require(`../images/ipad.png`)} alt=""></img>
              <div className='videocontainer'>
                <video muted autoPlay loop>
                  <source src="/jsportfolio/video/cjonetablet.mp4" type="video/mp4"></source>
                </video>
              </div>
          </div>
          <div className='iphone'>
            <img src={require(`../images/iphone.png`)} alt=""></img>
            <div className='videocontainer'>
              <video muted autoPlay loop>
                <source src="/jsportfolio/video/cjonephone.mp4" type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
        <Sub1 h2="CJ ONE"  p={paragraph3} h3={headline3} id="cj" githubUrl="https://github.com/SuhJiseok/CJone" Page="https://suhjiseok.github.io/CJone/"/>
      </div>
    </div>
  </section>
  <section className='reactinfocontainer'>
    <Reactinfo />
  </section>
  <section className='netflixcontainer' ref={netflixRef}>
    <Sub2 />
  </section>
  <section className='gptcontainer' ref={aiRef}>
    <Sub3 />
  </section>
  <Thnk />
  <section className='Contactcontainer' ref={contactRef}>
  <Contact />
  </section>
    </>
  )
}

export default MainPage