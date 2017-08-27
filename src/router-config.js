import Vue from 'vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter);

//导入各个路由模块
import login from "./components/login.vue";//登录界面
import student_message from "./components/student/student_message.vue";//学员信息概览
import student_manage from "./components/student/student_manage.vue";//审核管理
import student_coupons from "./components/student/student_coupons.vue";//学员卡券明细
import student_course from "./components/student/student_course.vue";//课程报名管理
import student_test from "./components/student/student_test.vue";//约考记录
import student_issue from "./components/student/student_issue.vue";//考试发布
import student_topic from "./components/student/student_topic.vue";//题库管理
import student_details from "./components/student/student_details.vue";//个人信息详情


let router = new vueRouter({
    routes: [
        { path: "/", redirect: '/login' }, //默认显示登录界面
        { path: "/login", component:login }, //登录界面
        { path: "/student_message", component:student_message }, //学员信息概览
        { path: "/student_manage", component:student_manage }, //审核管理
        { path: "/student_coupons", component:student_coupons }, //学员卡券明细
        { path: "/student_course", component:student_course }, //课程报名管理
        { path: "/student_test", component:student_test }, //约考记录
        { path: "/student_issue", component:student_issue }, //考试发布
        { path: "/student_topic", component:student_topic }, //题库管理
        { path: "/student_details", component:student_details }, //个人信息详情
    ]
});

// export default router