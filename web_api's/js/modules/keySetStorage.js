const list = document.getElementById('list');
let keySet = null;
let description = "";

keySetting();

const buttons = document.getElementsByName('btns');
buttons.forEach(button => {
    button.addEventListener("click", editList);
});

function keySetting() {
    list.innerHTML = ""; // 기존 리스트 초기화

    for (let key in localStorage) {
        const $li = document.createElement('li');
        $li.textContent = `${key} : ${localStorage[key]}`;
        console.log($li.textContent);
        list.append($li);
    }
}

function editList(e) {
    keySet = document.getElementById('key').value;
    description = document.getElementById('description').value;

    const keyStrings = `${keySet} : ${description}`;
    const buttonFlag = e.target.id;

    switch (buttonFlag) {
        case "add":
            localStorage.setItem(keySet, description);
            break;
        case "remove":
            localStorage.removeItem(keySet);
            break;
        default:
    }
    keySetting();
}
