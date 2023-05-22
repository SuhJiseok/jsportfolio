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


const logoImages = Array(7).fill().map((_, i) => `/jsportfolio/images/logo${i + 1}.png`);
const buttonLabels = ["HTML5", "CSS3", "Javascript", "React", "Illustration", "Photoshop", "Next"];

function MainPage() {
  const pebbleRef = useRef(null);
  const pebbleWrapRef = useRef(null);
  const { setIsNavOpen } = useContext(NavMenuContext);

  const sectionRef = useRef(null);
  const bgmoveRef = useRef(null);

  const [logoIndex, setLogoIndex] = useState(0);

  

  
  const paragraph = [
    "이 웹 페이지는 직관적인 인터랙션과 세련된 애니메이션을 통해 사용자 친화적인 탐색을 제공하며, 웹 접근성 지침과 웹표준을 엄격하게 준수합니다. ",
    <br key="1" />,
    "자동 배너 기능과 정교한 알고리즘은 사용자가 원활하게 배너를 제어하고 전환할 수 있게 하여 놀라운 시각 경험을 선사합니다.",
    <br key="2" />,
    "또한, 'Top 버튼'은 부드러운 스크롤 애니메이션으로 웹 페이지 상단으로 빠르게 이동하게 해줍니다. 이러한 기능들은 웹 페이지의 접근성을 높이고 사용자 경험을 향상시킵니다.",
    <br key="3" />,
    "모든 구성 요소는 W3C 유효성 검사를 통과하여 고품질의 웹 경험을 보장합니다. 이 웹 페이지는 사용자에게 탁월한 웹 경험을 선사하는 데 효과적인 역할을 합니다."
  ];
  const paragraph2 = [
    "이 웹 페이지는 세련된 디자인과 탁월한 사용성을 자랑합니다. ",
    <br key="1" />,
    "총 6개로 나뉘어진 미디어 쿼리를 통해 사용자가 어떤 사이즈의 화면을 가지고 있던 동일한 최상의 웹 경험을 누릴 수 있습니다.",
    <br key="2" />,
    "또한, 자바스크립트를 통한 스크롤 작동을 구현하여 페이지 별로 스크롤을 통해 이동이 가능하게 하여 놀라운 움직임을 보여줍니다.",
    <br key="3" />,
    "이 놀라운 사용자 웹 환경을 제공하는 동시에 웹 접근성 지침과 웹 표준을 준수하며, W3C 유효성 검사를 통과하였습니다. 덕분에 사용자는 웹 페이지에서 최상의 사용자 경험을 얻을 수 있습니다."
  ];
  const paragraph3 = [
    "이 웹사이트의 JavaScript 코드는 사용자들에게 독특하고 매력적인  인터렉티브 경험을 제공합니다. 웹사이트의 애니메이션은 섬세한 기술과 디자인 원칙을 결합하여, 방문객들이 웹사이트를 탐험하는 동안 기분 좋은 느낌을 선사합니다.",
    <br key="1" />,
    "또한, 이 웹사이트는 이벤트 리스너와 DOM 조작 기술을 사용하여 각 웹 요소에 인터랙션 효과를 부여하였습니다. 이로 인해 사용자가 마우스를 움직이거나 클릭할 때마다 애니메이션이 자연스럽게 나타나 시각적인 즐거움을 선사합니다.",
    <br key="2" />,
    "사용자가 쉽게 찾을 수 있는 직관적인 인터페이스를 통해 필요한 정보에 빠르게 접근할 수 있도록 구성되어 있습니다. 이로 인해 사용자들은 편리한 온라인 경험을 누릴 수 있습니다.",
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

    document.addEventListener('mousemove', handleMouseMove);

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
      <Navmenu/>  
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
      <div className='content2'>
        <div ref={content2Ref}>
          <h2>단, 5개월 만의 성과</h2>
          <p>많은 시간과 노력을 투자해 HTML5, CSS3, JavaScript, React, TypeScript, 그리고 Next.js 기술들을 배운 개발자입니다. 사용자 중심의 웹 경험을 만들기 위해 끊임없이 학습하고 도전하는 것이 제 열정입니다. 이러한 최첨단 기술들을 통해 디지털 환경에서 여러분의 웹 경험를 높일 수 있는 솔루션을 제공하고자 합니다.</p>
        </div>
      </div>
    </div>
    <Hitmap/>
    <Pagelist/>
    <More />
    <div className='content3_1' >
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
        <Sub1 h2="삼성전기"  p={paragraph}  />
      </div>
      <h2><span>아름다움</span>과 <span>사용성</span>이 공존하는 웹 경험.</h2>
    </div>

    <div className='content3_2'>
      <div className='content3inner'>
        <div className='dvcontainer' ref={dvContainerRef2}>
          
          <div className='imac'>
            <img src={require(`../images/imac.png`)} alt=""></img>
            <div className='videocontainer'>
              <video autoPlay muted loop preoload>
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
        <Sub1 h2="코스닥 글로벌 세그먼트"  p={paragraph2} />
      </div>
      <h2>크기와 관계없는 <span>반응형</span> 웹 경험.</h2>
    </div>
  <section className='content3wrap'>
    <div className='content3_3'>
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
        <Sub1 h2="CJ ONE"  p={paragraph3} />
      </div>
      <h2><span>인터렉티브</span> 웹의 즐거움.</h2>
    </div>
  </section>
  <section className='reactinfo'>
    <Reactinfo />
  </section>
  <section className='netflixcontainer'>
    <Sub2 />
  </section>
  <section className='gptcontainer'>
    <Sub3 />
  </section>

    </>
  )
}

export default MainPage