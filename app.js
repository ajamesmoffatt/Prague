// To flesh out an entry, fill in "details" (separate paragraphs with a blank line, i.e. \n\n), "cost", "website" or "wiki".
// cat is one of: sight, eat, club, stay. Coordinates are approximate: right-click a spot in Google Maps to copy exact ones.
const W="https://en.wikipedia.org/wiki/";
const PLACES=[
{id:"strahov",name:"Strahov Monastery",cat:"sight",lat:50.0865,lng:14.3877,summary:"Some of the most beautiful libraries in the world, plus great gardens for a pic. The huge Strahov stadium (site of the Spartakiády) is nearby.",details:"",cost:"",wiki:W+"Strahov_Monastery"},
{id:"petrin",name:"Petřín Tower",cat:"sight",lat:50.0833,lng:14.3953,summary:"Smaller-scale Eiffel Tower with good views, relatively cheap. Nice park below next to the Hunger Wall (which James helped restore in 2017).",details:"",cost:"",wiki:W+"Petřín_Lookout_Tower"},
{id:"cernin",name:"Černín Palace",cat:"sight",lat:50.0893,lng:14.3898,summary:"Foreign Ministry; the courtyard is where Jan Masaryk ‘fell’ in the Fourth Defenestration. Gardens are free but weekends only.",details:"",cost:"",wiki:W+"Černín_Palace"},
{id:"loreto",name:"Loreto",cat:"sight",lat:50.0897,lng:14.3912,summary:"Pilgrimage site with a lovely church, opposite the Foreign Ministry.",details:"",cost:"About £10",wiki:W+"Loreto,_Prague"},
{id:"hradcanske",name:"Hradčany Square galleries",cat:"sight",lat:50.0903,lng:14.3975,summary:"Schwarzenberg Palace (good art, heavy student discount), Šternberk Palace (National Gallery), Lobkowicz Palace (audio tour narrated by the head of the family).",details:"",cost:"",wiki:""},
{id:"castle",name:"Prague Castle",cat:"sight",lat:50.0909,lng:14.4005,summary:"Courtyards and gardens are free, and the gardens have great views. Tickets for St Vitus’, the Old Palace (recommended), St George’s and Golden Lane (touristy, but Kafka and Seifert lived there).",details:"",cost:"",wiki:W+"Prague_Castle"},
{id:"letna",name:"Letná & the Metronome",cat:"sight",lat:50.0963,lng:14.4244,summary:"English gardens and deer parks. The Summer Palace has a lesser-known panorama. The Metronome stands where the world’s largest Stalin statue used to be; nice lunch spot.",details:"",cost:"",wiki:W+"Letná"},
{id:"wallenstein",name:"Wallenstein Garden",cat:"sight",lat:50.0906,lng:14.4083,summary:"Home of the Czech Senate, with the Dripstone Wall of grotesque dripping skulls. Open April–October. Liechtenstein and Fürstenberg gardens are nearby.",details:"",cost:"",wiki:W+"Wallenstein_Palace"},
{id:"nicholas",name:"Malostranské náměstí & St Nicholas",cat:"sight",lat:50.0879,lng:14.4036,summary:"Beautiful square; the high-baroque church is very photographable.",details:"",cost:"About £2 students, £3.50 adults",wiki:W+"St._Nicholas_Church,_Malá_Strana"},
{id:"kampa",name:"Kampa & Lennon Wall",cat:"sight",lat:50.0862,lng:14.4075,summary:"Classic Lennon Wall, river and Charles Bridge views, Werich Villa, Museum Kampa, Karel Zeman Museum. Muskrats on the river (not unfriendly!) and summer pedalos.",details:"",cost:"Pedalos about £10 an hour",wiki:W+"Lennon_Wall"},
{id:"charles",name:"Charles Bridge & Lesser Town Tower",cat:"sight",lat:50.0865,lng:14.4114,summary:"The Lesser Town Bridge Tower is less visited than the other towers, and the guides are chattier.",details:"",cost:"",wiki:W+"Charles_Bridge"},
{id:"communism-memorial",name:"Memorial to the Victims of Communism",cat:"sight",lat:50.0818,lng:14.4046,summary:"Just past Legion Bridge; the one you see in every photo about the communist era.",details:"",cost:"",wiki:W+"Memorial_to_the_Victims_of_Communism"},
{id:"klementinum",name:"Klementinum",cat:"sight",lat:50.0864,lng:14.4157,summary:"World-renowned. A tower and a brief look at the baroque library. Good but pedestrian.",details:"",cost:"About £10, roughly an hour",wiki:W+"Klementinum"},
{id:"rudolfinum",name:"Rudolfinum",cat:"sight",lat:50.0894,lng:14.4165,summary:"Famous concert hall that often hosts a free modern art gallery.",details:"",cost:"",wiki:W+"Rudolfinum"},
{id:"national-theatre",name:"National Theatre",cat:"sight",lat:50.0812,lng:14.4137,summary:"Worth seeing something here, if only to look cultural. The Magic Lantern next door, where the Velvet Revolution was orchestrated, now stages the experimental work. Round the corner on Spálená, Knihkupectví Spálená 53 is one of the best bookshops going: cheap books and nice prints.",details:"",cost:"",wiki:W+"National_Theatre_(Prague)"},
{id:"old-town-square",name:"Old Town Square",cat:"sight",lat:50.0875,lng:14.4213,summary:"Orloj on the hour, Old Town Hall tours (good, a bit expensive), the Hus statue and the Marian Column (re-erected 2020), Kinsky Palace (where Gottwald declared the 1948 coup; now a gallery), Týn Church (Tycho Brahe is buried here; free to enter) and, behind it, St James the Greater with its mummified arm.",details:"",cost:"",wiki:W+"Old_Town_Square"},
{id:"bethlehem",name:"Bethlehem Chapel",cat:"sight",lat:50.0847,lng:14.4176,summary:"Where Jan Hus preached (though the building was only rebuilt in the 1950s).",details:"",cost:"60kč",wiki:W+"Bethlehem_Chapel"},
{id:"jewish",name:"Old Jewish Cemetery & Old-New Synagogue",cat:"sight",lat:50.0900,lng:14.4176,summary:"Where the legend of the Golem and Rabbi Loew comes from.",details:"",cost:"",wiki:W+"Old_Jewish_Cemetery,_Prague"},
{id:"powder-tower",name:"Powder Tower & Celetná",cat:"sight",lat:50.0875,lng:14.4275,summary:"Follow Celetná from Týn Church; the Charles University Bookshop is on the way.",details:"",cost:"",wiki:W+"Powder_Tower"},
{id:"communism-museum",name:"Museum of Communism",cat:"sight",lat:50.0854,lng:14.4286,summary:"Expensive and very American POV: propaganda-driven, with no positives about life under communism, but still interesting and funny to see how an outsider sees things.",details:"",cost:"About 380kč (290kč students), 2.5 hrs",wiki:W+"Museum_of_Communism"},
{id:"national-museum",name:"National Museum",cat:"sight",lat:50.0791,lng:14.4310,summary:"Nationalist history but impressive, and recently renovated. Lučerna Palace is round the corner.",details:"",cost:"200kč students, 300kč adults",wiki:W+"National_Museum_(Prague)"},
{id:"photobooth-novaku",name:"Vintage photo booth – Dům U Nováků",cat:"sight",lat:50.0795,lng:14.4235,summary:"A vintage photo booth at Vodičkova (Dům U Nováků).",details:"There’s a second one at the Karlín Barracks (see the next entry).",cost:"100kč / about £4",wiki:""},
{id:"photobooth-karlin",name:"Vintage photo booth – Karlín Barracks",cat:"sight",lat:50.0930,lng:14.4480,summary:"A vintage photo booth at the Karlín Barracks. Pin is approximate.",details:"There’s another at Dům U Nováků on Vodičkova.",cost:"100kč / about £4",wiki:""},
{id:"vysehrad",name:"Vyšehrad",cat:"sight",lat:50.0645,lng:14.4195,summary:"Legendary birthplace of Prague thanks to Libuše. The fortress has lots of old buildings, and the cemetery is where all the famous Czechs are buried (see how many you know). A bit of a hike; a few beer gardens, but windy and chilly outside summer.",details:"",cost:"",wiki:W+"Vyšehrad"},
{id:"olsany",name:"Olšany Cemetery",cat:"sight",lat:50.0828,lng:14.4545,summary:"Atmospheric and well worth it. James once visited with the then-head of the Czech National Trust and they found a mass grave of dissidents she knew.",details:"",cost:"",wiki:W+"Olšany_Cemetery"},
{id:"namesti-miru",name:"Náměstí Míru",cat:"sight",lat:50.0752,lng:14.4377,summary:"The black gothic St Ludmila’s Church, in a quickly gentrifying area. Good food nearby, and a Christmas market that’s more for locals.",details:"",cost:"",wiki:W+"Náměstí_Míru"},
{id:"grebovka",name:"Grébovka",cat:"sight",lat:50.0679,lng:14.4486,summary:"Baroque park with beautiful grottos and vineyards, best in summer and early autumn.",details:"",cost:"",wiki:W+"Havlíčkovy_sady"},
{id:"strahov-brewery",name:"Klášterní pivovar Strahov",cat:"eat",lat:50.0866,lng:14.3886,summary:"The monastery’s own brewery and café: monk-brewed beer, big copper brewing kit and traditional Czech food. A nice bierkeller experience, not too expensive.",details:"",cost:"",wiki:""},
{id:"zavesenyho",name:"U zavěšenýho kafe",cat:"eat",lat:50.0895,lng:14.3905,summary:"Avant-garde café and pub on Loretánská, filled with memorabilia (posters, busts etc).",details:"",cost:"",wiki:""},
{id:"pstrosu",name:"U Tří Pštrosů",cat:"eat",lat:50.0866,lng:14.4107,summary:"Slightly expensive but really nice food, at the foot of the Lesser Town Bridge Tower.",details:"",cost:"",wiki:""},
{id:"tygra",name:"U Zlatého tygra",cat:"eat",lat:50.0848,lng:14.4168,summary:"Famous for the photo of Havel, Madeleine Albright and Bill Clinton drinking here, so pricier. On Husova.",details:"",cost:"",wiki:""},
{id:"pinkasu",name:"U Pinkasů",cat:"eat",lat:50.0827,lng:14.4249,summary:"Next to Můstek. Good courtyard for summer; somewhat touristy and expensive.",details:"",cost:"",wiki:""},
{id:"kozlovna",name:"Kozlovna Lidická",cat:"eat",lat:50.0705,lng:14.4045,summary:"Trendy restaurant near Anděl with good veggie and meat options. A trek unless you’re in the area.",details:"",cost:"",wiki:""},
{id:"manifesto",name:"Manifesto Anděl",cat:"eat",lat:50.0722,lng:14.4028,summary:"Co-operative of food and drink places in Smíchov; only recently established and already well known.",details:"",cost:"",wiki:""},
{id:"usudu",name:"U Sudu wine bar",cat:"eat",lat:50.0786,lng:14.4210,summary:"Trendy underground bar on Vodičkova with a studenty atmosphere: go down the stairs on the right to find a series of cellars. Noisy, but friendly.",details:"",cost:"Cash only (EUR and CZK)",wiki:""},
{id:"fred-ginger",name:"Fred & Ginger Bar (Dancing House)",cat:"eat",lat:50.0754,lng:14.4141,summary:"An absolute must: a very small, not-too-well-known bar at the top of the Dancing House. Pay for the viewing platform or simply buy a drink. Expensive for Czech prices, but worth it for the view and the experience.",details:"",cost:"150kč for the platform",wiki:W+"Dancing_House"},
{id:"popocafepetl",name:"Popocafepetl",cat:"eat",lat:50.0856,lng:14.4196,summary:"Very studenty bar/club in the centre of Old Town on Michalská: cheap drinks, good for meeting people. Round the corner, Durty Nelly’s is an Irish bar with karaoke, mostly British people and expensive drinks.",details:"",cost:"Cash only",wiki:""},
{id:"anonymous",name:"Anonymous Bar",cat:"eat",lat:50.0860,lng:14.4192,summary:"Opposite Popocafepetl. Indie bar with decent cocktails and less lowbrow-touristy vibes, but quite exclusive, so reserve a table.",details:"",cost:"",wiki:""},
{id:"bokovka",name:"Bokovka",cat:"eat",lat:50.0896,lng:14.4256,summary:"Wine bar on Dlouhá with a wonderful, upmarket wine-cellar environment.",details:"",cost:"",wiki:""},
{id:"louvre",name:"Café Louvre",cat:"eat",lat:50.0811,lng:14.4190,summary:"Classic café culture, pretty cheap for its notoriety (Einstein, Kafka and Madeleine Albright all went). Perennially busy, especially when it’s raining.",details:"",cost:"",wiki:""},
{id:"slavia",name:"Café Slávia",cat:"eat",lat:50.0806,lng:14.4132,summary:"By the river next to the National Theatre. Less touristy and a historic meeting place for revolutionaries and intellectuals.",details:"",cost:"",wiki:W+"Café_Slavia"},
{id:"paris",name:"Café Paris",cat:"eat",lat:50.0881,lng:14.4284,summary:"Part of Hotel Paris, near the Museum of Communism. Moderately expensive but decent breakfast, and prices are capped at a reasonable level. The Eggs Royale is superb.",details:"",cost:"Eggs Royale about 330kč",wiki:""},
{id:"artic",name:"Artic Bakehouse",cat:"eat",lat:50.0825,lng:14.4055,summary:"On Újezd by the communist victims memorial (it may be a chain with multiple shops). Probably the best bakery in Prague: reasonable prices and you get a lot.",details:"",cost:"",wiki:""},
{id:"bakeshop",name:"Bakeshop Praha",cat:"eat",lat:50.0890,lng:14.4228,summary:"On V Kolkovně, close to Old Town: a nice array of pastries and chlebíčky.",details:"",cost:"",wiki:""},
{id:"lucerna",name:"Lucerna Music Bar",cat:"club",lat:50.0815,lng:14.4252,summary:"Traditional spot for live bands. The palace was built by Václav Havel’s grandfather and has an interesting statue.",details:"",cost:"",wiki:W+"Lucerna_Palace"},
{id:"klub007",name:"Klub 007 Strahov",cat:"club",lat:50.0846,lng:14.3870,summary:"Student club near Strahov. Many Prague clubs are successors to the underground music clubs of the 70s.",details:"",cost:"",wiki:""},
{id:"futurum",name:"Futurum",cat:"club",lat:50.0700,lng:14.4040,summary:"Club in Smíchov.",details:"",cost:"",wiki:""},
{id:"zlaty-strom",name:"Zlatý Strom",cat:"club",lat:50.0858,lng:14.4147,summary:"Old Town club.",details:"",cost:"",wiki:""},
{id:"karlin",name:"Karlín",cat:"club",lat:50.0929,lng:14.4504,summary:"The old industrial area has had a real youth-culture renaissance, with trendy bars, restaurants and clubs.",details:"",cost:"",wiki:W+"Karlín"},
{id:"dominican",name:"Dominican Monastery",cat:"stay",lat:50.0850,lng:14.4195,summary:"Monastery-run hostel in the Old Town. Very good value for location and services: en-suite rooms with kitchen facilities, helpful staff, not run just for your money. 10/10 recommended. Pin approximate.",details:"Monasteries get booked up quickly, so book 3+ months ahead.",cost:"",wiki:""},
{id:"capuchin",name:"Capuchin Monastery",cat:"stay",lat:50.0898,lng:14.3918,summary:"Similar monastic hostel on Loretánská, up on Castle Hill. More basic and slightly further away, but cheaper than most private hostels and Airbnbs.",details:"Most monasteries across Europe will put up travellers. Email them; you can often stay in a historic building for very little.",cost:"",wiki:""},
{id:"liliova",name:"Hotel Liliová",cat:"stay",lat:50.0861,lng:14.4160,summary:"Just off the tourist ‘highway’ from Charles Bridge to Old Town Square. A very nice hotel for a decent price; now also bookable via Airbnb, so it fills quicker.",details:"",cost:"",wiki:""},
{id:"bunker",name:"Hostel Bunker Factory",cat:"stay",lat:50.0815,lng:14.4268,summary:"Huge, decently priced hostel on Wenceslas Square, and the rooms aren’t stuffed with backpackers. Promotes the Drunken Monkey Bar Crawl (English speakers, but good for making friends).",details:"",cost:"",wiki:""},
{id:"homer",name:"Hostel HOMEr",cat:"stay",lat:50.0868,lng:14.4235,summary:"Hostel in a historic Old Town building with beautiful painted ceilings; very cheap off-season, often bookable through Airbnb.",details:"",cost:"",wiki:""}
];

const CATS={sight:{label:"Sights",color:"#c0392b"},eat:{label:"Food & drink",color:"#d68910"},club:{label:"Clubs",color:"#7d3c98"},stay:{label:"Where to stay",color:"#1f7a5c"}};
const $=id=>document.getElementById(id);
const map=L.map("map").setView([50.0875,14.4213],13);
L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{maxZoom:19,subdomains:"abcd",attribution:"© OpenStreetMap contributors © CARTO"}).addTo(map);
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
