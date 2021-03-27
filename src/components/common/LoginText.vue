<template lang="">
    <div>
        <van-field v-model="content"
        :label="label"
        :type="type"
        :placeholder="placeholder"
        :rule="rule"
        />
    </div>
</template>
<script>
export default {
  props: ['label', 'type', 'placeholder', 'rule'],
  data () {
    return {
      content: ''
    }
  },
  methods: {
    handlerulg () {
      const rul = new RegExp(this.rule)
      if (rul.test(this.content)) {
        this.$emit('inputChange', this.content)
      }
    }
  },
  watch: {
    content () {
      this.handlerulg()
    }
  }
}
</script>
<style scoped>
</style>
