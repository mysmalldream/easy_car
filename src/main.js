// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import routeConfig from './router-config'

// import store from './store.js'

//加载路由中间件
Vue.use(VueRouter)
Vue.use(VueResource)
//导入各个路由模块
import login from "./components/login.vue";//登录界面
import student_manage from "./components/student_manage.vue";//审核管理
import student_coupons from "./components/student_coupons.vue";//学员卡券明细
import student_course from "./components/student_course.vue";//课程报名管理
import student_test from "./components/student_test.vue";//约考记录
import student_issue from "./components/student_issue.vue";//考试发布
import student_topic from "./components/student_topic.vue";//题库管理



//定义路由规则(实例化路由规则对象)
const router = new VueRouter({
  // routes: routeConfig,
  routes:[
    { path: "/", redirect: '/login' }, //默认显示登录界面
    { path: "/login", component:login }, //登录界面
    { path: "/student_manage", component:student_manage }, //审核管理
    { path: "/student_coupons", component:student_coupons }, //学员卡券明细
    { path: "/student_course", component:student_course }, //课程报名管理
    { path: "/student_test", component:student_test }, //约考记录
    { path: "/student_issue", component:student_issue }, //考试发布
    { path: "/student_topic", component:student_topic }, //题库管理
  ]
})

new Vue({
  router,
  // store,
  el: "#app",
  render: h => h(App)
})
