import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import AppMain from '@/components/main/AppMain'
import AppChat from '@/components/main/AppChat'
import HotPosition from "@/components/position/HotPosition"
import PracticePosition from '@/components/position/PracticePosition'
import ParttimePosition from '@/components/position/parttime'
import AppMine from "@/components/mine/AppMine"
import AppInvitation from '@/components/mine/AppInvitation'
import AppInvitationDetails from '@/components/mine/AppInvitationDetails'
import AppProgress from '@/components/mine/AppProgress'
import AppPositionMap from '@/components/map/map'
Vue.use(Router)

export default new Router({                     
  routes: [
    {path: '/',name: 'AppMain',component: AppMain },
    {path:'/AppChat',name:"AppChat",component:AppChat},
    {path:'/HotPosition',name:"HotPosition",component:HotPosition},
    {path:'/PracticePosition',name:"PracticePosition",component:PracticePosition},
    {path:'/ParttimePosition',name:"ParttimePosition",component:ParttimePosition},
    {path:'/AppMine',name:'AppMine',component:AppMine},
    {path:'AppInvitation',name:"AppInvitation",component:AppInvitation},
    {path:'/AppInvitationDetails',name:'AppInvitationDetails',component:AppInvitationDetails},
    {path:'/AppProgress',name:'AppProgress',component:AppProgress},
    {path:'/AppMap',name:'AppMap',component:AppPositionMap}
  ]
})
