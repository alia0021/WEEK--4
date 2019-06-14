

<template>
  <div id="app">
    <el-button type="primary" @click="openDialog = true">Welcome</el-button>
    <el-dialog :visible.sync="openDialog">
      <div>
        <input type="text" v-model="sendSnack">
      </div>
      <HelloWorld msg="My First App"/>
      <Bio :snack="sendSnack"/>
    </el-dialog>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Bio from "./components/Bio.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Bio
  },
  data: function() {
    return {
      sendSnack: "Raw Granola",
      openDialog: false
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
