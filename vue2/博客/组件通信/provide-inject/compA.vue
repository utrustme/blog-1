<template>
  <div class="compa">
    <h3>this is A component</h3>
    <input type="text" v-model="message.content" />
    <CompB />
  </div>
</template>

<script>
import CompB from './compB'
export default {
  name: 'CompA',
  provide() {
    return {
      messageFromA: this.message,
    }
  },
  data() {
    return {
      message: {
        content: '梨香',
      },
    }
  },
  components: {
    CompB,
  },
}
</script>

<style lang="scss" scoped>
.compa {
  border: 1px solid rgb(241, 142, 142);
  padding: 10px;
}
</style>
