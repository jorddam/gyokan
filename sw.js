const C='gyokan-v2',D='gyokan-dict-1';
const BIG=/\.bin$|kuromoji\.js$/; // dictionary files rarely change: keep them in their own cache and serve from it
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./'])));self.skipWaiting();});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('gyokan-')&&k!==C&&k!==D).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const big=BIG.test(new URL(e.request.url).pathname);
  const save=r=>{if(r.ok){const cp=r.clone();caches.open(big?D:C).then(c=>c.put(e.request,cp));}return r;};
  if(big){e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(save)));return;}
  e.respondWith(fetch(e.request).then(save).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('./'))));});
