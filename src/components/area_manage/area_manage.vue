<template>
  <div id="hello">
    <!-- 场地管理 -->
    <!-- 查询 -->
    <div class="query">
      <el-form action="">
        <div class="choose">
          <label>场地名称:
            <el-input type="text" v-model="input3" placeholder="请输入场地名称"></el-input>
          </label>
          <el-button @click='query_button' type="primary">查询</el-button>
        </div>

      </el-form>
      <!-- 表格 -->
      <el-row :gutter="20">
        <el-col :span="4" :offset="20">
          <div class="">
            <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>
            <el-button type="primary" icon="delete" :disabled="selected.length == 0" @click="del_all()">删除</el-button>
          </div>
        </el-col>
      </el-row>
      <!-- 添加/修改弹窗-->
      <el-dialog title="添加/修改" :visible.sync="dialogFormVisible" :show-close=true :before-close="ai_dialog_close1">
        <div class="refuse">
          <el-form :model="form">
            <el-form-item label="场地名称 :" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="宣 传 语 :" :label-width="formLabelWidth">
              <el-input v-model="form.xuanchuan" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label=" 地 址  :" :label-width="formLabelWidth">
              <el-button>坐标获取</el-button>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer" custom-class="aaa">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">添加</el-button>
          </div>
        </div>
      </el-dialog>

      <el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="area_name" align='center' label="场地名称" min-width="100">
        </el-table-column>
        <el-table-column prop="xuanchuanyu" align='center' label="宣传语" min-width="100" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" align='center' label="地址" min-width="100" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="coach" align='center' label="教练" min-width="50" show-overflow-tooltip>
          <template scope="scope">
            <el-button @click="handleClick" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>

        <el-table-column inline-template align='center' label="操作">
          <span>
            <el-button type="primary" size="small" @click="setCurrent(row)">修改</el-button>
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
        name: '',
        xuanchuan: '',
      },
      tableData3: [{
        area_name: '易学车驾校',
        xuanchuanyu: '易学车就是好',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        area_name: '易学车驾校',
        xuanchuanyu: '易学车就是好',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        area_name: '易学车驾校',
        xuanchuanyu: '易学车就是好',
        address: '上海市普陀区金沙江路 1518 弄',
      }],
      multipleSelection: [],
      formInline: {
        user: '',
      },
      value1: '',
      input1: '',
      input2: '',
      input3: '',
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
    ai_dialog_close1() {
      this.dialogFormVisible = false;   //添加修改弹出框
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    query_button() {
      console.log('查询按钮被点击了');
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
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

    //批量删除
    del_all() {
      this.$confirm('此操作将永久删除 ' + this.selected.length + ' 条分区信息, 是否继续?', '提示', {
        type: 'warning'
      })
        .then(() => {
          var ids = [];
          //提取选中项的id
          $.each(this.selected, (i, alarm) => {
            ids.push(alarm.id);
          });
          // 向请求服务端删除
          var resource = this.$resource(this.url);
          resource.remove({
            ids: ids.join(",")
          })
            .then((response) => {
              this.$message.success('删除了' + this.selected.length + '条分区信息!');
              this.getUsers();
            })
            .catch((response) => {
              this.$message.error('删除失败!');
            });
        })
        .catch(() => {
          this.$Message('已取消操作!');
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
  margin: 20px 20px;
}

.choose .el-input {
  width: 150px;
}

.query .choose .el-button {
  margin-left: 25px;
}

.el-row {
  margin-top: 0px;
  margin-bottom: 15px;
}


.refuse .dialog-footer {
  margin-top: 30px !important;
}

.refuse .dialog-footer .el-button--default {
  margin-left: 150px !important;
}

.refuse .dialog-footer .el-button--primary {
  margin-left: 180px;
}
</style>

