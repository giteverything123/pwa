'use strict';

self.addEventListener('fetch',function(event){
	if(/\.jpg$|\.png$/.test(event.request.url)){
		// if(event.request.headers.get('save-data')){
		// 	alert('save-data');
		// }
		var supportsWebp = false;
		if(event.request.headers.has('accept')){
			supportsWebp = event.request.headers.get('accept').includes('webp');
		}
		if(supportsWebp){
			console.log('支持webp');
			var req = event.request.clone();
			var returnUrl = req.url.substr(0,req.url.lastIndexOf('.')) + '.webp';
			event.respondWith(
				fetch(returnUrl,{mode: 'no-cors'})
			)
		}
	}
})