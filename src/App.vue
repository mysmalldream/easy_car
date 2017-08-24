<template>
  <div id="app">
    <main>
      <!-- 左侧导航 -->
      <div class="main-left">
        <el-row class="tac">
          <el-col :span="25">
            <el-menu default-active="2" :unique-opened='true' class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" :router=true>

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
                  <el-menu-item index="2-4-1">教练信息详情</el-menu-item>
                  <el-menu-item index="2-4-2">设置教练级别</el-menu-item>
                </el-submenu>
              </el-submenu>

              <el-menu-item index="3">订单管理</el-menu-item>
              <el-menu-item index="4">佣金设置</el-menu-item>

              <el-submenu index="5">
                <template slot="title">广告资讯管理</template>
                <el-menu-item index="5-4-1">首页banner</el-menu-item>
                <el-menu-item index="5-4-2">学车指南</el-menu-item>
              </el-submenu>

              <el-submenu index="6">
                <template slot="title">客服管理</template>
                <el-menu-item index="6-4-1">常见问题</el-menu-item>
                <el-menu-item index="6-4-2">在线反馈</el-menu-item>
              </el-submenu>

              <el-submenu index="7">
                <template slot="title">财务管理</template>
                <el-menu-item index="7-4-1">教练申请提现</el-menu-item>
                <el-menu-item index="7-4-2">教练返佣统计</el-menu-item>
                <el-menu-item index="7-4-3">教练返佣明细</el-menu-item>
                <el-menu-item index="7-4-4">学员申请提现</el-menu-item>
                <el-menu-item index="7-4-5">代理返佣统计</el-menu-item>
                <el-menu-item index="7-4-6">代理返佣明细</el-menu-item>
              </el-submenu>

              <el-submenu index="8">
                <template slot="title">系统设置</template>
                <el-menu-item index="8-4-1">系统消息列表</el-menu-item>
                <el-menu-item index="8-4-2">发送新消息</el-menu-item>
                <el-menu-item index="8-4-3">用户管理</el-menu-item>
                <el-menu-item index="8-4-4">新增用户</el-menu-item>
                <el-menu-item index="8-4-5">个人中心</el-menu-item>
                <el-menu-item index="8-4-6">密码重置</el-menu-item>
              </el-submenu>

            </el-menu>
          </el-col>
        </el-row>
      </div>
      <!-- 右侧主内容区 -->
      <div class="main-right">
        <transition name="fade">
          <router-view class="view"></router-view>
        </transition>
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
      // headerFixed: true,
      filterText: '',
    };
  },
  created: function() {
    // this.$router.push('/activePublic');
    // this.$router.push('/activePublic');
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
    }
  }
}
</script>

<style >
/* 页面初始化 */

body {
  margin: 0 !important;
}


/* #hello{
  padding: 0 !important;
} */

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
}

::-webkit-scrollbar-track {
  background-color: #bee1eb;
}

::-webkit-scrollbar-thumb {
  background-color: #00aff0;
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
  height: 675px;
  /* height: 100%; */
  overflow-y: scroll;
  overflow-x: auto;
}

main .main-right {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: #fff;
  padding: 50px 70px;
}

main .el-menu {
  background-color: none;
}

.el-menu--dark {
  text-align: left;
}
</style>
