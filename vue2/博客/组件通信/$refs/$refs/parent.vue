<template>
  <div class="parent">
    <h3>this is parent component</h3>
    <input type="text" v-model="message" />
    <input type="button" value="获取子组件消息" @click="getMessage" />
    <p>收到来自子组件的消息：{{ messageFromChild }}</p>
    <Child ref="childRef" />
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
  methods: {
    getMessage() {
      this.messageFromChild = this.$refs.childRef.message
    },
  },
  components: {
    Child,
  },
  watch: {
    message(newValue) {
      this.$refs.childRef.messageFromParent = newValue
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
