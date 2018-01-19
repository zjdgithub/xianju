<template>
	<div class="practiceposition">
		<title-nav>实习专区</title-nav>
		 <div class="nav">
		 	  <ul>
		 	  	<li :class="{'act':isactive1}" @click="isactive3=false;isactive2=false ;isactive1=true ;typeClick('changejob')">转正机会<span></span></li>
		 	  	<li @click="isactive3=false;isactive2=true ;isactive1=false;typeClick('shorttime')" :class="{'act':isactive2}">短期实习<span></span></li>
		 	  	<li class="noborder" @click="isactive3=true;isactive2=false ;isactive1=false ; typeClick('holidaytime')" :class="{'act':isactive3}">寒假实习<span></span></li>
		 	  </ul>
		 	  
		 </div>
		
	    <div class="lists">
	    	<router-link tag="div" :to="{name:'PositionDetails'}" class="list" v-for="pro in pros" key="pro.id">
	    		<div class='left'>
	    			<img :src="pro.poster"/>
	    		</div>
	    		<div class="right">
	    			<div class="center">
	    			<h3>{{pro.posname}}</h3>
	    			<p>{{pro.companyname}}</p>
	    			<h4><span>{{pro.address}}</span>&nbsp;&nbsp;<span>{{pro.education}}</span>&nbsp;&nbsp;<span>{{pro.worktime}}</span></h4>
	    		    </div>
	    		    <div class="pay">
		    			<h3>{{pro.pay}}</h3>
		    			<p>{{pro.duration}}</p>
	    		     </div>
	    			
	    		</div>
	    	</router-link>
	    </div>
		
	</div>
</template>

<script>
	
	import TitleNav from '../pubcomponents/TopNav'
	export default{
		name:"PracticePosition",
		components:{
			
			TitleNav
		},
		data(){
			return {
				type:'changejob',
				allpros:[],
				pros:[],
				isactive1:true,
				isactive2:false,
				isactive3:false,
			}
		},
		methods:{
			typeClick:function(type){
				this.type = type
				this.changeType(type)
			},
			changeType:function(type){
				let pros = []
				if(type == "changejob"){
//					alert(1)
					this.allpros.map((item,i)=>{
						if(item.practicetype == "changejob"){
							pros.push(item)
//							console.log(pros)
						}
					})
					return this.pros = pros
				}else
				if(this.type == "shorttime"){
					this.allpros.map((item,i)=>{
						if(item.practicetype == "shorttime"){
							pros.push(item)
//							console.log(pros)
						}
					})
					return this.pros = pros
				}else
				if(this.type == "holidaytime"){
					this.allpros.map((item,i)=>{
						if(item.practicetype == "holidaytime"){
							pros.push(item)
//							console.log(pros)
						}
					})
					return this.pros = pros
				}
		   }
		},
		mounted(){
			fetch('/api/position/practice').then((response)=>response.json())
			  .then((res)=>{
   		  	   console.log(res.data.subjects);
			  	this.allpros=res.data.subjects;
			  	this.pros = this.changeType('changejob');
//			  	console.log(this.allpros);
			  })

		}
	}
</script>

<style lang='scss'>
	@import '../../style/usage/modules/position/Practiceposition.scss';
</style>