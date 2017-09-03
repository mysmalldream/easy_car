<template>
    <div id="hello">
        <!-- 设置教练级别-->
        <div>
            <el-button type="primary" @click="add">添加</el-button>
        </div>
        <ul class="add">
            <li>
                <el-radio class="radio" v-model="radio" label="1">级别1 XXXXXXXXXXXXXXXX</el-radio>
            </li>
            <li>
                <el-radio class="radio" v-model="radio" label="2">级别2 XXXXXXXXXXXXXXXX</el-radio>
            </li>
            <li>
                <el-radio class="radio" v-model="radio" label="3">级别3 XXXXXXXXXXXXXXXX</el-radio>
            </li>
            <li>
                <el-radio class="radio" v-model="radio" label="4">级别4 XXXXXXXXXXXXXXXX</el-radio>
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
            radio: '1',
        }
    },
    methods: {
        add() {
            console.log("添加按钮被点击了");
        }
    },

}
</script>

<style scoped>
/* 自定义样式 */

#hello {
    margin: 20px 20px;
}
.add{
    padding-left: 0px;
}
.add li{
    list-style: none;
    line-height: 30px;
}


</style>
