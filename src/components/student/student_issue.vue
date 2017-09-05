<template>
  <div id="hello">
    <!-- 考试发布 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="科目一" name="first">
        <!-- 查询 -->
        <div class="query">
          <el-form action="">
            <el-row>
              <el-col :span="7">
                <div class="grid-content bg-purple">
                  <div class="block">
                    <span class="demonstration">考试日期:</span>
                    <el-date-picker v-model="value6" type="daterange" placeholder="请选择考试日期范围">
                    </el-date-picker>
                  </div>
                </div>
              </el-col>
              <label>状态:
                <el-select v-model="value" placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </label>
            </el-row>
            <div class="choose">
              <label>招录总数:
                <el-input type="text" v-model="input1" placeholder="请输入招录总数"></el-input>
              </label>
              <label>预约人数:
                <el-input type="text" v-model="input2" placeholder="请输入预约人数"></el-input>
              </label>
              <label>通关人数:
                <el-input type="text" v-model="input3" placeholder="请输入通关人数"></el-input>
              </label>
              <el-button @click='query_button' type="primary">查询</el-button>
            </div>
          </el-form>
          <!-- 添加删除按钮 -->
          <el-row :gutter="20">
            <el-col :span="12" :offset="20">
              <div class="">
                <el-button type="primary" size='small' icon="edit" @click="dialogCreateVisible = true">添加</el-button>
                <el-button type="primary" size='small' icon="delete" :disabled="selected.length == 0" @click="del_all()">删除</el-button>
              </div>
            </el-col>
          </el-row>
           <!-- 添加按钮弹窗-->
          <el-dialog title="考试发布" v-model="dialogCreateVisible" :close-on-click-modal="false" :close-on-press-escape="false" @close="reset" top=15% size='tiny' custom-class='dialog_top'>
            <div class="refuse">
              <el-form id="#create" :model="create" :rules="rules" ref="create" label-width="50px">
                <el-form-item label="日期 :">
                  <el-date-picker v-model="value1" type="date" placeholder="请选择日期" :picker-options="pickerOptions0">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="地点 :">
                  <el-input v-model="formInline.user" placeholder="请输入地点"></el-input>
                </el-form-item>
                <el-form-item label="备注 :">
                  <el-input resize=none type="textarea" :autosize="{ minRows:5, maxRows:13}" placeholder="请输入内容..." v-model="textarea">
                  </el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogCreateVisible = false">取 消</el-button>
                <el-button type="primary" :loading="createLoading" @click="createUser">确 定</el-button>
              </div>
            </div>
          </el-dialog>
          <!-- 表格 -->
          <el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column align='center' label="考试日期" min-width="70">
              <template scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="test_address" align='center' label="考试地点" min-width="180">
            </el-table-column>
            <el-table-column prop="order_number" align='center' label="预约人数" min-width="60" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="status" align='center' label="状态" min-width="50" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="pass_number" align='center' label="通关人数" min-width="60" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="remark" align='center' label="备注" min-width="100" show-overflow-tooltip>
            </el-table-column>

            <el-table-column inline-template align='center' label="操作">
              <span>
                <el-button type="primary" size="small" @click="setCurrent(row)">修改</el-button>
                <el-button type="danger" size="small" @click="removed(row)">删除</el-button>
              </span>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="科目二" name="second">科目二</el-tab-pane>
      <el-tab-pane label="科目三" name="third">科目三</el-tab-pane>
      <el-tab-pane label="科目四" name="fourth">科目四</el-tab-pane>
    </el-tabs>
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
      textarea: '',    //备注框
      tableData3: [{
        date: '2016-05-02',
        test_address: '上海市普陀区金沙江路 1518 弄',
        order_number: '23',
        status: '通过',
        pass_number: '10',
        remark: '这是备注信息'
      }, {
        date: '2016-05-02',
        test_address: '上海市普陀区金沙江路 1518 弄',
        order_number: '23',
        status: '通过',
        pass_number: '10',
        remark: '这是备注信息'
      }],
      multipleSelection: [],
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
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
  margin: 0px 20px;
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

.el-form--inline .el-form-item__label {
  width: 0px;
}

.el-dialog__body {
  padding-left: 0px;
  padding-right: 50px;
}

.refuse .dialog-footer {
  margin-top: 0px !important;
}

.refuse .dialog-footer .el-button--default {
  margin-left: 70px !important;
}

.refuse .dialog-footer .el-button--primary {
  margin-left: 100px;
}
</style>

