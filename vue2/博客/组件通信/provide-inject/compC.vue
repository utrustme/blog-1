<template>
  <div class="compc">
    <h5>this is C component</h5>
    <p>收到来自A组件的消息：{{ messageFromA && messageFromA.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'Compc',
  inject: ['messageFromA'],
}
</script>

<style lang="scss" scoped>
.compc {
  margin-top: 100px;
  padding: 10px;
  border: 1px solid rgb(82, 228, 82);
  height: 200px;
}
</style>
