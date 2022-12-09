import{B as i}from"./Button.0d148dae.js";import{_ as m,o as n,c as r,f as y,p as u,d as p,a as e,b as a,w as s,u as _,R as c,F as f}from"./index.7ab74b9e.js";import{H as h}from"./Header.65631e2c.js";/* empty css                                                               */import"./GoBack.2f27d709.js";const v="/assets/garbages/trash-apple.svg",M="/assets/garbages/trash-apple-bitten.svg";const b={name:"GameButtonMode",components:{},methods:{},computer:{},props:["gameMode"],data(){return{}}},g=t=>(u("data-v-f04d306b"),t=t(),p(),t),k={key:0,class:"gameMode__button--left"},I=g(()=>e("div",{class:"gameMode__container--blue"},[e("div",{class:"gameMode__img--easy"},[e("img",{src:v,alt:"trash-apple"})]),e("div",{class:"gameMode__content--easy"},[e("h1",null,"EASY"),e("h3",null,"mode"),e("p",null," New here? Try out the easy mode here to learn how the game works! ")])],-1)),w=[I],x={key:1,class:"gameMode__button--right"},B=g(()=>e("div",{class:"gameMode__container--yellow"},[e("div",{class:"gameMode__content--hard"},[e("h1",null,"HARD"),e("h3",null,"mode"),e("p",null," Looking for a challenge? Then try your best in this mode! ")]),e("div",{class:"gameMode__img--hard"},[e("img",{src:M,alt:"trash-apple"})])],-1)),G=[B];function S(t,d,o,H,R,V){return o.gameMode==="easy"?(n(),r("div",k,w)):o.gameMode==="hard"?(n(),r("div",x,G)):y("",!0)}const l=m(b,[["render",S],["__scopeId","data-v-f04d306b"]]);const T=t=>(u("data-v-dae5fc8c"),t=t(),p(),t),$=T(()=>e("div",{class:"gameIntro__content"},[e("h2",null,"So you think you can recycle?"),e("p",null,"Try your hand at our game by playing through different levels in order to test your knowledge!")],-1)),C={name:"GameIntro",methods:{startTutorial(){this.$router.push("/tutorial")}},computed:{},props:{},data(){return{}},components:{Header:h,Button:i}},N=Object.assign(C,{setup(t){return(d,o)=>(n(),r(f,null,[a(h,{title:"Start Game"},{Button:s(()=>[a(i,{text:"Tutorial",variant:"tutorial-alternate",onClick:d.startTutorial},null,8,["onClick"])]),_:1}),$,a(_(c),{style:{"text-decoration":"none"},to:"/gameplay-easy"},{default:s(()=>[a(l,{gameMode:"easy"})]),_:1}),a(_(c),{style:{"text-decoration":"none"},to:"/gameplay-hard"},{default:s(()=>[a(l,{gameMode:"hard"})]),_:1})],64))}}),D=m(N,[["__scopeId","data-v-dae5fc8c"]]);export{D as default};
