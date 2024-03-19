// function GetCookie (name) {
//     const pairs = document.cookie.split(';');
//     let result = "";
//     for (const key in pairs) {
//         if (pairs.hasOwnProperty.call(pairs, key)) {
//             result = pairs[key];
//             console.log(result);

//         }
//     }
//     return result;
// }

// function SetCookie (name, value, expireDate) {
//     const cookieString = name + "=" + value +
//                          "; expire_Date" + "=" + expireDate;
//     document.cookie = cookieString;
// }

// let count = GetCookie("count");
// const user_name = GetCookie("user_name");
// const expire_date = new Date();

// if (user_name == null){
//     count = 0;
//     user_name = prompt("이름을 입력해주셈","");

//     if(user_name == null){
//         alert('이름을 입력하셈..');
//         user_name = '홍길동';

//     } else{
//         expire_date.setTime(
//             expire_date.getTime()
//             + (365 * 24 * 3600 * 1000)
//         );
//         SetCookie("username", username, expire_date);
//     }
// }

// count++;
// expire_date.setTime(
//     expire_date.getTime()
//     + (365 * 24 * 3600 * 1000)
// );
// SetCookie("count", count, expire_date);
// document.write('<p>안녕하셈요? ${user_name}님의 ${count} 번째 방문을 환영합니다!</p>');


function GetCookie(name) {
    const pairs = document.cookie.split(';');
    for (const pair of pairs) {
        const [key, value] = pair.trim().split('=');
        if (key === name) {
            console.log(value);
            return value;
        }
    }
    return "";
}

function SetCookie(name, value, expireDate) {
    const cookieString = name + "=" + value +
                         "; expires=" + expireDate.toUTCString();
    document.cookie = cookieString;
    console.log(`cookieString >>> : ${cookieString}`)
}

let count = parseInt(GetCookie("count")) || 0;
let user_name = GetCookie("user_name");
const expireDate = new Date();
const time = expireDate.setTime(expireDate.getTime() + (365 * 24 * 3600 * 1000));
console.log('time >>> : ', time)
if (user_name === "") {
    count = 0;
    user_name = prompt("이름을 입력해주세요", "");

    if (user_name === null) {
        alert('이름을 입력하세요.');
        user_name = '홍길동';
    } else {
        SetCookie("user_name", user_name, expireDate);
    }
}

count++;
SetCookie("count", count, expireDate);
document.write(`<p>안녕하세요? ${user_name}님의 ${count}번째 방문을 환영합니다!</p>`);
