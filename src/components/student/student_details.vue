<template>
  <div id="hello">
    <!-- 学员个人详情页面 -->
    <ul class="student_details">
      <li> 账号：13002918015</li>
      <li> 注册时间：2017年8月8日</li>
      <li> 身份等级：代理人</li>
      <li> 姓名：薛宝钗</li>
      <li> 头像：<img src='../../../static/imgs/test.jpg'></img>
      </li>
      <li> 电话：13002918015</li>
      <li> 银行卡卡号：6217000000000000000000000000</li>
      <li> 身份证：610122199011111220</li>
      <li> 正：<img src='../../../static/imgs/test.jpg'></img>
      </li>
      <li> 反：<img src='../../../static/imgs/test.jpg'></img>
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
  name: 'hello'
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

.student_details li:nth-of-type(5)>img {
  width: 100px;
  height: 100px;
  margin-left: 25px;
}

.student_details li:nth-of-type(9)>img,
li:nth-of-type(10)>img {
  width: 240px;
  height: 151px;
  margin-left: 25px;
}
</style>
