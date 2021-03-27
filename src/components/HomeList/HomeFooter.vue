<template>
<div class="theme-bg-color">
<span class="todo-count "><strong>{{Mylist.length}}</strong> items</span>
            <ul class="filters" @click="getInner">
                <li></li>
                <li>All</li>
                <li>Active</li>
                <li>Completed</li>
            </ul>
</div>
</template>
<script>
export default {
  data () {
    return {
      showing: 'All'
    }
  },
  props: ['Mylist'],
  methods: {
    getInner (e) {
      this.showing = e.path[0].innerText
      this.$emit('ShowList', this.showing)
    }
  },
  mounted () {
    this.$emit('ShowList', this.showing)
  }
}
</script>
<style lang="less" scoped>
div{
display: flex;
position: fixed;
bottom: 0;
height: 12vw;
width: 100vw;
min-width: 360px;
max-width: 750px;
background-color: cadetblue;
line-height: 12vw;
span{
text-align: center;
flex:1
}
ul{
  flex: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  li{
    display: flex;
    justify-content: center;
    flex: 1;
    float: left;
}
  li:hover{
    background-color:rgba(rgb(111, 179, 224), 0.1);
  }
}
}
.theme-bg-color{
background-color: var(--theme-bg-color);
}
</style>
