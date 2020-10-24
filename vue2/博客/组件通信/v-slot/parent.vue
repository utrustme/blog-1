<template>
  <div class="parent">
    <h3>this is parent component</h3>
    <input type="text" v-model="message" />
    <Child>
      <template v-slot:child>
        {{ message }}
      </template>
    </Child>
  </div>
</template>

<script>
import Child from './child'
export default {
  name: 'Parent',
  data() {
    return {
      message: '梨香',
    }
  },
  components: {
    Child,
  },
}
</script>

<style lang="scss" scoped>
.parent {
  border: 1px solid rgb(241, 142, 142);
  padding: 10px;
}
</style>
