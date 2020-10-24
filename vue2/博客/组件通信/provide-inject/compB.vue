<template>
  <div class="compb">
    <h4>this is B component</h4>
    <p>收到来自A组件的消息：{{ messageFromA && messageFromA.content }}</p>
    <CompC />
  </div>
</template>

<script>
import CompC from './compC'
export default {
  name: 'CompB',
  inject: ['messageFromA'],
  components: {
    CompC,
  },
}
</script>

<style lang="scss" scoped>
.compb {
  margin-top: 100px;
  padding: 10px;
  border: 1px solid rgb(147, 229, 243);
}
</style>
