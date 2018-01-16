<template>
	<div class="practiceposition">
		<title-nav>实习专区</title-nav>
		 <div class="nav">
		 	  <ul>
		 	  	<li class="act">转正机会<span></span></li>
		 	  	<li>短期实习<span></span></li>
		 	  	<li class="noborder">寒假实习<span></span></li>
		 	  </ul>
		 	  
		 </div>
		
	    <div class="lists">
	    	<div class="list" v-for="i in 10">
	    		<div class='left'>
	    			<img src="../../../static/img/companypic/2.png"/>
	    		</div>
	    		<div class="right">
	    			<div class="center">
	    			<h3>内容运营管培生</h3>
	    			<p>白石互动</p>
	    			<h4><span>北京</span>&nbsp;&nbsp;<span>本科</span>&nbsp;&nbsp;<span>五天/周</span></h4>
	    		    </div>
	    		    <div class="pay">
		    			<h3>100-120/天</h3>
		    			<p>01-30</p>
	    		     </div>
	    			
	    		</div>
	    	</div>
	    </div>
		
	</div>
</template>

<script>
	
	import TitleNav from '../pubcomponents/TopNav'
	export default{
		name:"PracticePosition",
		components:{
			
			TitleNav
		}
	}
</script>

<style lang='scss'>
	@import '../../style/usage/modules/position/Practiceposition.scss';
</style>