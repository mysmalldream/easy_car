<template>
	<!-- 顶部栏目 -->
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
			active: true,
			filterText: '',
			headerFixed: '',
			user: {
				name: "凌波微步",
				icon: '../static/img/test.jpg'
			},
		};
	},
	methods: {
		logout() {
			this.$router.push('/login');
		}
	},
}
</script>

<style >
/* 各个页面的dialog顶部标题样式 */

.dialog_top .el-dialog__header {
	color: #fff;
	background-color: #3598FE;
	padding: 10px;
	text-align: center;
}

.dialog_top .el-dialog__header span {
	color: #fff;
	letter-spacing: 3px;
	text-align: center;
}



/* 顶部样式 */

header {
	min-width: 100%;
	height: 60px;
	background-color: #3C8DBC;
	position: fixed;
	z-index: 1000;
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
</style>
