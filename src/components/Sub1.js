import React from 'react'
import '../styles/Sub1.scss';

function Sub1(props) {
  return (
    <>
    <div className='sub1'>
      <h2>{props.h2}</h2>
      <p>{props.p}</p>
      <span>웹 접근성 확인하기</span>
    </div>
    <div  className='scrollwrap'>
      <p>{props.num}</p>
      <div className='subscroll'>

      </div>
      <p>03</p>
    </div>
    </>
  )
}

export default Sub1