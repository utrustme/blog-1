<template>
  <div class="child">
    <h4>this is child component</h4>
    <p>收到来自父组件的消息：<slot name="child"></slot></p>
  </div>
</template>

<script>
export default {
  name: 'Child',
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
