(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{17:function(e,t,a){e.exports=a(27)},22:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(11),c=a.n(i),o=(a(22),a(8)),l=a.n(o),m=a(12),s=a(13),u=a(14),d=a(16),p=a(15),h=a(28),y=function(){return r.a.createElement("div",null,r.a.createElement(h.a,{color:"dark",className:"text-white",style:{textAlign:"center",fontSize:"1.5rem"}},r.a.createElement("h1",{className:"display-3"},"Weather App"),r.a.createElement("p",{className:"lead"},"Search weather by city")))},E=a(29),v=a(30),x=a(31),g=a(32),f=a(33),w=a(34),b=a(35),k=function(e){return r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement(v.a,null,r.a.createElement(h.a,{color:"dark",className:"text-white",style:{marginTop:"3rem",padding:"2rem",borderRadius:"5px",border:"2px"}},r.a.createElement(x.a,{style:{border:"white"},onSubmit:e.getWeather},r.a.createElement(g.a,null,r.a.createElement(f.a,{for:"city"},"City"),r.a.createElement(w.a,{type:"text",name:"city",placeholder:"...city"})),r.a.createElement(g.a,null,r.a.createElement(f.a,{for:"country"},"State or Country"),r.a.createElement(w.a,{type:"text",name:"country",placeholder:"...state or country"})),r.a.createElement(g.a,null,r.a.createElement(b.a,null,"Search")))))))},R=a(36),S=a(37),C=a(38),L=a(39),W=a(40),U=function(e){return r.a.createElement("div",null,e.city&&e.country&&e.iconURL&&e.temp&&e.min&&e.max&&e.humidity&&e.description&&r.a.createElement(E.a,null,r.a.createElement(v.a,null,r.a.createElement(h.a,{color:"dark",className:"text-white",style:{marginTop:"3rem",padding:"2rem",borderRadius:"5px",border:"2px"}},r.a.createElement(R.a,null,r.a.createElement(S.a,null,r.a.createElement("h3",null,"Location: ",e.city,", ",e.country))),r.a.createElement(C.a,null,r.a.createElement(L.a,{style:{width:"10rem",height:"auto"},src:e.iconURL,alt:"Weather Icon"}),r.a.createElement(W.a,null,"Current Temperature: ",e.temp,"\xb0F"),r.a.createElement(W.a,null,"Min: ",e.min,"\xb0F"),r.a.createElement(W.a,null,"Max: ",e.max,"\xb0F"),r.a.createElement(W.a,null,"Humidity: ",e.humidity,"%"),r.a.createElement(W.a,null,"Conditions: ",e.description))))),e.error&&r.a.createElement(E.a,null,r.a.createElement(v.a,null,r.a.createElement(h.a,{color:"dark",className:"text-white",style:{marginTop:"3rem",padding:"2rem",borderRadius:"5px",border:"2px",textAlign:"center"}},r.a.createElement(S.a,null," ",e.error)))))},j="e118a9757bbd90e8cbd8a9d2eff8445f",F=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={city:void 0,country:void 0,iconURL:void 0,temp:void 0,min:void 0,max:void 0,humidity:void 0,description:void 0,error:void 0},e.getWeather=function(){var t=Object(m.a)(l.a.mark((function t(a){var n,r,i,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=a.target.elements.city.value,r=a.target.elements.country.value,t.next=5,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(r,"&units=imperial&appid=").concat(j));case 5:return i=t.sent,t.next=8,i.json();case 8:c=t.sent,n&&r?(console.log(c),e.setState({city:c.name,country:c.sys.country,iconURL:"https://openweathermap.org/img/w/".concat(c.weather[0].icon,".png"),temp:c.main.temp.toFixed(0),min:c.main.temp_min.toFixed(0),max:c.main.temp_max.toFixed(0),humidity:c.main.humidity,description:c.weather[0].description,error:""})):e.setState({city:void 0,country:void 0,iconURL:void 0,temp:void 0,min:void 0,max:void 0,humidity:void 0,description:void 0,error:"Please enter valid City and State or Country. Check spelling and don't use abbreviations for States."});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"75rem",backgroundColor:"#808080"}},r.a.createElement(y,null),r.a.createElement(k,{getWeather:this.getWeather}),r.a.createElement(U,{city:this.state.city,country:this.state.country,iconURL:this.state.iconURL,temp:this.state.temp,min:this.state.min,max:this.state.max,humidity:this.state.humidity,description:this.state.description,error:this.state.error}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(26);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.e8dd7a17.chunk.js.map