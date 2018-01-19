   <template>
	<div class="chatroom">
		<TitleNav>
			<span slot="info">
				聊天首页
			</span>
			<router-link :to="{name:'AppSearch'}" slot="img" :src="'../../../static/img/chat/sousu.png'" alt="" tag="img"/>
		</TitleNav><!--聊吧顶部可放组件-->
		<ul class="navv">
			<li @click='typeClick("all")' :class="{showborder:type == 'all'}">全部</li>
			<li @click='typeClick("schoolfriends")' :class="{showborder:type == 'schoolfriends'}">校友</li>
			<li @click='typeClick("friends")' :class="{showborder:type == 'friends'}">同行</li>
			<li @click='typeClick("hr")' :class="{showborder:type == 'hr'}">HR</li>
		</ul>
		<appChatList  :pros="pros"></appChatList>
		
	</div>
	
</template>

<script>
	import appChatList from './AppChatList'
	import TitleNav from '../pubcomponents/TopNav3'
	export default{
		name:"AppChat",
		data(){
			return {
				activeIndex:0,
				type:'all',
				pros:[],
				allpros:[]
			}
		},
		methods:{
			typeClick:function(type){
				this.type = type
//				console.log(this.type)
				this.changeType(type)
			},
			changeType:function(type){
				let pros = []
				if(type == "schoolfriends"){
//					alert(1)
					this.allpros.map((item,i)=>{
						if(item.ref == "schoolfriends"){
							pros.push(item)
//							console.log(pros)
						}
					})
					return this.pros = pros
				}else
				if(this.type == "friends"){
					this.allpros.map((item,i)=>{
						if(item.ref == "friends"){
							pros.push(item)
//							console.log(pros)
						}
					})
					return this.pros = pros
				}else
				if(this.type == "hr"){
					this.allpros.map((item,i)=>{
						if(item.ref == "hr"){
							pros.push(item)
//							console.log(pros)
						}
					})
					return this.pros = pros
				}else{
					return this.pros = this.allpros
				}
			}
		},
		mounted(){
			fetch('/api/chatwith/chat').then((response)=>response.json())
			  .then((res)=>{
   		  	   console.log(res.data.subjects);
			  	this.allpros=res.data.subjects;
			  	this.pros = this.allpros;
//			  	console.log(this.allpros);
			  })
		},
		
		components:{appChatList,TitleNav}
		
		

		
	}
</script>

<style lang="scss" scoped>

	@import '../../style/usage/core/reset.scss';
.chatroom{
    width:100%;
    height:100%;
    background:#fff;
    display:flex;
    flex-direction:column;
	   .head{
	    width:100%;
	    height:0.44rem;
	    background: #12c4b8;
	
	    }
		    .navv{
		    width:100%;
		    font-size: 0.18rem;
		    @include flexbox();
		    @include justify-content(space-around);
			    li{
			        width:0.4rem;
			        height:0.4rem;
			        
			        text-align: center;
			        line-height: 0.4rem;
			        color:#333333;
			        
			    }
			    .showborder{
			    	@include border(0 0 1px 0,#12c4b8,solid)
			    }
			}

	}

</style>