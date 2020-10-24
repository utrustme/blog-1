<template>
  <div class="containerD">
    <p>this is CompD</p>
    <input type="text" v-model="message" />
    <p v-show="messageFromStore && sender !== $options.name">
      收到{{ sender }}的消息：{{ messageFromStore }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'CompD',
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
.containerD {
  border: 1px solid rgb(133, 236, 179);
  padding: 10px;
  margin-top: 30px;
}
</style>
