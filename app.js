const CATS={sight:{label:"Sights",color:"#c0392b"},eat:{label:"Food & drink",color:"#d68910"},club:{label:"Clubs",color:"#7d3c98"},stay:{label:"Where to stay",color:"#1f7a5c"}};
const $=id=>document.getElementById(id);
const map=L.map("map").setView([50.0875,14.4213],13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"© OpenStreetMap contributors"}).addTo(map);
const on=new Set(Object.keys(CATS)),mk={};let q="",sel=null;
PLACES.forEach(p=>{mk[p.id]=L.circleMarker([p.lat,p.lng],{radius:8,color:"#fff",weight:2,fillColor:CATS[p.cat].color,fillOpacity:.95}).bindTooltip(p.name).on("click",()=>select(p.id,false));});
const vis=p=>on.has(p.cat)&&(!q||(p.name+" "+p.summary).toLowerCase().includes(q));
function render(){
  $("filters").innerHTML=Object.keys(CATS).map(k=>`<button class="chip${on.has(k)?"":" off"}" data-k="${k}"><i style="background:${CATS[k].color}"></i>${CATS[k].label}</button>`).join("");
  $("list").innerHTML=Object.keys(CATS).map(k=>{const r=PLACES.filter(p=>p.cat===k&&vis(p));
    return r.length?`<div class="grp">${CATS[k].label}</div>`+r.map(p=>`<div class="row${p.id===sel?" on":""}" data-id="${p.id}"><i style="background:${CATS[k].color}"></i><div><b>${p.name}</b><span>${p.summary}</span></div></div>`).join(""):"";}).join("");
  PLACES.forEach(p=>{const m=mk[p.id];vis(p)?m.addTo(map):m.remove();m.setStyle({radius:p.id===sel?12:8});});
}
function select(id,fly=true){
  const p=PLACES.find(x=>x.id===id);if(!p)return;sel=id;history.replaceState(null,"","#"+id);
  const d=$("detail"),links=[];
  if(p.wiki)links.push(`<a href="${p.wiki}" target="_blank" rel="noopener">Wikipedia ↗</a>`);
  links.push(`<a href="https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}" target="_blank" rel="noopener">Google Maps ↗</a>`);
  if(p.website)links.push(`<a href="${p.website}" target="_blank" rel="noopener">Website ↗</a>`);
  d.hidden=false;
  d.innerHTML=`<span class="tag" style="color:${CATS[p.cat].color}">${CATS[p.cat].label}</span><h2>${p.name}</h2><p>${p.summary}</p>`+
    (p.details?p.details.split("\n\n").map(t=>`<p>${t}</p>`).join(""):"")+(p.cost?`<p class="cost">${p.cost}</p>`:"")+`<p class="links">${links.join("")}</p>`;
  render();$("side").scrollTop=0;
  if(fly)map.flyTo([p.lat,p.lng],Math.max(map.getZoom(),15),{duration:.6});
}
$("filters").onclick=e=>{const b=e.target.closest("[data-k]");if(!b)return;on.has(b.dataset.k)?on.delete(b.dataset.k):on.add(b.dataset.k);render();};
$("list").onclick=e=>{const r=e.target.closest("[data-id]");if(r)select(r.dataset.id);};
$("q").oninput=e=>{q=e.target.value.toLowerCase();render();};
render();
if(location.hash)select(location.hash.slice(1));
