//引入vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//定义 store
 const state ={
  location:"定位中"
 }
 const mutations ={
 	changeCity:function(state,newCity){
 		
 		state.location=newCity;
 	}
 }
 const getters ={
 	showinfo: (state)=>{
 		
 	}
 }
 const actions={
 	changeCity:function(content,newCity){
 		content.commit('changeCity',newCity)
 	}
 }
  //暴露出去 state 
  export default new Vuex.Store({
  	state,
  	mutations,
  	getters,
  	actions
  })
