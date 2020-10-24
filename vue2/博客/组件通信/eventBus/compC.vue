<template>
  <div class="containerC">
    <p>this is CompC</p>
    <input type="text" v-model="message" @keyup="sendMessage" />
    <p v-show="messageFromBus && sender !== $options.name">
      收到{{ sender }}的消息：{{ messageFromBus }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'CompC',
  data() {
    return {
      message: '',
      messageFromBus: '',
      sender: '',
    }
  },
  mounted() {
    this.$bus.$on('sendMessage', (obj) => {
      const { sender, message } = obj
      this.sender = sender
      this.messageFromBus = message
    })
  },
  methods: {
    sendMessage() {
      this.$bus.$emit('sendMessage', {
        sender: this.$options.name,
        message: this.message,
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
