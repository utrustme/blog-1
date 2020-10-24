<template>
  <div class="compb">
    <h4>this is B component</h4>
    <input name="compB" type="text" v-model="message" v-on="$listeners" />
    <p>收到来自A组件的消息：{{ $attrs.messageFromA }}</p>
    <CompC v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import CompC from './compC'
export default {
  name: 'CompB',
  components: {
    CompC,
  },
  data() {
    return {
      message: '',
    }
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
