<template>
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
            <!-- <el-menu-item index="send_message">发送新消息</el-menu-item> -->
            <el-menu-item index="user_manage">用户管理</el-menu-item>
            <el-menu-item index="add_user">新增用户</el-menu-item>
            <el-menu-item index="psw_reset">密码重置</el-menu-item>
          </el-submenu>

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import $ from 'jquery'


Vue.use(Element)


export default {
  data: function() {
    return {
    };
  },
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


/* 侧边栏 */

.el-tree-node__content {
  line-height: 24px !important;
  height: 24px !important;
  cursor: pointer;
}

main .main-right {
  margin-left: 210px;
  width: 100%;
}

main .main-left {
  background-color: #324057 !important;
}

.el-menu-item,
.el-submenu__title {
  height: 33px !important;
  line-height: 33px !important;
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
  flex: 0 0 210px;
  width: 210px;
  padding-top: 70px;
  position: fixed;
  height: 100%;
}

main .main-right {
  flex: 5;
  background-color: #fff;
}

main .el-menu {
  background-color: none;
}

.el-menu--dark {
  text-align: left;
}
</style>
