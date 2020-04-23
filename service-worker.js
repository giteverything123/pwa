var cacheName = 'latestNews-v10';
self.addEventListener('install', event => {
	console.log(self.skipWaiting)
	console.log('install 事件...')
	event.waitUntil(
		caches.open('cacheName').
		then(cache => {
			cache.add([
				'./index.css',
				'./second.html'
			])
		})
		.then(() => {
			self.skipWaiting()
		})
	);
});

self.addEventListener('activate', function(event){
	console.log('触发了activate事件....')
	event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch',function(event){
	if(/\.jpg$/.test(event.request.url)){
		console.log('hello6')
		event.respondWith(
			new Response('<p>this is a test</p>', {headers:{'Content-Type':'text/html'}}) 
			//fetch('./hua2.jpg')
		)
	}
})

// self.addEventListener('fetch', event => {
// 	event.respondWith(
// 		caches.match(event.request, {ignoreSearch: true})
// 		.then(function(response){
// 			if(response) {
// 				return response;
// 			}
// 			var requestToCache = event.request.clone();
// 			return fetch(requestToCache).then(
// 				function(response){
// 					if(!response || response.status !== 200) {
// 						return response;
// 					}
// 					var responseToCache = response.clone();
// 					caches.open(cacheName)
// 					.then(function(cache){
// 						cache.put(requestToCache, responseToCache);
// 					});
// 					return response;
// 				}
// 			)
// 		})
// 	)
// })