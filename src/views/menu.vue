<template>
<div>

<home-top><div slot="left">
<img src="../../static/home.svg" @click="$router.push('/')"/>
</div>
<div slot="right">
<p v-if="!sname" @click="$router.push('/Login')" style="font-size:5vw;margin-right:20px">登录</p>
<p v-else @click="loginOut" style="font-size:5vw;margin-right:20px">退出</p>
</div>
</home-top>
<changebgc></changebgc>
</div>
</template>
<script>
import HomeTop from '@/components/common/HomeTop'
import Changebgc from '@/components/changebgc'
export default {
  components: { HomeTop, Changebgc },
  data () {
    return {
      sname: localStorage.getItem('name'),
      isOn: ''
    }
  },
  methods: {
    loginOut () {
      this.isOn = 'false'
      localStorage.setItem('s', this.isOn)
      this.$router.replace('/Login')
    }
  }
}
</script>
<style lang="">

</style>
