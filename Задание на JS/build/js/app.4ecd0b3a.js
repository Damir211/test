(function(){"use strict";var e={509:function(e,t,n){var u=n(9242),l=n(3396);function i(e,t,n,u,i,r){const o=(0,l.up)("RouteCalculator");return(0,l.wg)(),(0,l.j4)(o)}var r=n(7139);const o=(0,l._)("label",{for:"time"},"выбрать направление",-1),a=(0,l._)("br",null,null,-1),c=(0,l._)("option",{value:"из A в B"},"из A в B",-1),s=(0,l._)("option",{value:"из B в A"},"из B в A",-1),m=(0,l._)("option",{value:"из A в B и обратно в А"},"из A в B и обратно в А",-1),b=[c,s,m],f=(0,l._)("br",null,null,-1),h=(0,l._)("br",null,null,-1),d={key:0},p=(0,l._)("label",{for:"time"},"Выберите время",-1),T=(0,l._)("br",null,null,-1),v=["value"],w=(0,l._)("br",null,null,-1),k=(0,l._)("br",null,null,-1),g={key:1},_=(0,l._)("label",{for:"time2"},"Выберите обратное время",-1),y=(0,l._)("br",null,null,-1),V=["value"],B=(0,l._)("br",null,null,-1),A=(0,l._)("br",null,null,-1),Z=(0,l._)("label",{for:"num"},"Количество билетов",-1),O=(0,l._)("br",null,null,-1),D=(0,l._)("br",null,null,-1),z=(0,l._)("br",null,null,-1),U=(0,l._)("br",null,null,-1),R=(0,l._)("br",null,null,-1),j=(0,l._)("br",null,null,-1);function L(e,t,n,i,c,s){return(0,l.wg)(),(0,l.iD)("div",null,[o,a,(0,l.wy)((0,l._)("select",{name:"route",id:"route",onChange:t[0]||(t[0]=()=>{}),"onUpdate:modelValue":t[1]||(t[1]=t=>e.routeType=t)},b,544),[[u.bM,e.routeType]]),f,h,"из B в A"!==this.routeType?((0,l.wg)(),(0,l.iD)("div",d,[p,T,(0,l.Uk)((0,r.zw)(e.toValue)+" ",1),(0,l.wy)((0,l._)("select",{name:"time",id:"time","onUpdate:modelValue":t[2]||(t[2]=t=>e.toValue=t)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.timetable.to,(e=>((0,l.wg)(),(0,l.iD)("option",{value:e},(0,r.zw)(s.getLocalTime(e))+"(из A в B)",9,v)))),256))],512),[[u.bM,e.toValue]]),w,k])):(0,l.kq)("",!0),"из A в B"!==this.routeType?((0,l.wg)(),(0,l.iD)("div",g,[_,y,(0,l.Uk)((0,r.zw)(e.backValue)+" ",1),(0,l.wy)((0,l._)("select",{name:"time",id:"time2","onUpdate:modelValue":t[3]||(t[3]=t=>e.backValue=t)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.backFiltered,(e=>((0,l.wg)(),(0,l.iD)("option",{value:e},(0,r.zw)(s.getLocalTime(e))+"(из B в A)",9,V)))),256))],512),[[u.bM,e.backValue]]),B,A])):(0,l.kq)("",!0),(0,l._)("div",null,[Z,O,(0,l.wy)((0,l._)("input",{id:"num",type:"number","onUpdate:modelValue":t[4]||(t[4]=t=>e.countTickets=t)},null,512),[[u.nr,e.countTickets,void 0,{number:!0}]]),D]),z,(0,l._)("div",null,[(0,l.Uk)(" Вы выбрали "+(0,r.zw)(e.countTickets)+" билета по маршруту "+(0,r.zw)(e.routeType)+" стоимостью "+(0,r.zw)(s.resultPrice)+"р.",1),U,(0,l.Uk)(" Это путешествие займет у вас "+(0,r.zw)(s.roadTime)+" минут. ",1),R,(0,l.Uk)(" Теплоход отправляется в "+(0,r.zw)(s.resultTimeTo)+", а прибудет в "+(0,r.zw)(s.resultTimeBack)+".",1),j])])}var M={name:"RouteCalculator",data:()=>({timetable:{to:["2021-08-21 18:00:00Z+03:00","2021-08-21 18:30:00Z+03:00","2021-08-21 18:45:00Z+03:00","2021-08-21 19:00:00Z+03:00","2021-08-21 19:15:00Z+03:00","2021-08-21 21:00:00Z+03:00"],back:["2021-08-21 18:30:00Z+03:00","2021-08-21 18:45:00Z+03:00","2021-08-21 19:00:00Z+03:00","2021-08-21 19:15:00Z+03:00","2021-08-21 19:35:00Z+03:00","2021-08-21 21:50:00Z+03:00","2021-08-21 21:55:00Z+03:00"]},timeOneSide:50,routeType:"из A в B",countTickets:1,toValue:"2021-08-21 18:00:00Z+03:00",backValue:"2021-08-21 18:30:00Z+03:00"}),computed:{routPrice(){return"из A в B и обратно в А"===this.routeType?1200:700},resultPrice(){return this.countTickets*this.routPrice},backFiltered(){if("из A в B и обратно в А"!==this.routeType)return this.timetable.back;let e=this.getTimeWithRoadTime(this.toValue),t=this.timetable.back.filter((t=>+e<+new Date(t)));return this.backValue=t[0],t},roadTime(){if("из A в B и обратно в А"!==this.routeType)return 50;let e=+new Date(this.getTimeWithRoadTime(this.backValue))-+new Date(this.toValue);return e/6e4},resultTimeBack(){return"из A в B"===this.routeType?this.getLocalTime(this.getTimeWithRoadTime(this.toValue)):this.getLocalTime(this.getTimeWithRoadTime(this.backValue))},resultTimeTo(){return"из B в A"===this.routeType?this.getLocalTime(this.backValue):this.getLocalTime(this.toValue)}},methods:{getLocalTime(e){const t=new Date(e);return`${("0"+t.getHours()).slice(-2)}:${("0"+t.getMinutes()).slice(-2)}`},getTimeWithRoadTime(e){let t=new Date(e);return t.setMinutes(t.getMinutes()+this.timeOneSide),t}}},C=n(89);const P=(0,C.Z)(M,[["render",L]]);var W=P,x={name:"App",components:{RouteCalculator:W}};const F=(0,C.Z)(x,[["render",i]]);var H=F;(0,u.ri)(H).mount("#app")}},t={};function n(u){var l=t[u];if(void 0!==l)return l.exports;var i=t[u]={exports:{}};return e[u](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,u,l,i){if(!u){var r=1/0;for(s=0;s<e.length;s++){u=e[s][0],l=e[s][1],i=e[s][2];for(var o=!0,a=0;a<u.length;a++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](u[a])}))?u.splice(a--,1):(o=!1,i<r&&(r=i));if(o){e.splice(s--,1);var c=l();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[u,l,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var u in t)n.o(t,u)&&!n.o(e,u)&&Object.defineProperty(e,u,{enumerable:!0,get:t[u]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,u){var l,i,r=u[0],o=u[1],a=u[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(l in o)n.o(o,l)&&(n.m[l]=o[l]);if(a)var s=a(n)}for(t&&t(u);c<r.length;c++)i=r[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},u=self["webpackChunkroutes"]=self["webpackChunkroutes"]||[];u.forEach(t.bind(null,0)),u.push=t.bind(null,u.push.bind(u))}();var u=n.O(void 0,[998],(function(){return n(509)}));u=n.O(u)})();
//# sourceMappingURL=app.4ecd0b3a.js.map