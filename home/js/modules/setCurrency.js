function setCurrency(result) {
  const title = "- 환율 정보 -";
  const message = `
      1달러 = ${result.usdCurrency}원
      1유로 = ${result.eurCurrency}원
      100위안 = ${result.cnhCurrency}원
      100엔 = ${result.jpyCurrency}원`;

  console.log(title);
  console.log(message);
}

module.exports = setCurrency;
