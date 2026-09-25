javascript:(()=>{window.__BAO?.stop?.();const B=window.blacket;if(!B?.packs||!B?.blooks||!B?.requests){alert("Open Blacket Market first.");return}const X={on:1,stop(){this.on=0;document.getElementById("__bao")?.remove();document.getElementById("__bao_css")?.remove()}};window.__BAO=X;const E=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));const N=s=>String(s??"").toLowerCase().replace(/[^a-z0-9]/g,"");const abs=u=>{try{return new URL(u,location.href).href}catch{return u}};

function imageFromObject(o){if(!o)return"";if(typeof o==="string")return/^(https?:|data:|blob:)|\.(png|jpg|jpeg|gif|webp|svg)(\?|$)/i.test(o)?abs(o):"";if(typeof o!=="object")return"";for(const x of[o.img,o.image,o.icon,o.sprite,o.src,o.url,o.imageUrl,o.image_url,o.thumbnail,o.thumbnailUrl,o.avatar,o.asset,o.path,o.images?.big,o.images?.small,o.images?.default]){const u=imageFromObject(x);if(u)return u}return""}

function buildImages(){const out={},all=B.blooks||{},entries=Array.isArray(all)?all.map((v,i)=>[i,v]):Object.entries(all);for(const[k,v]of entries){const im=imageFromObject(v);if(!im)continue;for(const n of[k,v?.name,v?.id,v?.key,v?.blook,v?.blookName].filter(Boolean))out[N(n)]=im}return out}

const IMG=buildImages();

function getImg(name){const key=N(name);if(IMG[key])return IMG[key];const d=imageFromObject(B.blooks[name]);if(d)return d;for(const k of Object.keys(IMG))if(k.includes(key)||key.includes(k))return IMG[k];const hit=[...document.images].find(i=>N(i.alt||i.title||"")==key||N(i.parentElement?.innerText||"").includes(key));return hit?.src||""}

function rarity(name){return B.blooks[name]?.rarity||"Common"}
function color(r){return B.rarities?.[r]?.color||"#aeb8c5"}

function packImg(k){const p=B.packs[k]||{},u=imageFromObject(p);if(u)return u;const key=N(p.name||k),i=[...document.images].find(x=>N(x.alt||x.title||x.parentElement?.innerText||"").includes(key));return i?.src||""}

