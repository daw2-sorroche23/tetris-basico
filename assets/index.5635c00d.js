(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();var s=` 

<div class="container-fluid p-3">
<div class="row"> 
  <div class="col-12 d-flex justify-content-between">
    <a href="./editarPerfil.html"><img src="./imagen/user.png" alt="" class="avatar"></a>
  </div>
</div>
</div>
`,l=`
<div class="row">
<div class="col-12 text-center primary position-absolute bottom-50 end-0">
  <div class="text-center box-s">
    <h1>TETRIS</h1>
  </div>
  <div>
    <div class="m-3">
      <a href="./game.html"><button type="button" class="text-light btn btn-success w-25">JUGAR</button></a>
    </div>
    <div class="m-3">
      <a href="./login.html"><button type="button" class="btn btn-primary w-25">LOGIN</button></a>
    </div>
    <div class="m-3">
      <a href="./signIn.html"><button type="button" class="btn btn-secondary w-25">SIGN IN</button></a>
    </div>
  </div>
</div>
</div>
`;document.querySelector("#header").innerHTML=s;document.querySelector("#main").innerHTML=l;
