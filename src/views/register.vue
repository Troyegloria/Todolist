<template>
    <div>
    <login-top Topmiddle="注册">
    <div slot="right" @click="$router.push('/login')" style="font-size:3vw;color:#fff;margin:0 0 -1vh 0">
    已有账号，立即登录
    </div>
    </login-top>
    <login-text label="用户名" placeholder="请输入用户名" rule="^.{6,16}$" @inputChange="res=>model.name=res"  style="margin:2vh auto"></login-text>
    <login-text label="手机号" placeholder="请输入手机号" rule="^.{6,16}$" @inputChange="res=>model.username=res"></login-text>
    <login-text label="密码" placeholder="请输入密码" rule="^.{6,16}$" type="password" @inputChange="res=>model.password=res"></login-text>
    <login-btn btntext="注册" @registerSubmit="registerSubmit"></login-btn>
    </div>
</template>
<script>
/* eslint-disable */
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'
import LoginBtn from '@/components/common/LoginBtn.vue'
export default {
components:{
    LoginTop,
    LoginText,
    LoginBtn
},
data(){
    return{
        model:{
            name:'',
            username:'',
            password:''
        }
    }
},
methods:{
    async registerSubmit(){
        let rulg = /^.{6,16}$/
        if(rulg.test(this.model.name)&&rulg.test(this.model.username)&&rulg.test(this.model.password)){
            const res=await this.$http.post('/register',this.model)
            this.$msg.fail(res.data.msg)
        }else{
            this.$msg.fail("格式不正确，请重新输入！")
        }
    }
}
}
</script>
<style>

</style>
