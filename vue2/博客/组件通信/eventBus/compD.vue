<template>
  <div class="containerD">
    <p>this is CompD</p>
    <input type="text" v-model="message" @keyup="sendMessage" />
    <p v-show="messageFromBus && sender !== $options.name">
      收到{{ sender }}的消息：{{ messageFromBus }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'CompD',
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
.containerD {
  border: 1px solid rgb(133, 236, 179);
  padding: 10px;
  margin-top: 30px;
}
</style>
