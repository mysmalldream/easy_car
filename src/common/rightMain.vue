<template>
  <!-- 右侧主内容区 -->
  <div class="main-right">
    <router-view class="view"></router-view>
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
/* 页面初始化 */

body {
  margin: 0 !important;
}
/* 右侧主内容区 */
main .main-right {
  flex: 1;
  /* position: fixed; */
  padding-right: 10px;
}

</style>
