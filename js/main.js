function loadScript(e,t,r,l){let o=document.createElement("script");o.src=t,r&&(o.onload=r),l&&(o.type="module"),e||(e=!0),o.async=e,document.body.appendChild(o)}function loadScriptFile(e){let t=document.createElement("script");t.src=e.url,e.cb&&(t.onload=e.cb),e.module&&(t.type="module"),t[e.loadType]=!0,document.body.appendChild(t)}function query(e){return Array.from(document.querySelectorAll(e))}function addClass(e,t){for(let r=0;r<query(e).length;r++)if("object"==typeof t)for(let l=0;l<t.length;l++)query(e)[r].classList.add(t[l]);else query(e)[r].classList.add(t)}function removeClass(e,t){for(let r=0;r<query(e).length;r++)if("object"==typeof t)for(let l=0;l<t.length;l++)query(e)[r].classList.remove(t[l]);else query(e)[r].classList.remove(t)}function inArray(e,t){for(s=0;s<t.length;s++)if(thisEntry=t[s].toString(),thisEntry==e)return!0;return!1}function toggleClass(e,t){for(let r=0;r<query(e).length;r++)if("object"==typeof t)for(let l=0;l<t.length;l++)inArray(t[l],query(e)[r].classList)?removeClass(e,t[l]):addClass(e,t[l]);else inArray(t,query(e)[r].classList)?removeClass(e,t):addClass(e,t)}(()=>{const e=document.documentElement,t="user-color-scheme",r="data-theme",l=e=>{try{return localStorage.getItem(e)}catch(e){return null}},o=()=>{const t=getComputedStyle(e).getPropertyValue("--color-mode");return t.length?t.replace(/["'\s]/g,""):"dark"===t?"dark":"light"},n=()=>{e.removeAttribute(r),(e=>{try{localStorage.removeItem(e)}catch(e){}})(t)},c={dark:!0,light:!0},a=a=>{const s=a||l(t);s===o()?n():c[s]?e.setAttribute(r,s):n()},s={dark:"light",light:"dark"},d=()=>{var e=l(t);if(c[e])e=s[e];else{if(null!==e)return;e=s[o()]}return((e,t)=>{try{localStorage.setItem(e,t)}catch(e){}})(t,e),e};a(),document.onreadystatechange=function(){if("complete"==document.readyState){document.getElementById("btn-toggle-dark").addEventListener("click",(()=>{a(d())}))}}})();