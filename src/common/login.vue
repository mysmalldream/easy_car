<template>
  <!-- login页面 -->
  <div class="login">
    <p>易学车后台管理系统</p>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="9">
        <div class="grid-content bg-purple-light">
          <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label=" 用 户 名 : " prop="name">
              <el-input type="text" v-model="ruleForm2.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label=" 登 录 密  码: " prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label=" 验 证 码 : " prop="verify">
              <el-input class="yanzhengma" type="text" v-model="ruleForm2.verify" auto-complete="off" style="width=100"></el-input>
              <span class="fresh">
                <img class="imgs" :src="url" alt="">
                <img class="pics" @click="clickPic" src="../../static/img/fresh.png" alt="">
              </span>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
          </el-form> 
        </div>
      </el-col>
    </el-row>
    <h5>©易学车版权所有</h5>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import commonAPI from '../common/commonapi.js'    //公共域名文件  
Vue.use(Element)

export default {
  data() {
    var validatePass = (rule, value, callback) => {
    };
    return {
      ruleForm2: {
        pass: '',
        name: '',
        verify: ''
      },
      url: 'http://kecikeci.iok.la/admin/user/imagecode.html',
      lists: [],
      rules2: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入登录密码', trigger: 'blur' }
        ],
        verify: [
          { required: true, message: '验证码不能为空', trigger: 'blur' }
        ],
      }
    };
  },
  created() {
    this.yanzhengma();
  },
  methods: {
    submitForm(formName) {
      this.$router.push('/student_message');  //默认登录的页面
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    clickPic() { 
      // alert("点击刷新");
      this.yanzhengma(); 
      console.log('dianji')
    },
    yanzhengma() {  
      // console.log(this.$http.post.url);
      this.$http.post(commonAPI.apidomain + "/admin/user/imagecode.html?"+ Math.random())
        .then(function(res ) {
          console.log(res );
          console.log(3421);
          // if (res.status != 0) {    //服务器错误提示信息
          //   alert("服务器错误");
          //   return;
          // };
          // this.lists = res.headers;
        })
    }
  },

}
</script>
<style scoped>
/* 自定义的样式 */

.login {
  /* background-image: url('/static/img/login.png'); */
  background-image: url('../assets/img/login.png');
  background-repeat: no-repeat;
  position: fixed;
  z-index: 1000000;
  width: 100%;
  height: 100%;
  margin-left: -210px;
  background-size: 100%;
}

.login p {
  text-align: center;
  font-size: 35px;
  letter-spacing: 5px;
  margin-top: 50px;
  padding-top: 30px;
  color: #fff;
}

h5 {
  text-align: center;
  margin-top: 170px;
  color: #ccc;
}

form {
  /* background-color:rgba(f, f, f, 0.1); */
  background-color: #FFF;
  padding: 20px;
  padding-bottom: 5px;
  border-radius: 15px;
  box-shadow:inset 0 0 40px #0CC;    
}

.el-input {
  width: 300px;
}

.el-button--primary {
  margin-left: 30px;
}

.el-button--default {
  margin-left: 100px;
}

.el-form-item>label {
  color: #000 !important;
}

.yanzhengma {
  width: 150px;
}

.fresh .imgs {
  margin-right: 155px;
  float: right;
}

.fresh .pics {
  width: 30px;
  height: 30px;
  line-height: 30px;
  float: right;
  margin-top: -32px;
  margin-right: 100px;
  cursor: pointer;
}

.fresh span {
  float: right;
}
</style>

