<template>
	<div class="chatroom">
		<p>num {{count}}   sum:  {{quantity}}</p>
		<p>infoemation is : {{(showinfor())}}</p>
		<button @click="increment">+</button>
		<br/>
		<button @click="decrement">-</button>
	</div>
</template>

<script>
	import {mapState,mapMutations,mapGetters} from 'vuex'
	
	export default{
		name:"AppChat",
		methods:{
			...mapMutations({
			increment:'increment',
			decrement:'decrement'
	     }),
	     ...mapGetters({showinfor:"showinfo"})
//		   showInfo:function(m){
//		   	  console.log(this.$store.getters);
//		   	   return this.$store.getters.showinfo(m);
//		    }
		},
		//{
//			
////			add:function(pay){
////				this.$store.commit({
////					type:'increment',
////					pay
////				})
////			}
//		},
		mounted(){
			console.log(this);
		},
		computed:{
			...mapState({
			count:(state)=>{
				return state.count;
			},
			quantity:state=>{
				return state.quantity;
			}
		  }),
		
		   
		//公共仓库，store 一个项目只有一个storage
	}
}
	// ...mapstate  展开运算符
</script>

<style>
	button{
		width:80px;
		background:#42B983;
		color:red;
	}
</style>