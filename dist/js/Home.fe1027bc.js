"use strict";(self["webpackChunkproductivity"]=self["webpackChunkproductivity"]||[]).push([[268],{8815:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var i=a(3396),n=a(7139);const d={key:0},l=(0,i.Uk)(" visual DB ");function s(e,t,a,s,o,g){const r=(0,i.up)("daily-task-item");return(0,i.wg)(),(0,i.iD)("div",null,[g.dailyAgenda?((0,i.wg)(),(0,i.iD)("div",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(g.dailyAgenda.dailyAgendaItems,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id},[(0,i.Wm)(r,{dailyAgendaItem:e,onSaveAgendaItem:g.saveAgendaItem},null,8,["dailyAgendaItem","onSaveAgendaItem"])])))),128))])):(0,i.kq)("",!0),l,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(g.dailyAgenda.dailyAgendaItems,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id},(0,n.zw)(e.result),1)))),128))])}var o=a(9242);const g={key:0},r={key:0},u={key:1},y={key:0};function m(e,t,a,d,l,s){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Uk)((0,n.zw)(l.item.task.name)+": "+(0,n.zw)(l.item.task.description)+" ",1),"boolean"==l.item.task.type?((0,i.wg)(),(0,i.iD)("div",g,[(0,i._)("div",null,"goal: "+(0,n.zw)(l.item.task.goal),1),(0,i.wy)((0,i._)("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=e=>l.item.result=e)},null,512),[[o.e8,l.item.result]]),l.item.result?((0,i.wg)(),(0,i.iD)("div",r," Complete ")):(0,i.kq)("",!0)])):(0,i.kq)("",!0),"minutes"==l.item.task.type?((0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("div",null,"goal: "+(0,n.zw)(l.item.task.goal),1),(0,i.wy)((0,i._)("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=e=>l.item.result=e)},null,512),[[o.nr,l.item.result]]),l.item.result>=l.item.task.goal?((0,i.wg)(),(0,i.iD)("div",y," Complete ")):(0,i.kq)("",!0)])):(0,i.kq)("",!0),(0,i._)("button",{onClick:t[2]||(t[2]=(...e)=>s.save&&s.save(...e))},"Save")])}var w={props:["dailyAgendaItem"],data(){return{item:{...this.dailyAgendaItem}}},methods:{save(){this.$emit("saveAgendaItem",this.item)}},created(){console.log(this.item)}},D=a(89);const h=(0,D.Z)(w,[["render",m]]);var k=h,v={components:{"daily-task-item":k},data(){return{today:Math.floor(Date.now()/1e3),value1:!0}},computed:{dailyAgenda(){let e=this.$store.state.dailyAgenda.find((e=>new Date(1e3*e.date).getFullYear()===new Date(1e3*this.today).getFullYear()&&new Date(1e3*e.date).getMonth()===new Date(1e3*this.today).getMonth()&&new Date(1e3*e.date).getDate()===new Date(1e3*this.today).getDate()));return e?(e.dailyAgendaItems.forEach((e=>{e.task=this.$store.state.tasks.find((t=>t.id===e.taskID))})),{...e}):null}},methods:{async saveAgendaItem(e){await this.$store.dispatch("updateDailyAgendaItem",this.dailyAgenda.id,e)}},async created(){let e=this.$store.state.dailyAgenda.find((e=>new Date(1e3*e.date).getFullYear()===new Date(1e3*this.today).getFullYear()&&new Date(1e3*e.date).getMonth()===new Date(1e3*this.today).getMonth()&&new Date(1e3*e.date).getDate()===new Date(1e3*this.today).getDate()));void 0===e&&(await this.$store.dispatch("createDailyAgenda"),e=this.$store.state.dailyAgenda.find((e=>new Date(1e3*e.date).getFullYear()===new Date(1e3*this.today).getFullYear()&&new Date(1e3*e.date).getMonth()===new Date(1e3*this.today).getMonth()&&new Date(1e3*e.date).getDate()===new Date(1e3*this.today).getDate())))}};const c=(0,D.Z)(v,[["render",s]]);var p=c}}]);
//# sourceMappingURL=Home.fe1027bc.js.map