//引入vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//定义 store
 const state ={
 	count : 0,
 	quantity:10,
 	pers:[{age:18,name:"zj"},{age:24,name:"zn"},{age:19,name:'sh'}]
 }
 const mutations ={
 	increment(state){
 		state.count++;
 	},
 	
    decrement(state){
 			state.count--;
 		
 	  }
 }
 const getters ={
 	showinfo: (state)=>{
 		//vuex的数组遍历的方式，find ()的查找，添加条件。
 		return state.pers.find(per=> per.name=='zj').age;
 	}
 }
  //暴露出去 state 
  export default new Vuex.Store({
  	state,
  	mutations,
  	getters
  })
