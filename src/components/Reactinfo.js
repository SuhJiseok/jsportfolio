import React from 'react'
import '../styles/Reactinfo.scss'



function Reactinfo() {
  return (
    <>
    <div className='reactinfo'>
      <div className='logocontainer'>
        {/* <img src='jsportfolio/images/Reactlogo.png' alt=''></img> */}
        <div class='reactlogo'>
          <span class='point'></span>
          <span class='ring-1'></span>
          <span class='ring-2'></span>
          <span class='ring-3'></span>
        </div>
      </div>
      <div>
        <h2>독창적인 컴포넌트 구조</h2>
        <p>모듈화된 구성 요소로 코드 재사용성 극대화화</p>
      </div>
      <div>
        <h2>빠른 가상 DOM 기술</h2>
        <p>효율 적인 DOM 업데이트로 웹 애플리케이션의 반응 속도 향상</p>
      </div>
      <div>
        <h2>선언적 UI 디자인</h2>
        <p>코드의 명료성과 가독성으로 웹개발의 복잡성 감소</p>
      </div>
      <div>
        <h2>리액트로 컴포넌트 기반의 재사용 가능한 웹 개발 혁신.</h2>
      </div>
      <div>
        <h2>상태 관리 및 생명주기</h2>
        <p>애플리케이션의 상태를 체계적으로 관리하며, 유지보수성과 확장성 향상 </p>
      </div>
      <div>
        <h2>커뮤니티와 생태계</h2>
        <p>수많은 라이브러리와 도구로 다양한 웹 개발 시나리오를 지원</p>
      </div>
      <div>
      </div>
    </div>
    </>
  )
}

export default Reactinfo