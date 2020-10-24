<template>
  <div class="containerA">
    <h2>this is CompA</h2>
    <input type="text" v-model="message" />
    <p v-show="messageFromStore && sender !== $options.name">
      收到{{ sender }}的消息：{{ messageFromStore }}
    </p>
    <CompB />
  </div>
</template>

<script>
import CompB from './compB'
export default {
  name: 'CompA',
  components: {
    CompB,
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
.containerA {
  border: 1px solid rgb(236, 133, 133);
  padding: 10px;
}
</style>
