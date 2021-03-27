<template>
<div>
<h2>点击色块试试你的专属颜色</h2>
<div class="box">
    <div class="blue" @click="ChangeBlue"></div>
    <div class="pink" @click="ChangePink"></div>
    <div class="brown" @click="ChangeBrown"></div>
    <div class="green" @click="ChangeGreen"></div>
    <div class="yellow" @click="ChangeYellow"></div>
    <div class="grey" @click="ChangeGrey"></div>
</div>
</div>
</template>
<script>
const initThemeBgColor = (color) => {
  const root = document.documentElement
  root.style.setProperty('--theme-bg-color', color)
}
export default {
  data () {
    return {
    }
  },
  methods: {
    ChangeBlue () {
      initThemeBgColor('rgb(111, 184, 185)')
    },
    ChangePink () {
      initThemeBgColor('rgb(226, 150, 210)')
    },
    ChangeGreen () {
      initThemeBgColor('rgb(77, 131, 90)')
    },
    ChangeGrey () {
      initThemeBgColor('rgb(144, 148, 148)')
    },
    ChangeYellow () {
      initThemeBgColor('rgb(192, 209, 93)')
    },
    ChangeBrown () {
      initThemeBgColor('rgb(168, 140, 107)')
    }
  }
}
</script>
<style lang="less" scoped>
h2{
    height: 30px;
    line-height: 30px;
    color: #444;
    font-weight: normal;
    text-align: left;
    animation-name: change;
    animation-duration: 5s;
    animation-fill-mode: forwards;
}
@keyframes change {
    0%{
        transform: translateX(0);
    }
    100%{
         opacity: 0;
         transform: translateX(80%);
}
}
.box{
    position: relative;
    width: 100px;
    height: 100px;
    margin: 100px auto;
    transform-style: preserve-3d;
    transform:rotate3d(1,1,1,-60deg);
    animation-name: move;
    animation-duration: 4s;
    animation-iteration-count: 2;
    animation-timing-function: linear;
    div{
        width: 100px;
        height: 100px;
        position: absolute;
    }
    .blue{
        transform: translateZ(50px);
        background-color: rgb(111, 184, 185);
        animation-name: moveblue;
        animation-duration: 4s;
        animation-delay: 4.9s;
        animation-fill-mode: forwards;
    }
    .pink{
        transform: translateZ(-50px);
        background-color: rgb(226, 150, 210);
        animation-name: movepink;
        animation-duration: 4s;
        animation-delay: 4s;
        animation-fill-mode: forwards;
    }
    .yellow{
        transform: translatey(50px) rotateX(90deg);
        background-color: rgb(192, 209, 93);
        animation-name: moveyellow;
        animation-duration: 4s;
        animation-delay: 5s;
        animation-fill-mode: forwards;
    }
    .brown{
        transform: translatey(-50px) rotateX(90deg);
        background-color: rgb(168, 140, 107);
        animation-name: movebrown;
        animation-duration: 5s;
        animation-delay: 4.3s;
        animation-fill-mode: forwards;
    }
    .green{
        transform: translateX(-50px) rotateY(90deg);
        background-color: rgb(77, 131, 90);
        animation-name: movegreen;
        animation-duration: 5s;
        animation-delay: 5.2s;
        animation-fill-mode: forwards;
    }
    .grey{
        transform: translateX(50px) rotateY(90deg);
        background-color: rgb(144, 148, 148);
        animation-name: movegrey;
        animation-duration: 4s;
        animation-delay: 6s;
        animation-fill-mode: forwards;
    }
}
@keyframes move {
    0%{
        transform: rotate3d(1,1,1,-60deg);
    }
    100%{
        transform: rotate3d(2,2,2,240deg);
    }
}
@keyframes moveblue {
    0%{
        transform: rotate3d(1,1,1,-20deg);
    }
    100%{
        transform: rotate3d(1,1,1,60deg);
        top:-100px;
        left: -100px;
    }
}
@keyframes moveyellow {
    0%{
        transform: rotate3d(1,1,1,-40deg);
    }
    100%{
        transform: rotate3d(2,2,2,60deg);
        top:-130px;
        left:50px;
    }
}
@keyframes movepink {
    0%{
        transform: rotate3d(1,1,1,-50deg);
    }
    50%{
        transform: rotate3d(1,1,1,0deg);
    }
    100%{
        transform: rotate3d(1,1,1,60deg);
        left: 120px;
        top:30px;
    }
}
@keyframes movegreen {
    0%{
        transform: rotate3d(1,1,1,-30deg);
    }
    100%{
        transform: rotate3d(2,2,2,60deg);
        left:-90px;
        top:40px;
    }
}
@keyframes movebrown {
    0%{
        transform: rotate3d(1,1,1,-60deg);
    }
    100%{
        transform: rotate3d(1,1,1,60deg);
        top: -60px;
        left: 130px;
        background: linear-gradient(rgba(168, 140, 107,1),rgba(168, 140, 107,0.6));
    }
}
@keyframes movegrey {
    0%{
        transform: rotate3d(1,1,1,-60deg);
    }
    100%{
        transform: rotate3d(2,2,2,60deg);
        left:20px;
        top:10px
    }
}

</style>