const css=document.createElement("style");
css.id="__bao_css";
css.textContent=`
#__bao{
position:fixed;
inset:0;
z-index:2147483647;
background:rgba(4,8,13,.78);
backdrop-filter:blur(5px);
display:flex;
align-items:center;
justify-content:center;
font-family:Arial,Helvetica,sans-serif;
color:#e9edf2
}
#__bao *{box-sizing:border-box}

.bao{
width:min(720px,94vw);
max-height:88vh;
background:#10161d;
border:1px solid #263340;
border-radius:10px;
box-shadow:0 25px 90px rgba(0,0,0,.7);
display:flex;
flex-direction:column;
overflow:hidden
}

.top{
background:#151d25;
border-bottom:1px solid #293641;
padding:8px 13px;
text-align:center
}

.made{
font-size:10px;
font-weight:800;
color:#6f8293;
letter-spacing:.4px
}

.head{
padding:12px 15px;
background:#121a22;
border-bottom:1px solid #293641;
display:flex;
justify-content:space-between;
align-items:center
}

.title{
font-size:16px;
font-weight:800;
color:#f1f4f7
}

.sub{
font-size:9px;
color:#788897;
margin-top:2px
}

.close{
border:0;
background:#202b35;
color:#aab6c1;
border-radius:6px;
width:29px;
height:29px;
font-size:17px;
cursor:pointer
}

.close:hover{
background:#2b3945;
color:white
}

.body{
padding:13px;
overflow:auto
}

.label{
font-size:9px;
text-transform:uppercase;
color:#718392;
font-weight:800;
letter-spacing:.8px;
margin-bottom:7px
}

.packs{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:7px
}

.pack{
height:104px;
background:#151d25;
border:1px solid #293641;
border-radius:7px;
padding:7px;
cursor:pointer;
position:relative;
transition:.12s
}

.pack:hover{
border-color:#4c6a83;
background:#19232d
}

.pack.sel{
border:2px solid #4b8bc4;
background:#182633;
box-shadow:0 0 14px rgba(65,137,199,.15)
}

.check{
display:none;
position:absolute;
right:5px;
top:5px;
background:#4385bd;
border-radius:50%;
width:17px;
height:17px;
text-align:center;
font-size:10px;
font-weight:900;
line-height:17px
}

.pack.sel .check{display:block}

.pimg{
height:56px;
display:flex;
justify-content:center;
align-items:center
}

.pimg img{
max-width:62px;
max-height:53px;
object-fit:contain
}

.pname{
text-align:center;
font-size:9px;
font-weight:700;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
color:#d8e0e7
}

.price{
text-align:center;
color:#71808d;
font-size:8px;
margin-top:2px
}

.stats{
display:flex;
gap:7px;
margin-top:9px
}

.stat{
flex:1;
background:#131b23;
border:1px solid #293641;
border-radius:6px;
padding:7px
}

.sl{
font-size:7px;
color:#6f7f8d;
text-transform:uppercase
}

.sv{
font-size:10px;
font-weight:800;
margin-top:2px;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis
}

.progress{
height:5px;
background:#222d37;
border-radius:4px;
overflow:hidden;
margin-top:10px
}

.bar{
height:100%;
width:0;
background:#4b8bc4;
transition:.15s
}

.current{
display:none;
text-align:center;
background:#131b23;
border:1px solid #293641;
border-radius:7px;
margin-top:11px;
padding:10px
}

.current img{
width:100px;
height:100px;
object-fit:contain
}

.curName{
font-size:14px;
font-weight:800;
margin-top:2px
}

.curRare{
font-size:9px;
margin-top:2px
}

.rt{
font-size:9px;
text-transform:uppercase;
color:#718392;
font-weight:800;
margin:11px 0 6px
}

.results{
display:grid;
grid-template-columns:repeat(6,1fr);
gap:6px
}

.result{
position:relative;
background:#131b23;
border:1px solid #293641;
border-radius:6px;
padding:5px;
text-align:center
}

.result img{
width:47px;
height:47px;
object-fit:contain
}

.ph{
width:47px;
height:47px;
margin:auto;
display:flex;
align-items:center;
justify-content:center;
color:#53616e;
font-size:18px
}

.rn{
font-size:7px;
font-weight:700;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis
}

.rr{
font-size:7px;
margin-top:1px
}

.cnt{
position:absolute;
right:3px;
top:3px;
background:#3f79aa;
border-radius:7px;
padding:1px 4px;
font-size:7px;
font-weight:900
}

.bottom{
border-top:1px solid #293641;
padding:10px 13px;
display:flex;
gap:7px;
align-items:center;
background:#121a22
}

.chosen{
flex:1;
min-width:100px
}

.cs{
font-size:7px;
color:#718392;
text-transform:uppercase
}

.cn{
font-size:10px;
font-weight:800;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis
}

.amount{
width:72px;
height:29px;
background:#0e141a;
border:1px solid #34434f;
border-radius:5px;
color:#fff;
padding:0 7px;
font-size:9px;
font-weight:700;
outline:none
}

.amount:focus{
border-color:#4b8bc4
}

.qty{
display:flex;
gap:3px
}

.qty button{
border:1px solid #303e49;
background:#182129;
color:#8997a4;
border-radius:5px;
padding:6px 7px;
font-size:8px;
font-weight:800;
cursor:pointer
}

.qty button:hover{
background:#202d38;
color:white
}

.qty button.on{
background:#3d78a8;
border-color:#4b8bc4;
color:white
}

.open{
border:1px solid #4b8bc4;
background:#3e7cad;
color:#fff;
border-radius:5px;
padding:8px 14px;
font-weight:800;
font-size:9px;
cursor:pointer
}

.open:hover{
background:#4a8dc0
}

.open:disabled{
opacity:.4;
cursor:not-allowed
}

.stop{
border:1px solid #75484b;
background:#332024;
color:#d58c91;
border-radius:5px;
padding:8px 10px;
font-weight:800;
font-size:9px;
cursor:pointer
}

@media(max-width:650px){
.packs{grid-template-columns:repeat(3,1fr)}
.results{grid-template-columns:repeat(4,1fr)}
.qty{display:none}
.amount{width:65px}
}
`;

