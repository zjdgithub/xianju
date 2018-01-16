<template>
	<div class="findcity">
	<TitleNav>选择城市</TitleNav>
	<div class="nowCity">
	     <p><img src="../../../static/img/city/nowcity.png" alt="pic" title="兼职" /><span>所在城市</span></p>
	     <div id="" class="cityname">
	     	<span>北京</span>
	     </div>
	</div>
	<div class="hotCity">
	     <p><img src="../../../static/img/city/hot.png" alt="pic" title="兼职" /><span>热门城市</span></p>
	     <div id="" class="cityname">
	     	<span @click="changeCity(hotcity)"   v-for="hotcity in hotcitys" >{{hotcity}}</span>
	     </div>
	</div>
	<div class="find" id="Acity" name="Acity">
	     <p><span>A</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Acitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	<div class="find" id="Bcity" name="Bcity">
	     <p><span>B</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Bcitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	<div class="find" id="Ccity" name="Ccity">
	     <p><span>C</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Ccitys" @click="change(cityf)">{{cityf}}</span>
	     </div>
	</div>
	<div class="find" id="Dcity" name="Dcity">
	     <p><span>D</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Dcitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	<div class="find" id="Ecity" name="Ecity">
	     <p><span>E</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Ecitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	<div class="find" id="Fcity" name="Fcity">
	     <p><span>F</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Fcitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	
	<div class="find" id="Gcity" name="Gcity">
	     <p><span>G</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Gcitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	<div class="find" id="Hcity" name="Hcity">
	     <p><span>H</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Hcitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	<div class="find" id="Jcity" name="Jcity">
	     <p><span>J</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Jcitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	<div class="find" id="Kcity" name="Kcity">
	     <p><span>K</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Kcitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	<div class="find" id="Lcity" name="Lcity">
	     <p><span>L</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Lcitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	<div class="find" id="Mcity" name="Mcity">
	     <p><span>M</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Mcitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	<div class="find" id="Ncity" name="Ncity">
	     <p><span>N</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Ncitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	<div class="find" id="Pcity" name="Pcity">
	     <p><span>P</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Pcitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	<div class="find" id="Qcity" name="Qcity">
	     <p><span>Q</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Qcitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	<div class="find" id="Rcity" name="Rcity">
	     <p><span>R</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Rcitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	<div class="find" id="Scity" name="Scity">
	     <p><span>S</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Scitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	<div class="find" id="Tcity" name="Tcity">
	     <p><span>T</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Tcitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	<div class="find" id="Wcity" name="Wcity">
	     <p><span>W</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Wcitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	<div class="find" id="Xcity" name="Xcity">
	     <p><span>X</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Xcitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	<div class="find" id="Ycity" name="Ycity">
	     <p><span>Y</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Ycitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	<div class="find" id="Zcity" name="Zcity">
	     <p><span>Z</span></p>
	     <div id="" class="cityname">
	     	<span v-for="cityf in Zcitys" @click="changeCity(cityf)">{{cityf}}</span>
	     </div>
	</div>
	
	<div class="az">
		<ul>
			<li class="animated jello" v-for="cityId in citysID"><a :href="'#'+cityId+'city'">{{cityId}}</a></li>
		</ul>
	</div>
	
</div>
</template>

