<template>
    <div id="hello">
        <!--常见问题-->
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="学员端" name="first">
                <!-- 添加按钮 -->
                <el-row :gutter="20">
                    <el-col :span="12" :offset="20">
                        <div class="">
                            <el-button type="primary" size='small' icon="edit" @click="dialogCreateVisible = true">添加</el-button>
                            <el-button type="primary" size='small' icon="delete" :disabled="selected.length == 1" @click="del_all()">删除</el-button>
                        </div>
                    </el-col>
                </el-row>
                <!-- 添加按钮弹窗-->
                <el-dialog title="添加" v-model="dialogCreateVisible" :close-on-click-modal="false" :close-on-press-escape="false" @close="reset" top=10% size='small' custom-class='dialog_top' >
                    <div class="refuse">
                        <el-form id="#create" :model="create" :rules="rules" ref="create" label-width="50px">
                            <el-form-item label="主题 :">
                                <el-input v-model="formInline.user" placeholder="请输入主题"></el-input>
                            </el-form-item>
                            <el-form-item label="URL :">
                                <el-input v-model="formInline.URL" placeholder="请输入URL"></el-input>
                            </el-form-item>
                            <el-form-item label="图片 :">
                                <!-- <el-input v-model="formInline.imsges" type="file"></el-input> -->
                                <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-form-item>
                            <el-form-item label="备注 :">
                                <el-input resize=none type="textarea" :autosize="{ minRows:5, maxRows:13}" placeholder="请输入备注的内容..." v-model="textarea">
                                </el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogCreateVisible = false">取 消</el-button>
                            <el-button type="primary" :loading="createLoading" @click="createUser">添 加</el-button>
                        </div>
                    </div>
                </el-dialog>
                <!-- 表格 -->
                <el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column prop="num" align='center' label="全选" type="selection" min-width="40">
                    </el-table-column>
                    <el-table-column prop="topic" align='center' label="标题" min-width="70">
                    </el-table-column>
                    <el-table-column prop="picture" align='center' label="图片预览" min-width="100" show-overflow-tooltip>
                        <template scope="scope">
                            <img :src="scope.row.image" width="170" height="80" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="urls" align='center' label="URL" min-width="110" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column inline-template align='center' label="操作" min-width="50">
                        <span>
                            <el-button type="primary" size="small" @click="setCurrent(row)">修改</el-button>
                            <el-button type="danger" size="small" @click="removed(row)">删除</el-button>
                        </span>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="教练端" name="second">教练端</el-tab-pane>
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
            activeName: 'first',
            multipleSelection: [],
            dialogCreateVisible: false, //创建对话框的显示状态
            textarea: '',
            imageUrl: '',              //弹框上传图片的路径
            tableData3: [{
                num: '1',
                topic: '活动一',
                image: '../../../static/imgs/card.png',
                urls: 'http://119.28.62.27:8080/ytr/app/banner',
            }, {
                num: '2',
                topic: '活动二',
                image: '../../../static/imgs/test.jpg',
                urls: 'http://119.28.62.27:8080/ytr/app/banner',
            }, {
                num: '3',
                topic: '活动三',
                image: '../../../static/imgs/test11.jpg',
                urls: 'http://119.28.62.27:8080/ytr/app/banner',
            }],
            formInline: {      //添加按钮弹出框
                user: '',
                URL: '',
                images: ''
            },
            value1: '',
            input1: '',
            input2: '',
            input3: '',
            value6: '',
            value: '',
            getuuid: '',
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
        }
    },
    mounted() {
        this.getUsers();
    },
    methods: {
        handleAvatarSuccess(res, file) {     //表单图片的上传
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isPNG = file.type === 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG && !isPNG) {
                this.$message.error('上传头像图片只能是 JPG或PNG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
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
    margin: 55px 20px;
    width: 1068px;
}

.el-row {
    margin-top: 0px;
    margin-bottom: 10px;
}

img {
    margin-top: 10px;
}

.refuse .dialog-footer {
    margin-top: 0px !important;
}

.refuse .dialog-footer .el-button--default {
    margin-left: 120px !important;
}

.refuse .dialog-footer .el-button--primary {
    margin-left: 260px;
}




/* 表单上传图片的样式 */

.avatar-uploader .el-upload {
    border: 1px solid gray;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 170px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border: 1px dashed #B2BCC9;
}

.avatar {
    width: 170px;
    height: 80px;
    display: block;
}
</style>