document.head.appendChild(css);

const o=document.createElement("div");
o.id="__bao";

o.innerHTML=`
<div class="bao">

<div class="top">
<div class="made">made by ray</div>
</div>

<div class="head">
<div>
<div class="title">Pack Opener</div>
<div class="sub">Select a pack and choose how many to open</div>
</div>
<button class="close">×</button>
</div>

<div class="body">

<div class="label">Select Pack</div>

<div class="packs" id="packs"></div>

<div class="stats">

<div class="stat">
<div class="sl">Pack</div>
<div class="sv" id="pn">None</div>
</div>

<div class="stat">
<div class="sl">Price</div>
<div class="sv" id="pp">—</div>
</div>

<div class="stat">
<div class="sl">Coins</div>
<div class="sv" id="coins">—</div>
</div>

</div>

<div id="prog"></div>

<div class="current" id="current"></div>

<div id="out"></div>

</div>

<div class="bottom">

<div class="chosen">
<div class="cs">Selected</div>
<div class="cn" id="chosen">Select a pack</div>
</div>

<input
id="amount"
class="amount"
type="number"
min="1"
max="9999"
placeholder="Amount"
/>

<div class="qty">
<button data-q="1" class="on">1</button>
<button data-q="10">10</button>
<button data-q="25">25</button>
<button data-q="50">50</button>
<button data-q="max">MAX</button>
</div>

<button class="open" id="open" disabled>OPEN</button>

</div>

</div>
`;

document.body.appendChild(o);

let selected=null;
let qty=1;
let results={};

const pc=o.querySelector("#packs");
const open=o.querySelector("#open");
const amount=o.querySelector("#amount");

function updateCoins(){
const n=Number(B.user?.tokens??B.user?.coins);
if(Number.isFinite(n))
o.querySelector("#coins").textContent=n.toLocaleString();
}

updateCoins();

Object.keys(B.packs).forEach(k=>{

const p=B.packs[k];
const im=packImg(k);

const e=document.createElement("div");

e.className="pack";

e.innerHTML=`
<div class="check">✓</div>
<div class="pimg">
${im?`<img src="${E(im)}">`:"📦"}
</div>
<div class="pname">${E(p.name||k)}</div>
<div class="price">${Number(p.price||0).toLocaleString()} coins</div>
`;

e.onclick=()=>{

pc.querySelectorAll(".pack").forEach(x=>x.classList.remove("sel"));

e.classList.add("sel");

selected=k;

o.querySelector("#pn").textContent=p.name||k;
o.querySelector("#chosen").textContent=p.name||k;
o.querySelector("#pp").textContent=Number(p.price||0).toLocaleString()+" coins";

open.disabled=false;

};

pc.appendChild(e);

});

o.querySelectorAll(".qty button").forEach(b=>{

b.onclick=()=>{

o.querySelectorAll(".qty button").forEach(x=>x.classList.remove("on"));

b.classList.add("on");

qty=b.dataset.q==="max"?"max":Number(b.dataset.q);

if(b.dataset.q!=="max"){
amount.value=b.dataset.q;
}

};

});

amount.addEventListener("input",()=>{

if(amount.value){
o.querySelectorAll(".qty button").forEach(x=>x.classList.remove("on"));
qty=Math.max(1,Math.floor(Number(amount.value)||1));
}

});

