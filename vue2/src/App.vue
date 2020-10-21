<template>
  <div id="app">
    <el-row class="container">
      <el-col :span="4" class="left">
        <Menu></Menu>
      </el-col>
      <el-col :span="20" class="right">
        <Home />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Menu from './components/index'
import Home from './components/home'
export default {
  components: {
    Menu,
    Home,
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.body {
  height: 100vh;
}
.container {
  height: 100vh;
}
.left {
  height: 100vh;
  padding: 12px 0;
  overflow: scroll;
  background-color: #545c64;
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 0; /*高宽分别对应横竖滚动条的尺寸*/
    height: 0;
  }
}
.right {
  padding: 20px;
  overflow: scroll;
  height: 100vh;
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 6px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.2);
  }
  &::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    border-radius: 0;
    background: rgba(0, 0, 0, 0.05);
  }
}
</style>
