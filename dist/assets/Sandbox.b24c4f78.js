import{B as c}from"./Button.1768acea.js";import{G as i,a as l,b as u,S as g,T as m,B as p}from"./GameTrashMountain.dc5b72e8.js";import{_ as b,o as r,c as n,b as e,a as G,F as s,i as d,g as _}from"./index.e409e7ca.js";import{G as h}from"./GoBack.2d88290b.js";import{F as y}from"./FinalScore.14655af7.js";import{W as f}from"./WhyRecycleCard.73bb77c5.js";/* empty css                                                               */const B={class:"recycleBins__grid"},v={name:"Sandbox",methods:{startGame(){console.log("Starting game...")},setCurrentGarbage(t){this.currentGarbage=t},nextGarbage(){this.$refs.gameGarbage.getRandomGarbage()},wrongDrop(){this.$refs.gameTrashMountain.moveMountainY()}},computed:{},props:{},data(){return{currentGarbage:{},recycleBins:["organics","glass","metal","paper","e-waste","plastic"]}}},w=Object.assign(v,{setup(t){return(a,S)=>(r(),n(s,null,[e(h,{isGame:!0}),e(f,{title:"We are big Polluters!",text:`The average person throws away 4 pounds of trash every single day. Over a year, that makes about 1.5 tons of waste. Now consider that there are 7 billion people on this planet and you can see why this is a massive environmental problem!
`,image:"src/assets/education/whyRecycle-img1.jpg",colorCard:"yellow"}),e(c,{text:"Start Game",variant:"game",onClick:a.startGame},null,8,["onClick"]),G("div",B,[(r(!0),n(s,null,d(a.recycleBins,o=>(r(),_(l,{binType:o,key:o,currentGarbage:a.currentGarbage,onNextGarbage:a.nextGarbage,onWrongDrop:a.wrongDrop},null,8,["binType","currentGarbage","onNextGarbage","onWrongDrop"]))),128))]),e(i,{setCurrentGarbage:a.setCurrentGarbage,ref:"gameGarbage"},null,8,["setCurrentGarbage"]),e(u,{ref:"gameTrashMountain"},null,512),e(g,{currentScore:0}),e(y,{finalScore:0}),e(m),e(p,{numWrong:3})],64))}}),D=b(w,[["__scopeId","data-v-cc91c0fc"]]);export{D as default};
