<template>
  <div>
    <template v-for="item in menu">
      <!-- 最后一级菜单 -->
      <el-menu-item
        v-if="!item.children"
        :key="item.path"
        :index="parent ? parent + '/' + item.path : item.path"
        @click="jump(parent ? parent + '/' + item.path : item.path)"
      >
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
      <!-- 此菜单下还有子菜单 -->
      <el-submenu
        v-if="item.children"
        :key="item.path"
        :index="item.parent ? parent + '/' + item.path : item.path"
      >
        <template slot="title">
          <span> {{ item.name }}</span>
        </template>
        <!-- 递归 -->
        <Item
          :menu="item.children"
          :parent="parent ? parent + '/' + item.path : item.path"
        />
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: ['menu', 'parent'],
  data() {
    return {}
  },
  methods: {
    jump(path) {
      if (this.$route.path === path) {
        return
      }
      this.$router.push(path)
    },
  },
}
</script>
