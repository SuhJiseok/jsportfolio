import React from 'react'
import '../styles/Profile.scss';


function Profile() {
  return (
<div className='profilewrap'>
  <div className='profilebox'>
    <h2>Profile</h2>
    <img src={require(`../images/profile.jpg`)} alt=""></img>
    <div className='profiledetail'>
      <p>서지석</p>
      <p>1996.04.16</p>
      <p>순천향대 경영학과 졸업</p>
      <p>이젠아카데미 평생교육원<br/> UI&UX 웹& 디자인&프론트엔드</p>
    </div>
  </div>
  <div className='profiledetail2'>
    <p>Skills</p>
    <img className='skillsimg' src={require(`../images/skills.png`)} alt=""></img>
    <p>ETC</p>
    <img className='etcimg' src={require(`../images/etc.png`)} alt=""></img>
    <p>Introduce</p>
    <div className='introduce'>
      <p><span>●</span>사용자 중심의 웹 인터페이스를 구현하고, 최신 기술과 디자인 트렌드를 적용하는 프론트엔드 개발자입니다.</p>
      <p><span>●</span> 직관적이고 유저 친화적인 웹 애플리케이션을 구현하여 사용자의 니즈를 충족시키고, 웹 세계에서 돋보이는 프로젝트를 완성하는 것을 목표로 합니다.</p>
    </div>
  </div>
</div>
  )
}

export default Profile