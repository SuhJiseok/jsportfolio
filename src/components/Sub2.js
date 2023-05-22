import React, { useEffect, useRef } from 'react'
import '../styles/Sub2.scss';
import Magic from './Magic';


function Sub2() {
  const dvContainerRef4 = useRef(null);
  const dvContainerRef5 = useRef(null);
  const opacityRef = useRef(null);

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
        threshold: 0.5, 
      }
    );

    const opacityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          } 
        });
      },
      {
        threshold: 0.8, 
      }
    );

    observer.observe(dvContainerRef4.current);
    observer.observe(dvContainerRef5.current);
    opacityObserver.observe(opacityRef.current);

    return () => {
      observer.unobserve(dvContainerRef4.current);
      observer.unobserve(dvContainerRef5.current);
      opacityObserver.unobserve(opacityRef.current);
    };
  }, []); 



  return (
    <>
    <div className='sub2_1'>
      <h2>리액트 훅스로 멋진 영화 추천 경험 제공.</h2>
      <p>이 멋진 리액트 프로젝트에서는 Row 컴포넌트를 통해 각 영화의 매력을 세련되게 전달하고 있습니다. 프로젝트는<span> useEffect </span>훅을 사용하여 영화 정보를 신선하게 유지하며,<span> API</span>에서 영화 데이터를 가져오는 함수인<span> fetchMovieData</span>를 호출합니다.</p>
    </div>

    <div className='content3inner'>
      <div></div>
      <div className='dvcontainer' ref={dvContainerRef4}>
        <div className='imac'>
          <img src={require(`../images/imac.png`)} alt=""></img>
          <div className='videocontainer'>
            <video autoPlay muted loop preoload>
              <source src="jsportfolio/video/netflixpc.mp4" type='video/mp4'></source>
            </video>
          </div>
        </div>
      </div>
    </div>
    <h2>리액트의 <span><Magic /></span> 검색 마법, 영화 찾기 업그레이드 </h2>
    <div className='content3inner2'>
      <div className='dvcontainer2' ref={dvContainerRef5}>
        <div className='ipad'>
          <img src={require(`../images/ipad.png`)} alt=""></img>
          <div className='videocontainer'>
            <video autoPlay muted loop preoload>
              <source src="jsportfolio/video/netflixtablet.mp4" type='video/mp4'></source>
            </video>
          </div>
        </div>
      </div>
      <div ref={opacityRef} style={{opacity: 0, transform: 'translateY(40px)', transition: 'all 1s'}}>
        <p>리액트를 통해 구현된 검색 기능은 사용자가 원하는 영화를 찾을 수 있게 도와줍니다. 빠르고 정확한 검색 결과를 보여주기 위해 <span>디바운싱 기법</span>과 <span>API 통신</span>을 활용하며, 사용자에게 즉각적인 반응성을 제공합니다. 이를 통해 사용자가 쉽고 편리하게 원하는 영화를 찾아볼 수 있는 경험을 선사합니다.</p>
      </div>
    </div>
    <div className='content3inner3'>
        <div>
          <h2>영화 속 세계, 리액트로<br/>들여다보기</h2>
          <p>MovieModal 컴포넌트는 <span>React</span>의 <span>useState</span>와 <span>useEffect 훅</span>, 그리고 <span>axios</span>가 마법처럼 작동하여 영화 상세 정보를 획득합니다. 사용자는 간단한 클릭만으로도 정보의 대화를 나누고, YouTube 트레일러로 영화의 세계에 빠져드는 황홀한 경험을 누릴 수 있습니다.</p>
        </div>
        <div className='dvcontainer3'>
          <div className='iphone'>
            <img src={require(`../images/iphone.png`)} alt=""></img>
            <div className='videocontainer'>
              <video autoPlay muted loop preoload>
                <source src="jsportfolio/video/netflixphone.mp4" type='video/mp4'></source>
              </video>
            </div>
          </div>
        </div>
    </div>



    </>
    
  )
}

export default Sub2