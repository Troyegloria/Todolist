<template>
    <div>
        <div class="header theme-bg-color">
        <div class="toplef">
        <img src="../../assets/logo.png" alt="" style="margin:0 3vw">
        </div>
        <div class="topmid">{{Topmiddle}}</div>
        <div class="toprig">
        <slot name="right" />
        </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['Topmiddle']
}
</script>
<style lang="less">
    .header{
        display: flex;
        height: 12.8vw;
        background-color: rgb(111, 184, 185);
        color:#000;
>div{
    display: flex;
    flex:1;
    justify-content: center;
    align-items: center;
    font-size: 4.444vw;
}
    }
.theme-bg-color{
background-color: var(--theme-bg-color);
}
</style>
