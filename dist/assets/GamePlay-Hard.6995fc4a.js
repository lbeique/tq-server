import{_ as u}from"./trashpattern.169581a9.js";import{S as i,T as g,b as l,G as m,B as d,a as p}from"./GameTrashMountain.18d69d9b.js";import{_,o,c as t,b as s,a,F as c,j as b,g as h,p as f,d as G}from"./index.7ab74b9e.js";import"./GoBack.2f27d709.js";/* empty css                                                               */const y=r=>(f("data-v-4562ffb1"),r=r(),G(),r),B=y(()=>a("div",{class:"blueBack"},[a("img",{class:"pattern",src:u})],-1)),S={class:"gameContainer"},v={class:"skyArea"},W={class:"grassArea"},k={class:"recycleBins__grid"},V={name:"gameplay-Easy",methods:{setCurrentGarbage(r){this.currentGarbage=r},nextGarbage(){this.$refs.gameGarbage.getRandomGarbage(),this.rounds++},wrongDrop(){this.$refs.gameTrashMountain.moveMountainY(),console.log("ahhh",this.numWrong),this.$refs.backgroundGame.changeBack(this.numWrong)},setWrongNums(r){this.numWrong=r}},computed:{score(){return this.rounds-this.numWrong}},props:{},data(){return{currentGarbage:{},recycleBins:["organics","glass","metal","paper","e-waste","plastic"],numWrong:0,rounds:0}},beforeRouteLeave(r,e){this.$refs.timerVue.clearTimer()}},N=Object.assign(V,{setup(r){return(e,T)=>(o(),t(c,null,[s(i,{currentScore:e.score,class:"topScore"},null,8,["currentScore"]),B,a("div",S,[a("div",v,[s(d,{ref:"backgroundGame"},null,512),s(g,{class:"timer",finalScore:e.score,ref:"timerVue"},null,8,["finalScore"])]),s(l,{class:"trashMountain",ref:"gameTrashMountain",setWrongNums:e.setWrongNums,finalScore:e.score},null,8,["setWrongNums","finalScore"]),a("div",W,[a("div",k,[(o(!0),t(c,null,b(e.recycleBins,n=>(o(),h(p,{binType:n,key:n,currentGarbage:e.currentGarbage,onNextGarbage:e.nextGarbage,onWrongDrop:e.wrongDrop},null,8,["binType","currentGarbage","onNextGarbage","onWrongDrop"]))),128))]),s(m,{setCurrentGarbage:e.setCurrentGarbage,ref:"gameGarbage",class:"garbage"},null,8,["setCurrentGarbage"])])])],64))}}),$=_(N,[["__scopeId","data-v-4562ffb1"]]);export{$ as default};
