<template>

  <div id="app" class="container">
    <router-view/>
	    <footer>
			<ul>
				<router-link :to="{name:'AppMain'}" tag="li">职位</router-link>
				<router-link :to="{name:'AppChat'}" tag="li">聊吧</router-link>
				<li>简历</li>
				<router-link :to="{name:'AppMine'}" tag="li">我的</router-link>
			</ul>
		</footer>
</div>
  
</template>

<script>

export default {
  name: 'app',

  components:{}
}
</script>

<style lang="css">
#app  ul li.router-link-exact-active{
	    background:brown;
 }

 


</style>
