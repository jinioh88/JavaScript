# JavaScript
## DOM
  - HTML 문서 내의 객체화된 구성 요소이다. 
  - document 객체에 소속된 DOM 메서드를 통해 특정 요소를 선택하거나 조작할 수 있다. 
    - document.getElementById(id);
    - document.querySelector(css 선택자);
  - 텍스트 조작
    - innerText : 요소 내부의 텍스트를 읽거나 변경. 순수한 텍스트
    - innerHTML : 요소 내부의 HTML 형식을 읽거나 변경. HTML 코드로 반영
    
## 이벤트 제어
  - 인라인 이벤트
  - 이벤트 핸들러
    - 자바스트립트의 DOM에서 처리하는 방
    
## 동적 객체 생성
  - 목록이 동적으로 추가 되는 경우 변경된 목록의 내용을 이벤트 리스터에 다시 알려줘야 한다. 
  - 자바스크립트 입장에선 이벤트 리스너가 처음 로딩된 문서를 기억할 뿐이기 때문에 동적으로 추가된 부분은 다시 확인하지 않으면 알 길이 없다. 
  - event.target은 클릭한 객체를 의미하고 event.target.nodeName 은 클릭한 요소를 대문자로 반환한다. 
  - evnet.target.parentNode.children <-- child에 접근하기 위해선 부모를 먼저 접근해야...