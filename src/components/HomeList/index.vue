<template>
    <div>
    <div class="input">
    <input @keyup.enter="addTodoList" v-model="inside" autofocus="autofocus" autocomplete="off" :placeholder="placeholder" class="newtodo">
    <input type="checkbox" v-model="ched" class="toggleall" id="toggleall" @click="checkall" value="全选">
    <label for="toggleall">Mark all as complete</label>
    </div>
    <div class="list">
    <ul class="todo-list">
    <li :class="{completed:v.status}" v-for="(v,k) in Showlist" :key="k">
    <div class="view">
    <input type="checkbox" v-model="v.status" class="toggle">
    <label>{{v.data}}</label>
    <button class="destroy" @click="destroyTodo(k)"></button>
    </div>
    </li>
    </ul>
    </div>
    <div class="clear-completed" v-show="Showlist.length">
    <div class="btn theme-bg-color" @click="clearIt">
                Clear completed
    </div></div>
    </div>
</template>>

<script>
export default {
  props: ['Showlist'],
  data () {
    return {
      ched: false,
      placeholder: '添加待办',
      mylist: [{
        id: 1,
        data: '轻松记录每日待办',
        status: false
      }, {
        id: 2,
        data: '快来试试吧',
        status: false
      }, {
        id: 3,
        data: '{使用说明}',
        status: false
      }],
      inside: ''
    }
  },
  methods: {
    clearIt: function () {
      var newArr = []
      for (let i = 0; i < this.mylist.length; i++) {
        if (!this.mylist[i].status) {
          newArr.push(this.mylist[i])
        }
      }
      this.mylist = newArr
    },
    addTodoList: function () {
      var str = trim(this.inside)
      function trim (str) {
        str = str.replace(/^(\s|\u00A0)+/, '')
        for (var i = str.length - 1; i >= 0; i--) {
          if (/\S/.test(str.charAt(i))) {
            str = str.substring(0, i + 1)
            break
          }
        }
        return str
      }
      if (!str) {
        alert('内容不能为空')
      } else {
        var ids = this.mylist[this.mylist.length - 1] + 1
        var strr = {
          id: ids,
          data: this.inside,
          status: false
        }
        this.mylist.push(strr)
        this.inside = ''
      }
    },
    checkall: function () {
      var a = !this.ched
      for (let i = 0; i < this.mylist.length; i++) {
        this.mylist[i].status = a
      }
    },
    destroyTodo: function (k) {
      this.mylist.splice(k, 1)
    }
  },
  mounted () {
    this.$emit('ChangeList', this.mylist)
  },
  watch: {
    mylist () {
      this.$emit('ChangeList', this.mylist)
    }
  }
}
</script>
<style lang="less" scoped>
.input{
    position: relative;
    width: 100%;
    height: 12vw;
    line-height: 12vw;
    .toggleall{
        width: 6vw;
        height: 6vw;
        opacity: 0;
    }
    label{
        font-size: 0;
        position: absolute;
        transform: rotate(90deg);
        top:-2vw;
        left:3vw
    }
    label:before {
        content: '❯';
    font-size: 6.6vw;
    color: #e6e6e6;
    }
    .toggleall:checked + label:before {
    color: #737373;
}
    .newtodo{
    display: flex;
    position: absolute;
    left: 0;
    width: 99%;
    height:10vw;
    border: 0px;
    text-align: center;
    box-shadow: inset 0 -1vw 1vw rgba(34, 85, 143, 0.1);
    }
    .hidden{
        display: none;
    }
}
.list{
    ul{
        li{
            position: relative;
            height: 15vw;
            line-height: 15vw;
            background-color: rgba(34, 85, 143, 0.1);
            border-bottom: 0.278vw #737373 solid;
            margin: 1vw auto;
        }
        li .destroy {
                display: none;
                position: absolute;
                top: 0;
                right: 2vw;
                bottom: 0;
                width: 8vw;
                height: 8vw;
                margin: auto 0;
                font-size: 30px;
                color: #cca1a1;
                border: solid 1px #ccc;
                border-radius:4vw;
                }
        li:last-child{
            border-bottom: 0;
        }
        li .destroy:after{
            position: absolute;
            top:-3.5vw;
            right:1vw;
            font-size: 8vw;
            content: '×';
        }
        li:hover .destroy{
            display: block;
            color: #cd3939;
        }
        .toggle{
            position: absolute;
            top:50%;
            width: 6vw;
            height: 6vw;
            transform: translate(50%,-50%);
            border-radius: 3vw;
        }
        checkbox{
            width: 6vw;
            height: 6vw;
            border-radius: 3vw;
        }
        label{
            margin: 0 12vw;
        }
    }
}
.clear-completed{
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
