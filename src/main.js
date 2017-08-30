// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Element from 'element-ui'
// import {routeConfig} from './router-config'   //引入路由配置
// import routeConfig from './router-config'
import 'element-ui/lib/theme-default/index.css'




//加载路由中间件
Vue.use(Element)
Vue.use(VueRouter)
Vue.use(VueResource)

//定义路由
// const router = new VueRouter({
//   routes: routeConfig
// })
// console.log(routeConfig);
//导入各个路由模块
import login from "./common/login.vue";//登录界面
import Index from "./common/Index.vue";//默认的首页面
import student_message from "./components/student/student_message.vue";//学员信息概览
import student_manage from "./components/student/student_manage.vue";//审核管理
import other_fee from "./components/student/other_fee.vue";//其他费用
import student_coupons from "./components/student/student_coupons.vue";//学员卡券明细
import student_test from "./components/student/student_test.vue";//约考记录
import student_issue from "./components/student/student_issue.vue";//考试发布
import student_topic from "./components/student/student_topic.vue";//题库管理
import student_details from "./components/student/student_details.vue";//个人信息详情
import agent_details from "./components/student/agent_details.vue";//代理详情页面
import student_course from "./components/student/student_course.vue";//课程报名管理

import coach_message from "./components/coach/coach_message.vue";//教练信息概览
import coach_details from "./components/coach/coach_details.vue";//教练个人信息详情
import set_rank from "./components/coach/set_rank.vue";//设置教练级别
import area_distribute from "./components/coach/area_distribute.vue";//场地分配




// 定义路由规则(实例化路由规则对象)
const router = new VueRouter({
  // routes: routeConfig,
  routes:[
    { path: "/" }, //默认显示登录界面, redirect: '/login'
    // { path: "/login", component:login }, //登录界面
    { path: "/Index", component:Index }, //登录界面
    { path: "/student_message", component:student_message }, //学员信息概览
    { path: "/student_manage", component:student_manage }, //审核管理
    { path: "/other_fee", component:other_fee }, //其他费用
    { path: "/student_coupons", component:student_coupons }, //学员卡券明细
    { path: "/student_test", component:student_test }, //约考记录
    { path: "/student_issue", component:student_issue }, //考试发布
    { path: "/student_topic", component:student_topic }, //题库管理
    { path: "/student_details", component:student_details }, //个人信息详情
    { path: "/agent_details", component:agent_details }, //代理详情页面
    { path: "/student_course", component:student_course }, //课程报名管理

    { path: "/coach_message", component:coach_message }, //教练信息概览
    { path: "/coach_details", component:coach_details }, //教练个人信息详情
    { path: "/set_rank", component:set_rank }, //设置教练级别
    { path: "/area_distribute", component:area_distribute }, //场地分配
    
  ]
})

new Vue({
  router,
  el: "#app",
  render: h => h(App)
})
