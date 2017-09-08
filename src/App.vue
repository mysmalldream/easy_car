<template>
    <div id="app">
        <!-- 顶部 -->
        <Headers></Headers>
        <main>
            <!-- 左侧导航栏 -->
            <Sliders></Sliders>
            <!-- 右侧主内容区 -->
            <RightMain></RightMain>
        </main>
    </div>
</template>

<script>

import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Headers from './common/header'    //顶部
import Sliders from './common/slider'     //左侧  
import RightMain from './common/rightMain'  //右侧
import $ from 'jquery'

Vue.use(Element)

export default {
    name: 'app',
    components: {    
        Headers, Sliders,RightMain
    },
}
</script>
<style >

/* 滚动条样式 */
/* ::-webkit-scrollbar {
    width: 5px;
    height: 10px;
}

::-webkit-scrollbar-track {
    background-color: #bee1eb;
}

::-webkit-scrollbar-thumb {
    background-color: #bbb;
} */

</style>
