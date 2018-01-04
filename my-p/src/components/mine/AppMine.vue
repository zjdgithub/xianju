<template>
	<div class="appmine">
		   <div class="top">
				<h1>我的</h1>
				<div class="show-info">
					<div class="pic">
						头像
					</div>
					<div class="edit-mine">
						编辑个人资料
					</div>
					
				</div>
			</div>
			<div class="nav_mine">
				<ul>
					<router-link :to="{name:'AppInvitation'}" tag="li">面试邀请</router-link>
					<router-link :to="{name:'AppProgress'}" tag="li">投递进展</router-link>
					<li>关注公司</li>
				</ul>
			</div>
			<div class="mine_top">
				<ul>
					<li>
					<div>
					<span>图标</span>
					<span>谁看过我</span>
					</div>
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
					
					</li>
					<li>
					<div>
					<span>图标</span>
					<span>消息通知</span>
					</div>
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
					
					</li>
					<li class="noborder">
					<div>
					<span>图标</span>
					<span>职位珍藏</span>
					</div>
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
					
					</li>
				</ul>
			</div>
			<div class="mine_bottom">
				<ul>
					<li>
					<div>
					<span>图标</span>
					<span>帮助与反馈</span>
					</div>
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
					
					</li>
					
					<li class="noborder">
					<div>
					<span>图标</span>
					<span>设置</span>
					</div>
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
					
					</li>
				</ul>
			</div>
		
	</div>
</template>

<script>
	export default{
		name:"AppMine",
	}
</script>

<style lang="scss">
	@import "../../style/usage/modules/mine/AppMine.scss";
</style>