function render(){

const arr=Object.values(results);

const total=arr.reduce((a,x)=>a+x.count,0);

o.querySelector("#out").innerHTML=`

<div class="rt">Results — ${total} opened</div>

<div class="results">

${arr.map(x=>`

<div class="result">

${
x.img
?
`<img src="${E(x.img)}"
onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
<div class="ph" style="display:none">◈</div>`
:
`<div class="ph">◈</div>`
}

${x.count>1?`<div class="cnt">×${x.count}</div>`:""}

<div class="rn">${E(x.name)}</div>

<div class="rr" style="color:${E(color(x.rarity))}">
${E(x.rarity)}
</div>

</div>

`).join("")}

</div>

`;

}

function show(name){

if(!name)return;

const img=getImg(name);
const r=rarity(name);
const c=color(r);

const cur=o.querySelector("#current");

cur.style.display="block";

cur.innerHTML=`

${
img
?
`<img src="${E(img)}"
onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
:
""
}

<div style="
height:100px;
display:${img?"none":"flex"};
align-items:center;
justify-content:center;
font-size:35px;
color:#53616e
">◈</div>

<div class="curName">${E(name)}</div>

<div class="curRare" style="color:${E(c)}">
${E(r)}
</div>

`;

if(!results[name])
results[name]={
name,
count:0,
img,
rarity:r
};

results[name].count++;

render();

}

function requestOpen(pack){

return new Promise((resolve,reject)=>{

let done=false;

const finish=(value,error)=>{

if(done)return;

if(typeof value==="string"&&value.trim()){

done=true;
resolve(value.trim());

}else if(value?.blook){

done=true;
resolve(value.blook);

}else if(error){

done=true;
reject(error);

}

};

try{

B.requests.post(
"/worker3/open",
{pack},
data=>{

if(data?.error)
finish(null,data.error);
else
finish(data?.blook??data);

});

}catch(e){

reject(e);

}

setTimeout(()=>{

if(!done)
reject("timeout");

},7000);

});

}

async function run(){

if(!selected)return;

open.disabled=true;
open.textContent="OPENING";

results={};

o.querySelector("#out").innerHTML="";

const p=B.packs[selected];

const price=Number(p.price||0);

const bal=Number(
B.user?.tokens??
B.user?.coins??
0
);

let total;

if(qty==="max"){

total=price?
Math.floor(bal/price):
1;

}else{

total=Number(amount.value)||qty;

}

total=Math.max(1,Math.floor(total));

if(price&&bal<price){

alert("Not enough coins.");

open.disabled=false;
open.textContent="OPEN";

return;

}

if(price&&total>Math.floor(bal/price)){

total=Math.floor(bal/price);

}

if(total<1){

alert("Not enough coins.");

open.disabled=false;
open.textContent="OPEN";

return;

}

o.querySelector("#prog").innerHTML=`

<div style="
display:flex;
justify-content:space-between;
font-size:8px;
color:#718392;
margin-top:9px
">

<span>Opening ${E(p.name||selected)}</span>

<span id="pc">0 / ${total}</span>

</div>

<div class="progress">

<div class="bar" id="bar"></div>

</div>

`;

let completed=0;
let attempts=0;

while(completed<total&&X.on){

attempts++;

if(attempts>total*5){

alert(
"Blacket stopped returning results. "+
completed+
" of "+
total+
" openings were confirmed."
);

break;

}

let name=null;

try{

name=await requestOpen(selected);

}catch(e){

await new Promise(r=>setTimeout(r,800));

continue;

}

if(!name)
continue;

show(name);

completed++;

const pc2=o.querySelector("#pc");
const bar=o.querySelector("#bar");

if(pc2)
pc2.textContent=`${completed} / ${total}`;

if(bar)
bar.style.width=(completed/total*100)+"%";

updateCoins();

await new Promise(r=>setTimeout(r,400));

}

open.disabled=false;

open.textContent=
completed===total?
"OPEN AGAIN":
"RETRY";

}

open.onclick=run;

o.querySelector(".close").onclick=()=>X.stop();

})();
