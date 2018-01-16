<template>
	<h2 class="title">
			<router-link tag="i" :to="{name:'AppMain'}">
				<i><img src="../../../static/img/redir2.png" alt="" /></i>
			<!--<i class="fa fa-chevron-left" aria-hidden="true"></i>--></router-link>
			<span>
				<slot></slot>
			</span>
		
		</h2>
</template>

<script>
	export default{
		name:"TitleNav",
	}
</script>

<style lang="scss" scoped>
	  .title{
	  	    display:flex;
            height:0.43rem;
            line-height: 0.43rem;
            background:#12c4b8;
            color:#ffffff;
            font-weight: 100;
           i{
           	   color:#ffffff;
               width:40%;
               padding-left:0.1rem;
               font-size:0.17rem;
              
               
           }
           span{
               font-size:0.17rem;
           }
        }
</style>