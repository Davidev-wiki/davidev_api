/* 한국수출입은행 환율 요청 메서드 */
goExchange();

async function goExchange() {
  const res = await requestExchangeRate();
}

async function requestExchangeRate() {
  const key = '44MvmmlvkDGz7DOh6cDQdugvy0K7VTUH'
  const url = 'https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=' + key +
    '&searchdate=' + getCurrentDate() + '&data=AP01'
  // AP01 : 환율, AP02 : 대출금리, AP03 : 국제금리

  try {
    const response = await fetch(url);

    let result = await response.json();

    result = getCurrency(result);
    const setCurrency = require('./setCurrency');

    setCurrency(result);

  } catch (error) {
    console.error('자료를 받아오는데 에러가 발생했어요! >>> :', error);
    alert('현재 브라우저에서는 CORS 정책 위반으로 불러올 수 없습니다.');

  }

}

function getCurrency(result) {

  const currency = {

    cnhCurrency: result[6].deal_bas_r,
    eurCurrency: result[8].deal_bas_r,
    jpyCurrency: result[12].deal_bas_r,
    usdCurrency: result[22].deal_bas_r,
  }

  return currency;
}

/* 날짜 포맷 생성 메서드 ex)20240202 */

function getCurrentDate() {
  // 현재 시간과 날짜 객체 생성
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  // 년, 월, 일을 가져와서 문자열로 조합
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = parseInt(currentDate.getDate().toString().padStart(2, '0'));

  // 만약 현재 시간이 11시 이전이라면, 이전 날짜로 설정
  if (currentHour < 11) {
    console.log('조건문 실행됨.')
    currentDate.setDate(currentDate.getDate() - 1);
  }

  // 문자열로 조합한 날짜 출력
  const formattedDate = `${year}${month}${day}`;
  console.log('formattedDate >>> : ' + formattedDate);

  return formattedDate;
}


