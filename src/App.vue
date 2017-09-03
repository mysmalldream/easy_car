<template>
    <div id="app">
        <!-- 顶部 -->
        <header>
            <nav class="fixclear">
                <div class="nav-left">
                    易学车后台管理系统
                </div>
                <div class="nav-right">
                    <ul>
                        <li>
                            <img :src="user.icon" />
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    {{user.name}}
                                    <i class="el-icon-caret-bottom el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>
                                        <span @click="logout">退出登录</span>
                                        <!-- <div>退出登录</div> -->
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <main>
            <!-- 左侧导航 -->
            <div class="main-left">
                <el-row class="tac">
                    <el-col :span="25">
                        <el-menu default-active="2" :unique-opened='true' class="el-menu-vertical-demo" theme="dark" :router=true>

                            <el-submenu index="1">
                                <template slot="title">学员端管理</template>
                                <el-submenu index="1-4">
                                    <template slot="title">学员信息</template>
                                    <el-menu-item index="student_message">学员信息概览</el-menu-item>
                                    <el-menu-item index="student_manage">审核管理</el-menu-item>
                                    <el-menu-item index="student_course">课程报名管理</el-menu-item>
                                    <el-menu-item index="student_test">约考记录</el-menu-item>
                                    <el-menu-item index="student_issue">考试发布</el-menu-item>
                                    <el-menu-item index="student_topic">题库管理</el-menu-item>
                                </el-submenu>
                            </el-submenu>

                            <el-submenu index="2">
                                <template slot="title">教练端管理</template>
                                <el-submenu index="2-4">
                                    <template slot="title">教练信息</template>
                                    <el-menu-item index="coach_message">教练信息概览</el-menu-item>
                                    <el-menu-item index="coach_details">教练信息详情</el-menu-item>
                                    <el-menu-item index="set_rank">设置教练级别</el-menu-item>
                                    <el-menu-item index="area_distribute">场地分配</el-menu-item>
                                </el-submenu>
                            </el-submenu>

                            <el-menu-item index="area_manage">场地管理</el-menu-item>
                            <el-menu-item index="order_manage">订单管理</el-menu-item>

                            <el-submenu index="3">
                                <template slot="title">广告资讯管理</template>
                                <el-menu-item index="home_banner">首页banner</el-menu-item>
                                <el-menu-item index="learncar_guide">学车指南</el-menu-item>
                            </el-submenu>

                            <el-submenu index="4">
                                <template slot="title">客服管理</template>
                                <el-menu-item index="common_question">常见问题</el-menu-item>
                                <el-menu-item index="online_call">在线反馈</el-menu-item>
                            </el-submenu>

                            <el-submenu index="5">
                                <template slot="title">财务管理</template>
                                <el-menu-item index="money_set">佣金设置</el-menu-item>
                                <el-submenu index="5-40">
                                    <template slot="title">教练端财务</template>
                                    <el-menu-item index="coach_cash">教练提现申请</el-menu-item>
                                    <el-menu-item index="coach_getmoney">教练收入</el-menu-item>
                                </el-submenu>
                                <el-submenu index="5-2">
                                    <template slot="title">学员端财务</template>
                                    <el-menu-item index="student_cash">学员提现申请</el-menu-item>
                                </el-submenu>
                                <el-submenu index="5-3">
                                    <template slot="title">代理人财务</template>
                                    <el-menu-item index="agent_finance">代理人财务</el-menu-item>
                                    <el-menu-item index="back_money">返佣明细</el-menu-item>
                                </el-submenu>
                                <el-submenu index="5-4">
                                    <template slot="title">代理商财务</template>
                                    <el-menu-item index="agenter_finance">代理商财务</el-menu-item>
                                    <el-menu-item index="first_backmoney">一级返佣明细</el-menu-item>
                                    <el-menu-item index="second_backmoney">二级返佣明细</el-menu-item>
                                </el-submenu>
                            </el-submenu>

                            <el-submenu index="6">
                                <template slot="title">系统设置</template>
                                <el-menu-item index="system_message">系统消息列表</el-menu-item>
                                <el-menu-item index="send_message">发送新消息</el-menu-item>
                                <el-menu-item index="user_manage">用户管理</el-menu-item>
                                <el-menu-item index="add_user">新增用户</el-menu-item>
                                <el-menu-item index="psw_reset">密码重置</el-menu-item>
                            </el-submenu>

                        </el-menu>
                    </el-col>
                </el-row>
            </div>
            <!-- 右侧主内容区 -->
            <div class="main-right">
                <router-view class="view"></router-view>
            </div>
        </main>
    </div>
</template>

<script>

import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import $ from 'jquery'


Vue.use(Element)


export default {
    name: 'app',
    data: function() {
        return {
            active: true,
            filterText: '',
            headerFixed: '',
            user: {
                name: "凌波微步",
                icon: '../static/imgs/test.jpg'
            },
        };
    },
    created: function() {
    },
    methods: {
        filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },
        logout() {
            this.$router.push('/login');
            console.log(12353414);
        }
    },
    watch: {
        '$route': function(to, from) {
            if (to.path == '/activePublic') {
                this.active = true;
            } else if (to.path == '/activeManage') {
                this.active = false;
            }
        },
        filterText(val) {
            this.$refs.tree2.filter(val);
        },
    }
}
</script>

<style >

/* 导航栏菜单选中效果 */

.isActive {
  color: #20a0ff!important;
}

#app main .aside .is-active {
  color: #475669;
}


/* 卡片 */

.el-card {
  overflow: visible!important;
}
/* 顶部样式 */

header {
    background-color: #324157;
    min-width: 1200px;
    height: 60px;
    background-color: #3C8DBC;
}

.nav-left {
    float: left;
    margin-left: 30px;
    height: 60px;
    color: white;
    line-height: 60px;
    font-size: 22px;
    padding: 0 0 0 10px;
}

.nav-right {
    float: right;
    font-size: 0;
    padding-right: 30px;
}

.nav-right li {
    float: left;
}


.nav-right img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 10px 5px;
}

.nav-right div {
    cursor: pointer;
    float: right;
    color: white;
    font-size: 16px;
    line-height: 60px;
}

.el-icon-caret-bottom {
    color: #D3DCE6;
    font-size: 12px;
}



/* 页面初始化 */

body {
    margin: 0 !important;
}

#app {
    min-width: 1200px;
    margin: 0 auto;
    font-size: 10px;
    font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;
}



/* 侧边栏 */

.el-tree-node__content {
    line-height: 24px !important;
    height: 24px !important;
    cursor: pointer;
}

main .main-right {
    padding: 0px !important;
}

main .main-left {
    background-color: #324057 !important;
}

.el-row {
    margin-top: 20px;
}

.el-menu-item,
.el-submenu__title {
    height: 30px !important;
    line-height: 30px !important;
}



/* 滚动条样式 */

::-webkit-scrollbar {
    width: 5px;
    height: 10px;
}

::-webkit-scrollbar-track {
    background-color: #bee1eb;
}

::-webkit-scrollbar-thumb {
    background-color: #bbb;
}



/* 主内容区 */

main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    border: solid 0px #E9ECF1;
    background-color: #FCFCFC;
}

main .main-left {
    text-align: center;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 20px;
    flex: 0 0 210px;
    height: 775px;
    overflow-y: scroll;
    overflow-x: auto;
    padding-top: 20px;
}

main .main-right {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background-color: #fff;
}

main .el-menu {
    background-color: none;
}

.el-menu--dark {
    text-align: left;
}

.el-row {
    margin-top: 0px;
}
</style>
