<template>
  <div>
    <el-menu
      :default-active="$route.path"
      mode="vertical"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="true"
    >
      <Item :menu="$router.options.routes" />
    </el-menu>
  </div>
</template>

<script>
import Item from './item.vue'
export default {
  components: { Item },
  computed: {},
  mounted() {},
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  border: 0;
  width: 100%;
}
/deep/ .el-submenu {
  /deep/ .el-menu-item {
    height: 32px;
    line-height: 32px;
  }
}

/deep/ .el-submenu__title {
  height: 32px;
  line-height: 32px;
}
</style>
