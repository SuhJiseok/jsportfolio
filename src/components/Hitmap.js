import React from 'react'
import '../styles/Hitmap.scss';
function Hitmap() {
  return (
    <>
    <div className='hitmap'>
        <div className='mapleft'>
            <div className='maptime'>
                <div>
                    <p>하루평균</p>
                    <div className='mapclock'>10시간</div>
                    <p>학습시간</p>
                </div>
                <div>총 1100시간 무려 6만 6000분분</div>
            </div>
            <div className='maptrain'>Trainning Day</div>
        </div>
        <div className='mapcenter'>
            <div>무슨사이트</div>
            <div>미정</div>
        </div>
        <div className='mapright'>
            <div>Programmer Performance</div>
            <div>The Things What I CAN DO</div>
        </div>
    </div>

    </>
  )
}

export default Hitmap