<template>
  <div class="parent">
    <h3>this is parent component</h3>
    <input type="text" v-model="message" />
    <p>收到来自子组件的消息：{{ messageFromChild }}</p>
    <Child :messageFromParent="message" @on-receive="receive" />
  </div>
</template>

<script>
import Child from './child'
export default {
  name: 'Parent',
  data() {
    return {
      message: '',
      messageFromChild: '',
    }
  },
  components: {
    Child,
  },
  methods: {
    receive(msg) {
      this.messageFromChild = msg
    },
  },
}
</script>

<style lang="scss" scoped>
.parent {
  border: 1px solid rgb(241, 142, 142);
  padding: 10px;
}
</style>
