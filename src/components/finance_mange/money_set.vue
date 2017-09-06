<template>
  <div id="hello">
    <!-- 佣金设置 -->
    <div class="query">
      <!-- 新增按钮 -->
      <el-row :gutter="20">
        <el-col :span="2" :offset="22">
          <el-button type="primary" size='small' icon="edit" @click="dialogFormVisible = true">新增</el-button>
        </el-col>
      </el-row>
      <!-- 新增/修改弹窗-->
      <el-dialog title="新增/修改" :visible.sync="dialogFormVisible" :show-close=true :before-close="ai_dialog_close1" size='tiny' custom-class='dialog_top' >
        <div class="refuse">
          <el-form :model="form">
            <el-form-item label="主 题 :" :label-width="formLabelWidth">
              <el-input v-model="form.topic" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="返佣比例 :" :label-width="formLabelWidth">
              <el-input v-model="form.rate1" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="上 级 :" :label-width="formLabelWidth">
              <el-input v-model="form.top" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="返佣比例 :" :label-width="formLabelWidth">
              <el-input v-model="form.rate2" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer" custom-class="aaa">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">添加</el-button>
          </div>
        </div>
      </el-dialog>
      <!-- 表格 -->
      <el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="topic" align='center' label="主题" min-width="100">
        </el-table-column>
        <el-table-column prop="rate" align='center' label="返佣比例" min-width="100" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="top" align='center' label="上级" min-width="100" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="backmoney" align='center' label="返佣比例" min-width="100" show-overflow-tooltip>
        </el-table-column>
        <el-table-column inline-template align='center' label="操作">
          <span>
            <!-- <el-button type="primary" size="small" @click="setCurrent(row)">修改</el-button> -->
            <el-button type="primary" size='small' @click="revise">修改</el-button>
            <el-button type="danger" size="small" @click="removed(row)">删除</el-button>
          </span>
        </el-table-column>
      </el-table>

    </div>

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
      dialogTableVisible: false,     //查看弹出框
      dialogFormVisible: false,
      formLabelWidth: '80px',
      textarea: '',
      form: {
        topic: '',
        rate1: '',
        top: '',
        rate2: '',
      },
      tableData3: [{
        topic: '一级教练',
        rate: '40%',
        top: '',
        backmoney: '',
      }, {
        topic: '代理人',
        rate: '8%',
        top: '代理商',
        backmoney: '2%',
      }],
      multipleSelection: [],
      formInline: {
        user: '',
      },
      value1: '',
      input1: '',
      input2: '',
      value6: '',
      value: '',
      // getuuid :'',
      activeName: 'first',
      options: [{
        value: '选项1',
        label: '未开始'
      }, {
        value: '选项2',
        label: '结束'
      }],
      url: 'http://172.10.0.201/api/v1/accounts', //此处填写接口地址
      users: [],
      keywords: '',
      select: '',
      filter: {
        phone: '',
        per_page: 10, // 页大小
        page: 1, // 当前页
        sorts: ''
      },
      loading: true,
      selected: [],
      dialogCreateVisible: false, //创建对话框的显示状态
      dialogUpdateVisible: false, //编辑对话框的显示状态
      createLoading: false,
      updateLoading: false,
      update: {
        name: '',
        phone: '',
        email: '',
        is_active: true
      },
      total_rows: 0,
      create: {
        id: '',
        username: '',
        name: '',
        is_active: true
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
      },
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    revise(){
      console.log('修改按钮');
    },
    ai_dialog_close1() {
      this.dialogFormVisible = false;   //新增修改弹出框
    },
    query_button() {
      console.log('查询按钮被点击了');
    },
    deleteRow(index, rows) {    //移除
      rows.splice(index, 1);
    },
    ai_dialog_close() {
      this.dialogTableVisible = false;   //查看弹出框
    },
    //分页
    searchFieldChange(val) {
      this.placeholder = placeholders[val];
      console.log(`搜索字段： ${val} `);
    },
    pageSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.filter.per_page = val;
      this.getUsers();
    },
    pageCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.filter.page = val;
      this.getUsers();
    },
    //选则相关
    tableSelectionChange(val) {
      this.selected = val;
      //console.log(val)
    },

    //和排序相关
    tableSortChange(val) {
      //console.log(`排序属性: ${val.prop}`);
      //console.log(`排序: ${val.order}`);
      if (val.prop != null) {
        if (val.order == 'descending') {
          this.filter.sorts = '-' + val.prop;
        }
        else {
          this.filter.sorts = '' + val.prop;
        }
      }
      else {
        this.filter.sorts = '';
      }
      this.getUsers();
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
    // 重置表单
    reset() {
      this.$refs.create.resetFields();
    },

    setCurrent(user) {
      this.currentId = user.id;
      this.update.name = user.name;
      this.update.phone = user.phone;
      this.update.email = user.email;
      this.update.is_active = user.is_active;
      this.dialogUpdateVisible = true;
    },

    // 更新用户资料
    updateUser() {
      this.$refs.update.validate((valid) => {
        if (valid) {
          this.updateLoading = true;
          var actions = {
            update: { method: 'patch' }
          }
          var resource = this.$resource(this.url, {}, actions);
          resource.update({ "ids": this.currentId }, this.update)
            .then((response) => {
              this.$message.success('修改用户资料成功！');
              this.dialogUpdateVisible = false;
              this.updateLoading = false;
              this.getUsers();
            })
            .catch((response) => {
              var data = response.data;
              console.log(data);
              if (data instanceof Array) {
                this.$message.error(data[0]["message"]);
              }
              else if (data instanceof Object) {
                this.$message.error(data["message"]);
              }
              this.updateLoading = false;
            });
        }
        else {
          return false;
        }
      });
    },

    //删除单个用户
    removed(user) {
      this.$confirm('此操作将永久删除用户 ' + user.username + ', 是否继续?', '提示', { type: 'warning' })
        .then(() => {
          // 向请求服务端删除
          var resource = this.$resource(this.url + "{/id}");
          resource.delete({ id: user.id })
            .then((response) => {
              this.$message.success('成功删除了用户' + user.username + '!');
              this.getUsers();
            })
            .catch((response) => {
              this.$message.error('删除失败!');
            });
        })
        .catch(() => {
          this.$message.info('已取消操作!');
        });
    },

    query() {
      this.filter.name = '';
      this.filter.username = '';
      this.filter.phone = '';
      this.filter[this.select] = this.keywords;
      this.getUsers();
    },
    //获取用户列表
    getUsers() {
      this.loading = true;
      var resource = this.$resource(this.url);
      resource.query(this.filter)
        .then((response) => {
          this.users = response.data.datas;
          this.total_rows = response.data.total_rows;
          this.loading = false;
        })
        .catch((response) => {
          this.$message.error('错了哦，这是一条错误消息');
          this.loading = false;
        });
    }
  }
}
</script>
<style scoped>
/* 自定义的样式 */

#hello {
  margin: 70px 20px;
}

.el-row {
  margin-bottom: 10px;
}

.refuse .dialog-footer {
  margin-top: 30px !important;
}

.refuse .dialog-footer .el-button--default {
  margin-left: 50px !important;
}

.refuse .dialog-footer .el-button--primary {
  margin-left: 150px;
}
</style>

