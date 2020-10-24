<template>
  <div class="containerC">
    <p>this is CompC</p>
    <input type="text" v-model="message" />
    <p v-show="messageFromStore && sender !== $options.name">
      收到{{ sender }}的消息：{{ messageFromStore }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'CompC',
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
.containerC {
  border: 1px solid rgb(250, 145, 245);
  padding: 10px;
  margin-top: 50px;
}
</style>
