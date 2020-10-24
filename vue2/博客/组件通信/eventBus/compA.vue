<template>
  <div class="containerA">
    <h2>this is CompA</h2>
    <input type="text" v-model="message" @keyup="sendMessage" />
    <p v-show="messageFromBus && sender !== $options.name">
      收到{{ sender }}的消息：{{ messageFromBus }}
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
.containerA {
  border: 1px solid rgb(236, 133, 133);
  padding: 10px;
}
</style>
