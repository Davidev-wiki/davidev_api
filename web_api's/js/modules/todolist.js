document.addEventListener('DOMContentLoaded', function(){

  /* 할 일 등록 */
  const btnReg = document.querySelector('#button-reg');
  btnReg.addEventListener('click', function (e) {
    // 이벤트에서 입력한 할 일 문자열 추출
    const argStr = e.target.parentElement.firstElementChild.value;
    console.log('argStr >>> : ', argStr);
    // addTodo(arg)로 넘겨줌
    addTodo(argStr);
  });

  function addTodo(str) {
    // 받은 addTodo(param) 출력
    console.log(str);
    const parentElement = document.querySelector('.list-group')     // 부모요소
    const listTemplate = document.querySelector('.list-group-item') // 리스트요소
    const clonedList = listTemplate.cloneNode(true);                     // 복제한 리스트
    clonedList.style.display = 'block';
    clonedList.firstElementChild.setAttribute('id', str);  // 속성 추가
    clonedList.lastElementChild.setAttribute('for', str);  // 속성 추가
    clonedList.lastElementChild.textContent = str;                     // 텍스트 추가
    clonedList.addEventListener('click', function (e) {
      // 클릭된 콤보박스의 값이 체크인지 확인
      if(e.target.checked) {
        const removeTargetId = e.target.id;
        const target = document.getElementById(removeTargetId).parentElement;
        target.parentElement.removeChild(target);
      }

    });             // 이벤트 추가
    parentElement.appendChild(clonedList);                             // 부모요소에 추가
    document.querySelector('.form-control').value = '';

  }

});

