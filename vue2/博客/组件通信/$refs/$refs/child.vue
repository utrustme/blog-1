<template>
  <div class="child">
    <h4>this is child component</h4>
    <input type="text" v-model="message" />
    <p>收到来自父组件的消息：{{ messageFromParent }}</p>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data() {
    return {
      message: '',
      messageFromParent: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.child {
  margin-top: 100px;
  padding: 10px;
  border: 1px solid rgb(147, 229, 243);
  height: 200px;
}
</style>
