import React, { useEffect, useRef } from 'react';
import '../styles/ReactIntro.scss';

const ReactIntro = () => {
  const imageWrapperRef = useRef();
  

  useEffect(() => {
    const imageWrapper = imageWrapperRef.current;

    // 이미지 생성 및 DOM에 추가
    for (let i = 61; i >= 2; i--) {
      const div = document.createElement('div');
      div.className = 'image-container';
      if (i === 61) div.classList.add('active'); // 첫 번째 이미지는 기본적으로 활성화

      const img = document.createElement('img');
      img.src = process.env.PUBLIC_URL + '/images/intro/' + i + '.jpg'; // 이미지 경로를 올바르게 설정하세요.

      const text = document.createElement('div');
      text.className = 'text';
      text.innerHTML = 'REACT';

      // Perspective 효과를 조절
      const scale = i <= 37 ? (i - 2) / (37 - 2) : 1;
      text.style.transform = `translate(-50%, -50%) translateZ(${scale * -1000}px)`;
      div.style.perspective = `${(1 - scale) * 1000}px`;

      div.appendChild(img);
      div.appendChild(text);
      imageWrapper.appendChild(div);
    }

    const imageContainers = document.querySelectorAll('.image-container');
    let currentImageIndex = 0;

    // 스크롤 이벤트 리스너
    window.addEventListener('wheel', function(e) {
      // 모든 이미지의 활성화 상태 초기화
      imageContainers.forEach((img) => img.classList.remove('active'));
  
      if (e.deltaY > 0) { // Scroll down
        if (currentImageIndex < imageContainers.length - 1) {
          imageContainers[++currentImageIndex].classList.add('active');
        } else {
          // 이미지 인덱스가 최대값일 경우(마지막 이미지일 경우), active 클래스를 다시 추가
          imageContainers[currentImageIndex].classList.add('active');
        }
      } else { // Scroll up
        if (currentImageIndex > 0) {
          imageContainers[--currentImageIndex].classList.add('active');
        } else {
          // 이미지 인덱스가 0일 경우(첫번째 이미지일 경우), active 클래스를 다시 추가
          imageContainers[currentImageIndex].classList.add('active');
        }
      }
    });
  }, []);

  return (
  <div id="image-wrapper" ref={imageWrapperRef}>
  </div>
  )
};

export default ReactIntro;
