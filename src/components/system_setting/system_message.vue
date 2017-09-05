<template>
  <div id="hello">
    <!-- 系统消息列表 -->
    <!-- 查询 -->
    <div class="query">
      <el-form action="">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <div class="block">
                <span class="demonstration">发送时间:</span>
                <el-date-picker v-model="value3" type="date" placeholder="发送日期">
                </el-date-picker> -----
                <el-time-picker v-model="value4" :picker-options="{selectableRange: '00:00:00 - 23:00:00'}" placeholder="发送时间">
                </el-time-picker>
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="choose">
          <el-form>
            <label>标题:
              <el-input type="text" v-model="input1" placeholder="请输入您的姓名"></el-input>
            </label>
            <label>接收对象:
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </label>
            <label>发送人:
              <el-input type="text" v-model="input2" placeholder="请输入您的电话"></el-input>
            </label>
            <el-button @click="onSubmit" type="primary">查询</el-button>
            <el-button type="success" @click="dialogCreateVisible = true">发送新消息</el-button>
          </el-form>
          <!-- 发送新消息弹窗-->
          <el-dialog title="新消息" v-model="dialogCreateVisible" :close-on-click-modal="false" :close-on-press-escape="false" top=15% size='mini' custom-class='dialog_top'>
            <div class="refuse">
              <el-form id="#create" :model="create" ref="create" label-width="50px">
                <el-form-item label="标题 :">
                  <el-input class="popup" v-model="formInline.user" placeholder="请输入主题"></el-input>
                </el-form-item>
                <el-form-item label="内容 :">
                  <el-input resize=none type="textarea" :autosize="{ minRows:5, maxRows:13}" placeholder="请输入内容..." v-model="textarea">
                  </el-input>
                </el-form-item>
                <el-form-item label="对象 :">
                  <el-select v-model="value1" placeholder="请选择">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" size="large" @click="createUser">发 送</el-button>
              </div>
            </div>
          </el-dialog>
        </div>
      </el-form>
    </div>
    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 100%" :stripe='true'>
      <el-table-column align='center' prop="num" label="序号" min-width="50">
      </el-table-column>
      <el-table-column align='center' prop="title" label="标题" min-width="200">
      </el-table-column>
      <el-table-column align='center' prop="content" label="内容" min-width="90">
        <template scope="scope">
          <el-button type="text" size="mini">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column align='center' prop="receive" label="接收对象" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="sender" label="发送人" min-width="90">
      </el-table-column>
      <el-table-column align='center' prop="send_time" label="发送时间" min-width="100">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/index.js'

Vue.use(Element)

export default {
  name: 'hello',
  methods: {
    onSubmit() {
      console.log('查询按钮被点击了!');
    },
    // 创建用户
    createUser() {
      // 主动校验
      this.$refs.create.validate((valid) => {
        if (valid) {
          this.create.id = getuuid();
          this.createLoading = true;
          var resource = this.$resource(this.url);
          resource.save(this.create)
            .then((response) => {
              this.$message.success('创建用户成功！');
              this.dialogCreateVisible = false;
              this.createLoading = false;
              this.reset();
              this.getUsers();
            })
            .catch((response) => {
              var data = response.data;
              if (data instanceof Array) {
                this.$message.error(data[0]["message"]);
              }
              else if (data instanceof Object) {
                this.$message.error(data["message"]);
              }
              this.createLoading = false;
            });
        }
        else {
          return false;
        }
      });
    },
  },
  data() {
    return {
      input1: '',
      input2: '',
      dialogCreateVisible: false, //创建对话框的显示状态
      textarea: '',
      formInline: {      //发送新消息按钮弹出框
        user: '',
      },
      create: {
        id: '',
        username: '',
        name: '',
        is_active: true
      },
      options: [{
        value: '选项1',
        label: '所有学员'
      }, {
        value: '选项2',
        label: '所有教练'
      }, {
        value: '选项3',
        label: 'VIP学员'
      }, {
        value: '选项4',
        label: '认证教练'
      }, {
        value: '选项5',
        label: '代理人'
      }, {
        value: '选项6',
        label: '代理商'
      }],
      value: '',
      options1: [{
        value: '选项1',
        label: '所有学员'
      }, {
        value: '选项2',
        label: '所有教练'
      }, {
        value: '选项3',
        label: 'VIP学员'
      }, {
        value: '选项4',
        label: '认证学员'
      }, {
        value: '选项5',
        label: '认证教练'
      }, {
        value: '选项6',
        label: '代理人'
      }, {
        value: '选项7',
        label: '代理商'
      },],
      value1: '',
      value4: new Date(),
      value3: new Date(),
      value6: '',
      input1: '',
      tableData: [{
        num: '1',
        title: '标题要长长长长长长长长长长长长长',
        content: '查看',
        receive: '学员端所有用户',
        sender: '王主管',
        send_time: '2017-08-08 16：30',
      }]
    };
  }
}
</script>
<style scoped>
/* 自定义的样式 */

  #hello {
    margin: 20px 20px;
  }
  .el-dialog__title{
    text-align: center !important;
    background-color: blue;
    padding-bottom: 10px;
  }
  .el-table--fit {
    margin-top: 20px;
  }

  .query .choose .el-select {
    width: 120px;
    margin-right: 20px;
  }

  .query .choose .el-button {
    margin-left: 25px;
  }

  .choose .el-form .el-input {
    width: 150px;
  }

  .popup {
    width: 460px !important;
  }

  .el-date-editor.el-input {
    width: 120px;
  }

  .el-button+.el-button {
    margin-left: 0px;
  }

  .refuse .dialog-footer {
    margin-top: 0px !important;
  }

  .refuse .dialog-footer .el-button--primary {
    margin-left: 225px;
  }



  /* 默认的样式 */

  .el-row {
    margin-bottom: 20px;
  }
</style>
