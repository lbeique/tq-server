import{S as c,b as u,T as g,G as i,B as l,a as m}from"./GameTrashMountain.dc5b72e8.js";import{_ as d,o as s,c as o,b as a,a as t,F as p,i as G,g as b}from"./index.e409e7ca.js";import"./GoBack.2d88290b.js";/* empty css                                                               */const h={class:"gameContainer"},_={class:"grassArea"},f={class:"recycleBins__grid"},y={name:"gameplay-Easy",methods:{setCurrentGarbage(r){this.currentGarbage=r},nextGarbage(){this.$refs.gameGarbage.getRandomGarbage(),this.rounds++},wrongDrop(){this.$refs.gameTrashMountain.moveMountainY(),console.log("ahhh",this.numWrong),this.$refs.backgroundGame.changeBack(this.numWrong)},setWrongNums(r){this.numWrong=r}},computed:{score(){return this.rounds-this.numWrong}},props:{},data(){return{currentGarbage:{},recycleBins:["organics","glass","metal","paper","e-waste","plastic"],numWrong:0,rounds:0}},beforeRouteLeave(r,e){this.$refs.timerVue.clearTimer()}},B=Object.assign(y,{setup(r){return(e,W)=>(s(),o("div",h,[a(c,{currentScore:e.score,class:"topScore"},null,8,["currentScore"]),a(l,{ref:"backgroundGame"},null,512),a(u,{class:"trashMountain",ref:"gameTrashMountain",setWrongNums:e.setWrongNums,finalScore:e.score},null,8,["setWrongNums","finalScore"]),a(g,{class:"timer",finalScore:e.score,ref:"timerVue"},null,8,["finalScore"]),t("div",_,[t("div",f,[(s(!0),o(p,null,G(e.recycleBins,n=>(s(),b(m,{binType:n,key:n,currentGarbage:e.currentGarbage,onNextGarbage:e.nextGarbage,onWrongDrop:e.wrongDrop},null,8,["binType","currentGarbage","onNextGarbage","onWrongDrop"]))),128))]),a(i,{setCurrentGarbage:e.setCurrentGarbage,ref:"gameGarbage",class:"garbage"},null,8,["setCurrentGarbage"])])]))}}),N=d(B,[["__scopeId","data-v-f862de32"]]);export{N as default};
