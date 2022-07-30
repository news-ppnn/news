// 캐시 이름을 정한다. 
// sw.js에서는 localSstorage가 안 된다.
// 캐시할 것이 있다면 이름을 다르게 정한다.
let cacheName = "220407"
let cacheArr = [];
// 연예인마다 주소를 바꾼다.
// 바꿨다. 
let cacheUrl = "https://opensheet.elk.sh/1Dc7o0XamPd_0in-83rAwN2vs7RadxKab_Z1mx4l7g90/cache"
// 캐시 크기를 줄이는 코드다. 
function limitCacheSize(name, size){
    caches.open(name).then(cache=>{
        cache.keys().then(keys=>{
            if(keys.length > size){
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        });
    });
}
// json파일에 있는 것을 캐시한다.
// 겹치는 파일을 넣으면 안 된다.
async function cacheJson(url) {
  let res = await fetch(url);
  let cacheData = await res.json();
  cacheData.forEach((data) => {
    cacheArr.push(data.src);
  });
  // cacheName 캐시를 만들고 addAll로 cacheArr에 추가한다.
  let cache = await caches.open(cacheName);
  return cache.addAll(cacheArr);
}

self.addEventListener("install", (e) => {
  // waitUntil로 기다린다.
  // 게임을 다 만들고 e.waitUntil 함수를 호출한다.
  e.waitUntil(cacheJson(cacheUrl));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    // 정한 캐시 말고 나머지는 지운다.
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== cacheName).map((key) => caches.delete(key))
      );
    })
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((result) => {
      return result || fetch(e.request);
    }).catch(()=>{
        // .html이 있다면 
        if(e.request.url.indexOf('.html') > -1){
            return caches.match("/")
        }        
    })
  );
});