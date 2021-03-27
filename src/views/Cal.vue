<template>
<div>
<home-top>
<div slot="left">
<img src="../../static/home.svg" @click="$router.push('/')"/>
</div>
</home-top>
<van-calendar title="日历" :poppable="false"
  :show-confirm="false" class="calendar theme-bg-color" color="rgba(111,111,111,0.2)"/>
  </div>

</template>

<script>
import HomeTop from '@/components/common/HomeTop'
export default {
  data () {
    return {
      date: new Date()
    }
  },
  components: {HomeTop}
}
</script>
<style lang="less" scoped>
.calendar {
    overflow: visible;
}
.theme-bg-color{
background-color: var(--theme-bg-color);
}
</style>
