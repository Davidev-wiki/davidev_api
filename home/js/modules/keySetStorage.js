const list = document.getElementById('list');
let keySet = null;
let description = "";

keySetting();

const buttons = document.getElementsByName('btns');
buttons.forEach(button => {
    button.addEventListener("click", editList);
});

function keySetting() {

  const DISABLE_KEY = [
    'loglevel',
    'length',
    'clear',
    'getItem',
    'key',
    'removeItem',
    'setItem'
  ];

  list.innerHTML = ""; // 기존 리스트 초기화
  for (const key in localStorage) {
    if (!DISABLE_KEY.includes(key) && localStorage.hasOwnProperty(key)) { // 키 체크
      const $li = document.createElement('li');
      $li.textContent = `${key} : ${localStorage[key]}`;
      list.append($li);
    }
  }
}

function editList(e) {
    keySet = document.getElementById('key').value;
    description = document.getElementById('description').value;

    const buttonFlag = e.target.id;

    switch (buttonFlag) {
        case "add":
            localStorage.setItem(keySet, description);
            console.log('키가 등록되었어요');
            break;
        case "remove":
            localStorage.removeItem(keySet);
            console.log('키가 삭제되었어요');
          break;
        default:
    }
    keySetting();
}
