self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('CV').then(function(cache) {
     return cache.addAll([
       'index.html',
       'index.html?homescreen=1',
       '?homescreen=1',
       'manifest.json',
       'projects.html',
       'projects.html?homescreen=1',
       '?homescreen=1',
       'script.js',
       'style.css'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {

console.log(event.request.url);

event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

})
