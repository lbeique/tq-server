import{S as g,b as c,T as u,G as l,B as i,a as m}from"./GameTrashMountain.81f3ee31.js";import{H as b}from"./Hint.ff8dcda2.js";import{_ as d,o as s,c as o,b as a,a as t,F as G,i as p,h}from"./index.37659633.js";import"./GoBack.441ae78a.js";const _={class:"gameContainer"},f={class:"grassArea"},y={class:"recycleBins__grid"},B={name:"gameplay-Easy",methods:{setCurrentGarbage(r){this.currentGarbage=r},nextGarbage(){this.$refs.gameGarbage.getRandomGarbage(),this.rounds++},wrongDrop(){this.$refs.gameTrashMountain.moveMountainY(),console.log("ahhh",this.numWrong),this.$refs.backgroundGame.changeBack(this.numWrong)},setWrongNums(r){this.numWrong=r}},computed:{score(){return this.rounds-this.numWrong}},props:{},data(){return{currentGarbage:{},recycleBins:["organics","glass","metal","paper","e-waste","plastic"],numWrong:0,rounds:0}}},W=Object.assign(B,{setup(r){return(e,N)=>(s(),o("div",_,[a(g,{currentScore:e.score,class:"topScore"},null,8,["currentScore"]),a(i,{ref:"backgroundGame"},null,512),a(c,{class:"trashMountain",ref:"gameTrashMountain",setWrongNums:e.setWrongNums,finalScore:e.score},null,8,["setWrongNums","finalScore"]),a(u,{class:"timer",finalScore:e.score},null,8,["finalScore"]),t("div",f,[t("div",y,[(s(!0),o(G,null,p(e.recycleBins,n=>(s(),h(m,{binType:n,key:n,currentGarbage:e.currentGarbage,onNextGarbage:e.nextGarbage,onWrongDrop:e.wrongDrop},null,8,["binType","currentGarbage","onNextGarbage","onWrongDrop"]))),128))]),a(l,{setCurrentGarbage:e.setCurrentGarbage,ref:"gameGarbage",class:"garbage"},null,8,["setCurrentGarbage"]),a(b,{"garbage-name":e.currentGarbage.garbageName,"garbage-category":e.currentGarbage.garbageCategory,class:"hint"},null,8,["garbage-name","garbage-category"])])]))}}),T=d(W,[["__scopeId","data-v-a1d194c8"]]);export{T as default};
