import{F as n}from"./FinalScore.20913792.js";import{B as r}from"./Button.0d148dae.js";import{_ as i,o as c,c as l,b as e,a as o,e as s,p,d as _}from"./index.7ab74b9e.js";/* empty css                                                               */const h=t=>(p("data-v-9103fae1"),t=t(),_(),t),u={class:"container"},d=h(()=>o("h1",null,"Share your results!",-1)),f={class:"social-sharing__container"},m=["href"],g=["href"],k=["href"],w={props:["finalScore"],methods:{playAgain(){this.$router.push("/gameplay-easy")}},data(){return{postUrl:encodeURI(document.location.href)}}},y=Object.assign(w,{__name:"Result",setup(t){return(a,S)=>(c(),l("div",u,[e(n,{finalScore:this.$route.params.id},null,8,["finalScore"]),d,o("div",f,[o("a",{class:"social-sharing-link",href:"https://www.facebook.com/sharer.php?u="+a.postUrl},[e(s,{iconName:"icon-park-twotone:facebook",iconColor:"#273D4E",iconHeight:"40"})],8,m),o("a",{class:"social-sharing-link",href:"https://twitter.com/share?url="+a.postUrl},[e(s,{iconName:"icon-park-twotone:twitter",iconColor:"#273D4E",iconHeight:"40"})],8,g),o("a",{class:"social-sharing-link",href:"https://pinterest.com/pin/create/bookmarklet/?url="+a.postUrl},[e(s,{iconName:"mingcute:pinterest-line",iconColor:"#273D4E",iconHeight:"40"})],8,k)]),e(r,{text:"Play Again",variant:"alternate",onClick:a.playAgain,class:"btn"},null,8,["onClick"])]))}}),I=i(y,[["__scopeId","data-v-9103fae1"]]);export{I as default};
