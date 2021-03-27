<template lang="">
    <div class="outter" @click="registerClick">
    <div class="btn theme-bg-color">{{btntext}}</div>
    </div>
</template>
<script>
export default {
  props: ['btntext'],
  methods: {
    registerClick () {
      this.$emit('registerSubmit')
    }
  }
}
</script>
<style lang="less">
.outter{
    padding: 3vw 2vw;
    .btn{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 12vw;
        background-color: cadetblue;
        color: white;
        border-radius: 4vh;
    }
    .theme-bg-color{
background-color: var(--theme-bg-color);
}
    }
</style>
