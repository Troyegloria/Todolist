<template>
    <div>
    <home-top HomeMid="全部清单">
    <div slot="left"><img src="../../static/menu.svg" @click="$router.push('/menu')" /></div>
    <div slot="right"><img src="../../static/calendar.svg" @click="$router.push('/cal')" /></div>
    </home-top>
    <home-list @ChangeList="res=>mylist=res" :Showlist="showlist"></home-list>
    <home-footer :Mylist="mylist" @ShowList="ChangeShowList" v-clickoutside=handleShow></home-footer>
    </div>
</template>
<script>
import HomeTop from '@/components/common/HomeTop'
import HomeList from '@/components/HomeList'
import HomeFooter from '@/components/HomeList/HomeFooter'
const clickoutside = { // 初始化指令
  bind (el, binding, vnode) {
    function documentHandler (e) {
      // 这里判断点击的元素是否是本身，是本身，则返回
      if (el.contains(e.target)) {
        return false
      }
      // 判断指令中是否绑定了函数
      if (binding.expression) {
        // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
        binding.value(e)
      }
    }
    // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
    el.__vueClickOutside__ = documentHandler
    document.addEventListener('click', documentHandler)
  },
  update () {},
  unbind (el, binding) { // 解除事件监听
    document.removeEventListener('click', el.__vueClickOutside__)
    delete el.__vueClickOutside__
  }
}
export default {
  components: {
    HomeTop,
    HomeList,
    HomeFooter
  },
  directives: {clickoutside},
  data () {
    return {
      mylist: [],
      showing: '',
      showlist: []
    }
  },
  methods: {
    handleShow: function (e) {
      this.showlist = this.mylist
    },
    ChangeShowList: function (res) {
      if (res === 'All') {
        this.showlist = this.mylist
      }
      if (res === 'Active') {
        this.showlist = []
        for (let i = 0; i < this.mylist.length; i++) {
          if (!this.mylist[i].status) {
            this.showlist.push(this.mylist[i])
          }
        }
      }
      if (res === 'Completed') {
        this.showlist = []
        for (let i = 0; i < this.mylist.length; i++) {
          if (this.mylist[i].status) {
            this.showlist.push(this.mylist[i])
          }
        }
      }
    }
  }
}
</script>
<style lang="less" scope>

</style>
