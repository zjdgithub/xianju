<template>

  <div id="app" class="container">
    <keep-alive><router-view/></keep-alive>
	    <footer>
			<ul>
				<router-link :to="{name:'AppMain'}" tag="li"><i class="fa fa-home" aria-hidden="true"></i><span>首页</span></router-link>
				<router-link :to="{name:'AppChat'}" tag="li"><i class="fa fa-commenting-o" aria-hidden="true"></i><span>聊吧	</span></router-link>
				<router-link :to="{name:'AppResume'}" tag='li'><i class="fa fa-address-card" aria-hidden="true"></i><span>简历</span></router-link>
				<router-link :to="{name:'AppSign'}" tag="li"><i class="fa fa-user-circle" aria-hidden="true"></i><span>我的</span></router-link>
			</ul>
		</footer>

  
 </div>
   


  
</template>

<script>

//import signIn from './components/sign/signIn.vue'
export default {
  name: 'app',
  components:{}

}
</script>

<style lang="css">
#app  ul li.router-link-exact-active{
	    color:#12c4b8;
 }




</style>
