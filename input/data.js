// 게임 관련 데이터를 넣는다.
// 연예인 마다 다르게 한다.

// googleSpreadUrl는 구글스프레드시트 주소다.
// 게임을 새로 만들면 주소가 바뀌어야 한다.
// 바꿨다. 
const googleSpreadUrl =
  "https://opensheet.elk.sh/1Dc7o0XamPd_0in-83rAwN2vs7RadxKab_Z1mx4l7g90";
// 구글 메시지를 저장하는 데이터베이스다.
// 메시지 화면에서 사용한다.
// 메시지 시트 이름을 바꿨다. 
// 바꿨다.
const googleSpreadMessageUrl =
  `${googleSpreadUrl}/message`;

// 상품이 있다. 
const isGoods = true;
// 상품 주소를 정한다.
// 이름을 goods라고 정한다. 상품 관련된 사진은 ad 폴더에 저장한다. 
const googleSpreadGoodsUrl = `${googleSpreadUrl}/goods`;

// 구글스프레드시트 데이터베이스를 입력하는 주소다.
// 나중에 코드가 바뀌면 주소도 바꿔야 한다.
// 앱마다 바꾼다.
// 바꿨다.
const databaseUrl =
  "https://script.google.com/macros/s/AKfycbzVzDaSDWE9hPnIxhUMQxWODcys-NAUwsTcSQRbl1cWeYcW9YkW9NPcTCnuJn6kcQeZtQ/exec";  
// 앱마다 바꾼다.
// 바꿨다.
const homepageUrl = "https://hero.ppnn.co.kr";

// 보여질 이름을 정한다.
// 바꿨다. 
// 공유할 때 사용한다.
// starDisplayName에서 gameDisplayName으로 바꾼다. 
// change.js와 slide.js에서 사용한다.
let gameDisplayName= "임영웅";

// change.js, slide.js, goods.js에서 공유와 관련된 변수를 설정한다.

// block과 slide 게임에서 사용하는 이미지다. 
// 구글스프레드시트를 사용해서 정한다.
// cordova에서는 ${googleSpreadUrl}/imgCordova로 정한다.
// change.js와 slide.js에서 사용한다. 
let imgArrUrl = `${googleSpreadUrl}/img`;
// 어떤 localStorage를 사용할 것인지 정한다.
// cordova에서는 imgCordovaData로 정한다.
let imgStorageName = "imgData"

let kakaoKey = "c90c4f7da2d40eba424f9473e9853df5";
/*  block game 효과 색깔이다. */
// heart 주위의 색깔이다.
// --main 색깔로 정한다.
// 연예인마다 바꾼다.
// 바꿨다. 
let effectColor = "#87cefa";

// youtube 주소다.
// 연예인마다 바꾼다. 
// 바꿨다. 
let youtubeUrlArr = ["toRGQ26Vyh8"];


