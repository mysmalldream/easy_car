// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Element from 'element-ui'
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
import area_manage from "./components/area_manage/area_manage.vue";//场地管理
import order_manage from "./components/order_manage/order_manage.vue";//场地管理
import home_banner from "./components/ad_manage/home_banner.vue";//首页banner
import learncar_guide from "./components/ad_manage/learncar_guide.vue";//学车指南
import common_question from "./components/service_manage/common_question.vue";//常见问题
import online_call from "./components/service_manage/online_call.vue";//在线反馈

import money_set from "./components/finance_mange/money_set.vue";//佣金设置
import coach_cash from "./components/finance_mange/coach_cash.vue";//教练提现申请
import coach_getmoney from "./components/finance_mange/coach_getmoney.vue";//教练收入
import coach_income from "./components/finance_mange/coach_income.vue";//教练收入明细
import student_cash from "./components/finance_mange/student_cash.vue";//学员提现申请
import agent_finance from "./components/finance_mange/agent_finance.vue";//代理人财务
import back_money from "./components/finance_mange/back_money.vue";//返佣明细
import agenter_finance from "./components/finance_mange/agenter_finance.vue";//代理商财务
import first_backmoney from "./components/finance_mange/first_backmoney.vue";//一级返佣明细
import second_backmoney from "./components/finance_mange/second_backmoney.vue";//二级返佣明细

import system_message from "./components/system_setting/system_message.vue";//系统消息列表
import user_manage from "./components/system_setting/user_manage.vue";//用户管理
import psw_reset from "./components/system_setting/psw_reset.vue";//密码重置





// 定义路由规则(实例化路由规则对象)
const router = new VueRouter({
  // routes: routeConfig,
  routes:[
    { path: "/", redirect: '/login' }, //默认显示登录界面, redirect: '/login'
    { path: "/login", component:login }, //登录界面
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
    { path: "/area_manage", component:area_manage }, //场地管理
    { path: "/order_manage", component:order_manage }, //场地管理
    { path: "/home_banner", component:home_banner }, //首页banner
    { path: "/learncar_guide", component:learncar_guide }, //学车指南
    { path: "/common_question", component:common_question }, //常见问题
    { path: "/online_call", component:online_call }, //在线反馈

    { path: "/money_set", component:money_set }, //佣金设置
    { path: "/coach_cash", component:coach_cash }, //教练提现申请
    { path: "/coach_getmoney", component:coach_getmoney }, //教练收入
    { path: "/coach_income", component:coach_income }, //教练收入明细
    { path: "/student_cash", component:student_cash }, //学员提现申请
    { path: "/agent_finance", component:agent_finance }, //代理人财务
    { path: "/back_money", component:back_money }, //返佣明细
    { path: "/agenter_finance", component:agenter_finance }, //代理商财务
    { path: "/first_backmoney", component:first_backmoney }, //一级返佣明细
    { path: "/second_backmoney", component:second_backmoney }, //二级返佣明细

    { path: "/system_message", component:system_message }, //系统消息列表
    { path: "/user_manage", component:user_manage }, //用户管理
    { path: "/psw_reset", component:psw_reset }, //密码重置
    
    
  ]
})

new Vue({
  router,
  el: "#app",
  render: h => h(App)
})
