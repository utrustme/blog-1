<template>
  <div class="parent">
    <h3>this is parent component</h3>
    <input type="text" v-model="message" />
    <p>收到来自子组件的消息：{{ child1.message }}</p>
    <Child />
  </div>
</template>

<script>
import Child from './child'
export default {
  name: 'Parent',
  data() {
    return {
      message: '梨香',
      child1: {},
    }
  },
  components: {
    Child,
  },
  mounted() {
    this.child1 = this.$children.find((child) => {
      return child.$options.name === 'Child1'
    })
  },
}
</script>

<style lang="scss" scoped>
.parent {
  border: 1px solid rgb(241, 142, 142);
  padding: 10px;
}
</style>
