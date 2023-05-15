import React, { useEffect, useRef } from 'react'
import '../styles/Hitmap.scss';
import Odometer from 'odometer';
import { BsFillPatchCheckFill} from "react-icons/bs";
import Graph from './Graph';

function Hitmap() {
    const odometerRef = useRef(null);
  
    useEffect(() => {
      if (odometerRef.current) {
        const odometerInstance = new Odometer({
          el: odometerRef.current,
          value: 0, // 초기 값 설정
          format: '(ddd)',
          theme: 'default',
        });
  
        setTimeout(() => {
          odometerInstance.update(1100); // 최종 값 설정
        }, 900); // 애니메이션 지연 시간 (밀리초 단위)
      }
    }, []);
  return (
    <>
    <div className='hitmap'>
        <div className='mapleft'>
            <div className='maptime'>
                <div>
                    <p>하루평균</p>
                        <div className='mapclock'>
                            <p>10시간</p>
                        </div>
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
            <div className='maptrain'>
                <div className='calender'>
                    <div className='december'></div>
                    <div className='may'></div>
                </div>
                <div className='trainday'>
                    <p><span>Trainning Day</span> | 훈련일수</p>
                    <div className='dayfill'>
                        <p>110 Days</p>
                        <p>훈련일수 기준</p>
                        <svg className="progress-circle" width="300" height="300">
                        <circle className="progress-circle-bg" cx="150" cy="150" r="137.5" strokeWidth="25" />
                        <circle className="progress-circle-fg" cx="150" cy="150" r="137.5" strokeWidth="25" strokeDasharray="863.94" strokeDashoffset="863.94" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div className='mapcenter'>
            <div>무슨사이트</div>
            <div>미정</div>
        </div>
        <div className='mapright'>
            <div>
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
            <div>
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