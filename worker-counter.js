// Cloudflare Worker. KV binding: VIEW_KV; env var ALLOWED_ORIGIN = https://your-site.pages.dev
export default {async fetch(request, env) {
 const origin=request.headers.get('Origin')||''; const allowed=env.ALLOWED_ORIGIN||'';
 const headers={'Access-Control-Allow-Origin':allowed,'Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type','Vary':'Origin','Content-Type':'application/json','Cache-Control':'no-store'};
 if(origin!==allowed) return new Response('Forbidden',{status:403});
 if(request.method==='OPTIONS')return new Response(null,{headers});
 if(request.method!=='POST')return new Response('Method Not Allowed',{status:405,headers});
 const body=await request.json().catch(()=>({}));if(body.path!=='/')return new Response('Invalid path',{status:400,headers});
 // Cookie identifier: browser-based; not a perfect count of humans.
 const cookie=request.headers.get('Cookie')||'';const match=cookie.match(/(?:^|;\s*)dz_visit=([a-f0-9-]{36})/);
 const id=match?match[1]:crypto.randomUUID();
 const today=new Date().toISOString().slice(0,10);const key='visit:'+today+':'+id;
 let views=Number(await env.VIEW_KV.get('views')||0);
 if(!(await env.VIEW_KV.get(key))){await env.VIEW_KV.put(key,'1',{expirationTtl:86400});views+=1;await env.VIEW_KV.put('views',String(views));}
 headers['Set-Cookie']=`dz_visit=${id}; Path=/; Secure; SameSite=None; Max-Age=31536000`;
 return new Response(JSON.stringify({views}),{headers});
}};
