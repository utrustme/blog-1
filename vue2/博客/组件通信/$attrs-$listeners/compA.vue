<template>
  <div class="compa">
    <h3>this is A component</h3>
    <input type="text" v-model="message" />
    <p>收到来自{{ comp }}的消息：{{ messageFromComp }}</p>
    <CompB :messageFromA="message" @keyup="receive" />
  </div>
</template>

<script>
import CompB from './compB'
export default {
  name: 'CompA',
  data() {
    return {
      message: '',
      messageFromComp: '',
      comp: '',
    }
  },
  components: {
    CompB,
  },
  methods: {
    receive(e) {
      this.comp = e.target.name
      this.messageFromComp = e.target.value
    },
  },
}
</script>

<style lang="scss" scoped>
.compa {
  border: 1px solid rgb(241, 142, 142);
  padding: 10px;
}
</style>
