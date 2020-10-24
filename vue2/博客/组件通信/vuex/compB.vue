<template>
  <div class="containerB">
    <h3>this is CompB</h3>
    <input type="text" v-model="message" />
    <p v-show="messageFromStore && sender !== $options.name">
      收到{{ sender }}的消息：{{ messageFromStore }}
    </p>
    <CompC />
    <CompD />
  </div>
</template>

<script>
import CompC from './compC'
import CompD from './compD'
export default {
  name: 'CompB',
  components: {
    CompC,
    CompD,
  },
  data() {
    return {
      message: '',
    }
  },
  computed: {
    messageFromStore() {
      return this.$store.state.message.content
    },
    sender() {
      return this.$store.state.message.sender
    },
  },
  watch: {
    message(newValue) {
      this.$store.commit('sendMessage', {
        sender: this.$options.name,
        content: newValue,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.containerB {
  border: 1px solid rgb(100, 217, 247);
  padding: 10px;
  margin-top: 100px;
}
</style>
