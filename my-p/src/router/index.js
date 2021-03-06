import Vue from 'vue'
import Router from 'vue-router'


import AppMain from '@/components/main/AppMain'
//import AppChat from '@/components/main/AppChat'
import HotPosition from "@/components/position/HotPosition"
import PracticePosition from '@/components/position/PracticePosition'
import ParttimePosition from '@/components/position/parttime'
import PositionDetails from "@/components/position/positionDetails"

import AppMine from "@/components/mine/AppMine"
import AppInvitation from '@/components/mine/AppInvitation'
import AppInvitationDetails from '@/components/mine/AppInvitationDetails'
import AppProgress from '@/components/mine/AppProgress'

import AppResume from '@/components/resume/AppResume'

import AppChat from '@/components/chat/AppChat'
import AppChatDetails from '@/components/chat/chatDetails'
import AppSearch from '@/components/chat/search'

import AppSign from "@/components/sign/signUpandIn"
import AppSignUp from "@/components/sign/signUp"
import AppSignIn from "@/components/sign/signIn"
import AppFindPass from "@/components/sign/reset"
 import AppCity from '@/components/localtion/city'

//import AppPositionMap from '@/components/map/map'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {path: '/',name: 'AppMain',component: AppMain },
    {path:'/HotPosition',name:"HotPosition",component:HotPosition},
    {path:'/PracticePosition',name:"PracticePosition",component:PracticePosition},
    {path:'/ParttimePosition',name:"ParttimePosition",component:ParttimePosition},
     {path:'/PositionDetails',name:"PositionDetails",component:PositionDetails},
    {path:'/AppMine',name:'AppMine',component:AppMine},
    {path:'AppInvitation',name:"AppInvitation",component:AppInvitation},
    {path:'/AppInvitationDetails',name:'AppInvitationDetails',component:AppInvitationDetails},
    {path:'/AppResume',name:'AppResume',component:AppResume},
    {path:'/AppChat',name:'AppChat',component:AppChat},
     {path:'/AppChatDetails',name:'AppChatDetails',component:AppChatDetails},
    {path:'/AppSign',name:'AppSign',component:AppSign},
    {path:'/AppSignUp',name:'AppSignUp',component:AppSignUp},
    {path:'/AppSignIn',name:'AppSignIn',component:AppSignIn},
    {path:'/AppFindPass',name:'AppFindPass',component:AppFindPass},
    {path:'/AppCity',name:'AppCity',component:AppCity},
    {path:'/AppProgress',name:'AppProgress',component:AppProgress},
    {path:'/AppSearch',name:'AppSearch',component:AppSearch}

  ]
})
