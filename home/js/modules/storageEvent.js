function store() {
    const product = document.getElementById('item');
    const count = document.getElementById('count');

    localStorage.setItem(product.value, count.value);
}

function retrieve() {
    const product = document.getElementById('item');
    const product_count = localStorage.getItem(product.value);
    product_count == null ? alert('품목명을 입력하셈') : count.value = product_count;
}

window.addEventListener("storage", storageEvent, false);

function storageEvent(eventObject) {
    let result = "";
    for (let key in eventObject) {
        value = eventObject[key];
        result += `${key} : ${value} \n`;
    }
    let textField = document.getElementById('modified');
    textField.append(result);
    alert('상품 갯수가 변경되었어요!');
}