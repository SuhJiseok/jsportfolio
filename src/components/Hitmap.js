import React, { useEffect, useRef, useState } from 'react'
import '../styles/Hitmap.scss';
import Odometer from 'odometer';
import { BsFillPatchCheckFill} from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import Graph from './Graph';
import Clock from './Clock';

function Hitmap() {
    const odometerRef = useRef(null);
    const circleRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);


    const maptimeRef = useRef(null);
    const mapcenterFirstRef = useRef(null);
    const maprightFirstRef = useRef(null);

    const traindayRef = useRef(null);
    const mapcenterLastRef = useRef(null);
    const maprightLastRef = useRef(null);
    
    const dayfillRef = useRef(null);
    const [dayCount, setDayCount] = useState(0);

    const [isClockVisible, setIsClockVisible] = useState(false);
    const [colors, setColors] = useState([
      "rgba(81, 118, 97, 0.24)",
      "rgba(96, 185, 136, 0.53)",
      "rgba(67, 255, 153, 0.67)",
      "#00FF75",
    ]);


    useEffect(() => {
        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              const { isIntersecting } = entry;
              if (isIntersecting) {
                circleRef.current.classList.add('appear');
                entry.target.style.opacity = "1";
                entry.target.style.transition = 'all 0.5s ease-in-out';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
                
                if (entry.target === maptimeRef.current) {
                    setIsVisible(true);
                }
                if (entry.target === maptimeRef.current) {
                  setIsVisible(true);
                  setTimeout(() => {
                      setIsClockVisible(true);
                  }, 500); 
              }


              } else {
                entry.target.style.transform = 'translateY(100px)';
                entry.target.style.opacity = "0";
              }
            });
          },
          { threshold: 0.45 }
        );
    
        if (maptimeRef.current) {
            observer.observe(maptimeRef.current);
          }
      
          if (mapcenterFirstRef.current) {
            observer.observe(mapcenterFirstRef.current);
          }
      
          if (maprightFirstRef.current) {
            observer.observe(maprightFirstRef.current);
          }
  
          if (traindayRef.current) {
            observer.observe(traindayRef.current);
          }
  
          if (mapcenterLastRef.current) {
            observer.observe(mapcenterLastRef.current);
          }
  
          if (maprightLastRef.current) {
            observer.observe(maprightLastRef.current);
          }
          if (dayfillRef.current) {
            observer.observe(dayfillRef.current);
          }
      
          return () => {
            if (maptimeRef.current) {
              observer.unobserve(maptimeRef.current);
            }
      
            if (mapcenterFirstRef.current) {
              observer.unobserve(mapcenterFirstRef.current);
            }
      
            if (maprightFirstRef.current) {
              observer.unobserve(maprightFirstRef.current);
            }
  
            if (traindayRef.current) {
              observer.unobserve(traindayRef.current);
            }
  
            if (mapcenterLastRef.current) {
              observer.unobserve(mapcenterLastRef.current);
            }
  
            if (maprightLastRef.current) {
              observer.unobserve(maprightLastRef.current);
            }

            if (dayfillRef.current) {
                observer.unobserve(dayfillRef.current);
            }
          };
        }, []);

    useEffect(() => {
      if (odometerRef.current && isVisible) {
        const odometerInstance = new Odometer({
          el: odometerRef.current,
          value: 0, // 초기 값 설정
          format: '(ddd)',
          theme: 'default',
        });
  
        setTimeout(() => {
          odometerInstance.update(1100); // 최종 값 설정
        }, 500); // 애니메이션 지연 시간 (밀리초 단위)
      }
    }, [isVisible]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            const { isIntersecting } = entry;
            if (isIntersecting && entry.target === dayfillRef.current) {
              setIsVisible(true);
            }
          });
        },
        { threshold: 0.45 }
      );
  
      if (dayfillRef.current) {
        observer.observe(dayfillRef.current);
      }

      return () => {
        if (dayfillRef.current) {
          observer.unobserve(dayfillRef.current);
        }
      };
    }, []);

    useEffect(() => {
      let counter;
      if (isVisible) {
        setTimeout(() => {
          counter = setInterval(() => {
              setDayCount(prev => {
                  if (prev < 110) {
                      return prev + 1;
                  } else {
                      clearInterval(counter);
                      return prev;
                  }
              });
          }, 3500 / 110); // 4 seconds divided by 110
        }, 2000);
      }

      return () => clearInterval(counter);
  }, [isVisible]);
  useEffect(() => {
    const timer = setInterval(() => {
      setColors(colors => [
        colors[colors.length - 1], // 마지막 색상을 앞으로 이동
        ...colors.slice(0, -1), // 나머지 색상들을 한 칸씩 뒤로 이동
      ]);
    }, 200);

    return () => clearInterval(timer); // 컴포넌트가 unmount될 때 타이머 해제
  }, []);



  return (
    <>
    <div className='hitmap'>
        <div className='mapleft'>
            <div className='maptime' ref={maptimeRef}>
                <div>
                    <p>하루평균</p>
                    {isClockVisible && <Clock />}
                    <p>학습시간</p>
                </div>
                <div>
                    총
                    <div className='odometerwrap'>
                        <div className="odometer" ref={odometerRef}></div><p>시간</p>
                    </div>
                    <div className='mapminute'>
                     <p>무려</p>
                     <div>
                        <span>6</span> 만 <span>6000</span> 분
                    </div>
                    </div>
                </div>
            </div>
            <div className='maptrain' ref={traindayRef}>
                <div className='calender'>
                    <div className='december'></div>
                    <div className='may'></div>
                </div>
                <div className='trainday'>
                    <p><span>Trainning Day</span> | 훈련일수</p>
                 
                    <div className='dayfill' ref={dayfillRef}>
                        <p>{dayCount} Days</p>
                        <p>훈련일수 기준</p>
                        <svg className="progress-circle" >
                        <circle className="progress-circle-bg" /* cx="150" cy="150" r="137.5" strokeWidth="25" */ />
                        <circle ref={circleRef} className="progress-circle-fg" /* cx="150" cy="150" r="137.5" strokeWidth="25" strokeDasharray="863.94" strokeDashoffset="863.94" */ />
                        </svg>
                    </div>
         
                </div>
            </div>
        </div>
        <div className='mapcenter'>
            <div ref={mapcenterFirstRef}>
              <h2>Result</h2>
              <div className='resultdetail'>
                <p>1. HTML, CSS, Javascript를 이용한 반응형 웹사이트 제작</p><br/>
                <p>2. React를 사용하여 컴포넌트 및 상태 관리를 통한 웹사이트 유지보수 향상  </p><br/>
                <p>3. Firebase를 통한 서버리스 사이트 제작 및 데이터 관리 </p>
              </div>

            </div>
            <div ref={mapcenterLastRef}>
            <h2>더 알아보기</h2>
              <div className='chevcontainer'>
              {colors.map((color, index) => (
                  <p key={index} style={{ color: color, transition: 'color 0.3s' }}>
                  <i><FaChevronDown /></i>
                </p>
              ))}
              </div>
            </div>
        </div>
        <div className='mapright'>
            <div ref={maprightFirstRef}>
                <h2>Programmer Performance</h2>
                <div className='graph'>
                    <Graph/>
                    <div className='blinder'>
                        EXPERT<br/>
                        BEST<br/>
                        ADVANCED<br/>
                        PRO<br/>
                        GOOD
                    </div>
                </div>
            </div>
            <div ref={maprightLastRef}>
                <h2>The Things What<br/> I CAN DO</h2>
                <div className='list'>
                    <p><i><BsFillPatchCheckFill/></i>반응형 웹사이트 제작</p>
                    <p><i><BsFillPatchCheckFill/></i>싱글 페이지 애플리케이션 (SPA) 개발</p>
                    <p><i><BsFillPatchCheckFill/></i>서버 렌더링 웹사이트 생성</p>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Hitmap