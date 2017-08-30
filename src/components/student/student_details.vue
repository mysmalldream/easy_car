<template>
  <div id="hello">
    <!-- 学员个人详情页面 -->
    <ul class="student_details">
      <li v-for="(item,index) in lists" :key="item.id">
        {{item.account}}{{item.register_time}}{{item.grade}}{{item.name}}
        <span v-html="item.head"></span>{{item.area}}{{item.bank}} {{item.idcard}}
        <span v-html="item.front"></span>
        <span v-html="item.side"></span>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)

export default {
  name: 'hello',
  data() {
    return {
      lists: [{
        account: '账号：13002918015',
      }, {
        register_time: '注册时间：2017年8月8日',
      }, {
        grade: '身份等级：普通用户',
      }, {
        name: '姓名：薛宝钗',
      }, {
        head: '头像：<img src="../../../static/imgs/test.jpg"></img>',
      }, {
        area: '考场名称：xxx',
      }, {
        bank: '银行卡卡号：6217000000000000000000000000',
      }, {
        idcard: '身份证：610122199011111220',
      }, {
        front: '正：<img src="../../../static/imgs/card.png"></img>',
      }, {
        side: '反：<img src="../../../static/imgs/card.png"></img>',
      }],
    }
  }
}
</script>

<style scoped>
#hello {
  margin: 20px 20px;
}

.student_details {
  padding: 0;
}

.student_details li {
  list-style: none;
  line-height: 25px;
  letter-spacing: 1px;
  font-size: 14px;
}
</style>
