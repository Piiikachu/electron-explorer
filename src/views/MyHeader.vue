<template>
  <div>
    <el-row >test</el-row>
    <el-row >test</el-row>
    <el-row >test</el-row>
  </div>
</template>
<style>
.el-row {
  line-height: 35px;
  align-content: center;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld
  }
})
export default class MyHeader extends Vue {}
</script>