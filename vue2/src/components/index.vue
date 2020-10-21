<template>
  <div>
    <el-menu
      :default-active="$route.path"
      mode="vertical"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <Item :menu="$router.options.routes" />
    </el-menu>
  </div>
</template>

<script>
import Item from "./item.vue";
export default {
  components: { Item },
  computed: {
  },
  mounted () {
  },
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  border: 0;
}
</style>