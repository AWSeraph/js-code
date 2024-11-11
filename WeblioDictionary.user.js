// ==UserScript==
// @name     Weblio Dictionary
// @version  1
// @include  /ncode\.syosetu\.com\/n\d[^\/]+\/\d+/
// @grant    none
// ==/UserScript==

let api = 'https://api.weblio.jp/act/quote/v_1_0?q=';
let mouX = 0;
let mouY = 0;
let inDiv = false;

document.onmousemove = (e) =>{
  mouX = e.layerX;
  mouY = e.layerY;
}

window.onkeyup = (e) =>{
  if(e.key != 'Control') return;
  
  let selText = window.getSelection().toString();
  if(!selText || selText.length <= 0) return;
  
  let DIV = document.createElement('div');
  
  DIV.innerHTML = `<div style="width: 315px; height: 222px; position: absolute; z-index: 2147483647; left: ${mouX}px; top: ${mouY}px;">
<iframe src="${api}${selText}" width="320" height="240" border="0" style="background-color: white;"></iframe>
</div>`
  DIV.onmouseenter = () => inDiv = true;
  DIV.onmouseout = () => inDiv = false;
  document.onmouseup = () => {if(!inDiv) DIV.remove();}
  
  document.body.appendChild(DIV);
}