<script>
	import TitleNav from '../pubcomponents/TopNav'
	import {mapState,mapActions} from 'vuex'
	export default{
		name:'AppCity',
		components:{
			TitleNav  
		},
		data(){
			return {
				
				citysID:["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"],
				hotcitys:["全国","北京","上海","深圳","广州","杭州","成都","南京","武汉","厦门","苏州","西安"],
				Acitys:["鞍山","阿克苏","安康","阿克苏","阿勒泰","安阳","安庆","阿拉尔","安顺","安定","阿里"],
				Bcitys:["毕节","北海","北京","本溪","巴中","百色","亳州","白山","白城","宝山","包头","保定","宝鸡"],
				Ccitys:["朝阳","滁州","常州","承德","成都","重庆","长春","昌江","赤峰","楚雄","长沙"],
				Dcitys:["都江宴","大理","东莞","德阳","德宏州","东营","大连","大庆","丹东","达州","定州","大同"],
				Ecitys:["鄂尔多斯","鄂州","恩施"],
				Fcitys:["防城港","抚顺","阜阳","抚州","福州","丰城","釜山","佛山","阜新","富阳"],
				Gcitys:["广安","桂林","广元","广州","公主岭市","贵港","固始县","固原","贵阳","高邮","赣州"],
				Hcitys:["惠州","合作","黄山","海东","黑河","呼伦贝尔","河池","葫芦岛·","鹤岗","怀化","海北州","和龙市","淮南","桦甸市",
				  "菏泽","淮安","邯郸","汉中","杭州","黄冈","呼和浩特","洪湖","黄石","红河州","合肥","哈尔滨","衡阳","衡水","海口","河源","湖州","淮北"
				],
				Jcitys:["焦作","晋中","荆州","吉安","济宁","丰城","釜山","佛山","阜新","富阳"],
				Kcitys:["昆明","开封","开原"],
				Lcitys:["来宾","临汾","乐山","临夏州","陇南","漯河","聊城","莱芜","六安","连云港","丽江","凉山州","辽源","临高","乐东","辽阳","廊坊","洛阳","娄底","兰州",
				  "临沧","柳州","临济","丽水","六盘水","吕梁","泸州","临海","龙岩"
				],
				Mcitys:["牡丹江","绵阳","茂名","马鞍山","眉山","梅州"],
				Ncitys:["南通","南阳","怒江州","南宁","南京","宁德","南充","内江","南平","南昌","宁波"],
				Pcitys:["萍乡","濮阳","平顶山","普洱","攀枝花","莆田","盘锦","邳州"],
				Qcitys:["钦州","曲靖","庆阳","启东","衢州","清远","黔南州","泉州","潜江","齐齐哈尔","琼海","青岛","秦皇岛","七台河","黔西南州","黔东南州"],
				
				Rcitys:["日照","瑞安"],
				
				Scitys:["遂宁","沈阳","绥化","上海","三明","朔州","商洛","深圳","上饶","商丘","随州","宿迁","石家庄","三亚","十堰","宿州","汕尾","松原","双鸭山","邵阳","四平","绍兴"
				,"石嘴山","苏州","汕头","韶关"],
				Tcitys:["铜陵","铜仁","泰安","铁岭","太原","屯昌","唐山","天津","泰州","天水","通化","天门","台州","通辽"],
				Wcitys:["吴中","潍坊","芜湖","威海","文山","文昌","武汉","五指山","梧州","武威","乌鲁木齐","乌兰察布","温州","五家渠","渭南","无锡","涡阳"],
				Xcitys:["信阳","许昌","西双版纳","邢台","咸宁","兴义","湘江市","新乡","孝感","忻州","湘西州","仙桃","兴安盟","锡林郭勒盟","西宁","锡林浩特","新余","宣城","咸阳","西安","襄阳","湘潭","徐州","厦门"],
				Ycitys:["玉溪","盐城","岳阳","宜昌","雅安","宜宾","阳泉","玉林","营口","宜春","运城","鹰潭","延边","银川","榆林","伊春","阳江","扬州","益阳","西安","永州","延安","烟台","延吉","云浮"],
				Zcitys:["肇庆","漳州","周口","镇江","驻马店","资阳","自贡","中山","遵义","株洲","湛江","昭通","张家界","张家口","枣庄","中卫","淄博","珠海","郑州","舟山"]
				
			}
		},
		computed:{
		
		},
		methods:{
			...mapActions({'changeC':'changeCity'}),
			changeCity:function(city){
				this.changeC(city);
				window.history.go(-1);
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
  @import '../../style/usage/modules/city/AppCity.scss'
</style>