<template>
    <div>
    <login-top Topmiddle="登录">
    <div slot="right" @click="$router.push('/register')"
    style="font-size:3vw;color:#fff;margin:0 0 -2vw 12vw">
    注册
    </div>
    </login-top>
    <login-text label="手机号" placeholder="请输入手机号" rule="^.{6,16}$" @inputChange="res=>model.username=res" style="margin:2vh auto"></login-text>
    <login-text label="密码" placeholder="请输入密码" rule="^.{6,16}$" type="password" @inputChange="res=>model.password=res"></login-text>
    <login-btn btntext="登录" @registerSubmit="registerSubmit"></login-btn>
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
            username:'',
            password:''
        }
    }
},
methods:{
    async registerSubmit(){
        let rulg = /^.{6,16}$/
        if(rulg.test(this.model.username)&&rulg.test(this.model.password)){
            const res=await this.$http.post('/login',this.model)
            this.$msg.fail(res.data.msg)
            localStorage.setItem("id",res.data.id)
            localStorage.setItem("token",res.data.objtoken)
            setTimeout(()=>{
                this.$router.push('/')
            },100)
        }else{
            this.$msg.fail("格式不正确，请重新输入！")
        }
    }
}
}
</script>
<style>

</style>
