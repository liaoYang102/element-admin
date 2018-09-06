<template>
    <div class="login">
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account">
            <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号" @input="activation"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码" @input="activation"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click="handleSubmit2" :loading="logining" :disabled="active">登录</el-button>
        </el-form-item>
    </el-form>
    </div>
</template>

<script>
    export default {
    props: {
    },
    data() {
        return {
            logining: false,
            ruleForm2: {
                account: '',
                checkPass: ''
            },
            rules2: {
                account: [{
                        required: true,
                        message: '请输入账号',
                        trigger: 'blur'
                    },
                    //{ validator: validaePass }
                ],
                checkPass: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    },
                    //{ validator: validaePass2 }
                ]
            },
            checked: true,
            active: true,
        };
    },
    mounted(){
        var user = JSON.parse(localStorage.getItem("user"));
        if(user.username){
            this.ruleForm2.account = user.username;
        }else{
            this.ruleForm2.account = ''
        }
    },
    methods: {
        activation(){
            if(this.ruleForm2.account&&this.ruleForm2.checkPass){
                this.active = false
            }else{
                this.active = true
            }
        },
        handleSubmit2(ev) {
            var _this = this;
            _this.$refs.ruleForm2.validate((valid) => {
                if (valid) {
                    _this.logining = true;
                    var loginParams = {
                        username: this.ruleForm2.account,
                        password: this.ruleForm2.checkPass
                    };
                    if (loginParams.username == "admin" && loginParams.password == "123456") {
                        _this.logining = false;
                        // sessionStorage.setItem('user', JSON.stringify(loginParams));
                        localStorage.setItem('user',JSON.stringify(loginParams));
                        _this.$router.push({ path: '/home' });
                    } else {
                        _this.logining = false;
                        _this.$alert('用户名或密码错误！', '提示信息', {
                            confirmButtonText: '确定'
                        });
                    }
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

<style scoped>
.login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}

label.el-checkbox.remember {
    margin: 0px 0px 25px 0px;
}
.title{
    text-align: left;
    margin-bottom: 10px;
}
</style>

