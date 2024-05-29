init();

async function init() {
  const res= await requestWeather();

  let msg = '현재 위치는 ' + res.locName + '입니다. 😄<br>'
      msg += '현재 온도는 '+ res.temp + '℃ 이며, ' + res.description + ' 상태입니다.<br>'
      msg += '최저 기온은 '+ res.temp_Min + '℃, 최고 기온은 '+ res.temp_Max+ '℃ 입니다.';

  const content = document.querySelector('#content')
  content.innerHTML = msg
}

/* OpenWeatherMap 날씨 요청 메서드 */
async function requestWeather() {
  const key = "23a93b0b3bafbd17bc6bfaa741906d2d";
  const requestLocation = `https://api.openweathermap.org/geo/1.0/direct?q=Seoul&limit=5&appid=${key}`;
  try {
    const result = await fetch(requestLocation)
    const jsonResult = await result.json();

    let locationSet = {};
    locationSet = findLocation(locationSet, jsonResult[0]);

    return await getWeather(locationSet.lat, locationSet.lon, key);
  } catch (error) {
    console.error('Error in : requestWeather() >>> : ' + error);
    return "";
  }

}

/* 위도 경도 매핑*/
function findLocation(object, info) {
  object.country = info.country;
  object.city = info.name;
  object.lat = info.lat; // 위도
  object.lon = info.lon; // 경도

  return object;
}

/* 날씨 호출 메서드 */
async function getWeather(lat, lon, key) {
  const requestWeather =
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=kr`;
  try {
    const getWeather = await fetch(requestWeather);
    const weatherData = await getWeather.json();

    if (!weatherData) {
      return "날씨를 가져오지 못했어요!";
    }

    const tempObj = {
      'locName': weatherData.name,            // 지역명
      'temp_Max': weatherData.main.temp_max, // 최고기온
      'temp_Min': weatherData.main.temp_min, // 최저기온
      'temp': weatherData.main.temp,          // 현재기온
      'description': weatherData.weather[0].description // 설명
    };

    return tempObj;

  } catch (error) {
    console.log("error in findLocation(object, info) >>> : " + error)
  }
}

