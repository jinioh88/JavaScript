# 라이트 박스 만들기
## 개요
  - 라이트 박스 이외의 모든 부분은 인터랙션이 통제되기 때문에 사용자가 이미지를 변경, 종료하는 부분에 대한 시각적 처리를 하자.
  - 주요 UI
    - 이미지 목록
    - 닫기 버튼
    - 인디케이터
    
## 구현
  >     
        이미지 영역. class="active"는 현재 표시된느 이미지
        <figure>
                <img src="images/img01.jpeg" class="active" alt=""/>
                <img src="images/img02.jpeg" alt=""/>
                <img src="images/img03.jpeg" alt=""/>
         </figure>
  - this.innerHTML은 클릭한 버튼 요소를 의미
  >     <button onclick="change_img(this.innerHTML)">1</button>
  - 속성 조작 메서드
    - setAttribute(속성명, 속성값) : 문서 객체의 속성을 추가
    - removeAttribute(속성명) : 문서 객체의 속성을 제거