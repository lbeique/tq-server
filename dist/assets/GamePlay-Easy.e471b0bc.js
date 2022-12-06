import{S as d,b as m,T as p,G as b,B as _,a as y}from"./GameTrashMountain.ed7b3930.js";import{_ as c,o as s,c as o,a as t,t as f,g as G,p as N,e as B,b as r,F as w,i as v,h as S}from"./index.ab77e0c7.js";import"./GoBack.cc2f8a48.js";/* empty css                                                               */const k="/assets/idea.a7934638.png",C={name:"Hint",methods:{},computed:{hintBoxNote:function(){const[a]=this.listOfNotes.filter(e=>e.category===this.garbageCategory);return a.hintNote}},props:{garbageName:String,garbageCategory:String},data(){return{listOfNotes:[{category:"organics",hintNote:"This is the purest form of recycling, because nature does 100% of the work for us! "},{category:"glass",hintNote:"We can take them and purpose them without any loss in quality."},{category:"metal",hintNote:"No pun intended, but some can be used to create new road signs and window frames"},{category:"paper",hintNote:"They can be recycled into a whole bunch of new things, including new boxes, paper towels!"},{category:"e-waste",hintNote:"They are a treasure trove of recyclable material!"},{category:"plastic",hintNote:"They can be recycled into ropes, packaging, chairs, brush bristles and even car bumpers!"}],showHintBox:!1}}},g=a=>(N("data-v-1bf19070"),a=a(),B(),a),W={class:"hintParent"},T={key:0,class:"hintBox hintChild"},V=g(()=>t("h2",null,"x",-1)),x=[V],$=g(()=>t("img",{src:k,alt:"hint"},null,-1)),H=[$];function D(a,e,u,i,n,l){return s(),o("div",W,[n.showHintBox?(s(),o("div",T,[t("h3",null,f(l.hintBoxNote),1),t("div",{class:"hintX hintChild",onClick:e[0]||(e[0]=h=>n.showHintBox=!1)},x)])):G("",!0),t("div",{class:"hintButton hintChild",onClick:e[1]||(e[1]=h=>n.showHintBox=!n.showHintBox)},H)])}const I=c(C,[["render",D],["__scopeId","data-v-1bf19070"]]);const M={class:"gameContainer"},E={class:"grassArea"},O={class:"recycleBins__grid"},P={name:"gameplay-Easy",methods:{setCurrentGarbage(a){this.currentGarbage=a},nextGarbage(){this.$refs.gameGarbage.getRandomGarbage(),this.rounds++},wrongDrop(){this.$refs.gameTrashMountain.moveMountainY(),console.log("ahhh",this.numWrong),this.$refs.backgroundGame.changeBack(this.numWrong)},setWrongNums(a){this.numWrong=a}},computed:{score(){return this.rounds-this.numWrong}},props:{},data(){return{currentGarbage:{},recycleBins:["organics","glass","metal","paper","e-waste","plastic"],numWrong:0,rounds:0}}},j=Object.assign(P,{setup(a){return(e,u)=>(s(),o("div",M,[r(d,{currentScore:e.score,class:"topScore"},null,8,["currentScore"]),r(_,{ref:"backgroundGame"},null,512),r(m,{class:"trashMountain",ref:"gameTrashMountain",setWrongNums:e.setWrongNums,finalScore:e.score},null,8,["setWrongNums","finalScore"]),r(p,{class:"timer",finalScore:e.score},null,8,["finalScore"]),t("div",E,[t("div",O,[(s(!0),o(w,null,v(e.recycleBins,i=>(s(),S(y,{binType:i,key:i,currentGarbage:e.currentGarbage,onNextGarbage:e.nextGarbage,onWrongDrop:e.wrongDrop},null,8,["binType","currentGarbage","onNextGarbage","onWrongDrop"]))),128))]),r(b,{setCurrentGarbage:e.setCurrentGarbage,ref:"gameGarbage",class:"garbage"},null,8,["setCurrentGarbage"]),r(I,{"garbage-name":e.currentGarbage.garbageName,"garbage-category":e.currentGarbage.garbageCategory,class:"hint"},null,8,["garbage-name","garbage-category"])])]))}}),L=c(j,[["__scopeId","data-v-f27b9364"]]);export{L as default};
