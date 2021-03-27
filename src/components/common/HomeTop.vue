<template lang="">
    <div class="h-header theme-bg-color">
    <div class="menu">
    <slot name="left"/>
    </div>
    <div class="h-mid">{{HomeMid}}</div>
    <div class="calendar">
    <slot name="right"/>
    </div>
    </div>
</template>
<script>
export default {
  props: ['HomeMid']
}
</script>
<style lang="less">
.h-header{
    height: 12.8vw;
    display: flex;
    align-items: center;
    background-color: rgb(111, 184, 185);
    .menu,.calendar{
        width: 13vw;
        display: flex;
        justify-content: center;
        img{
            width: 8vw;
        }
    }
    .h-mid{
        margin-left: 4vw;
        flex:1;
        font-size: 5vw;
    }
}
.theme-bg-color{
background-color:var(--theme-bg-color);
}
</style>
