// 리디렉션하기
// netlify에 호스팅 했다면 도메인으로 연결한다. 
let netlifyUrl = "hero-puzzle-game.netlify.app"
let hostingUrl = "hero.ppnn.co.kr"
if (location.href.includes(netlifyUrl)) {
  let url = location.href;
  url = url.replace(netlifyUrl, hostingUrl);
  location.href = url;
}
