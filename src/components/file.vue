<template>
  <div>
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      />
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>

    <img class="icon" />
    <div class="filename"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { FilePorp } from "../myfs";
@Component
export default class MyFile extends Vue {
  @Prop() file!: FilePorp;
}
</script>

<style>
</style>