import{a as l}from"./assets/vendor-B2YOV0tR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const f=document.querySelector("#search-form"),n=document.querySelector("#breed-input"),u=document.querySelector("#breeds-list"),a=document.querySelector("#loader"),d=document.querySelector("#cat-card");f.addEventListener("submit",h);m();function m(){l("https://api.thecatapi.com/v1/breeds").then(r=>{console.log(r.data),u.insertAdjacentHTML("beforeend",p(r.data))}).catch(r=>{console.log(r)})}function p(r){return r.map(({id:o,name:c})=>`
    <option value="${c}" data-id="${o}"></option>
  `).join("")}function h(r){r.preventDefault();const o=n.value,c=[...u.children].find(e=>o.toLowerCase().trim()===e.value.toLowerCase());if(!c){alert("Select!!");return}const s=c.dataset.id;a.classList.remove("hidden"),l(`https://api.thecatapi.com/v1/images/search?breed_ids=${s}`).then(({data:e})=>{if(e.length>0){const t=e[0].url;d.innerHTML=`
          <div class="card">
            <img class="card-image" src="${t}" alt="${o}" />
            <div class="card-body">
              <h2 class="car-title">${o}</h2>
            </div>
          </div>
        `}else d.innerHTML='<p class="error-text">Error!</p>'}).catch(e=>{console.log(e)}).finally(()=>{a.classList.add("hidden"),n.value=""})}
//# sourceMappingURL=index.js.map
