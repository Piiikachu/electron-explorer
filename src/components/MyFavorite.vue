<template>
  <div class="fav-container">
    <a-button-group>
      <a-button>
        <a-icon type="folder" />aaa
      </a-button>
      <a-button>
        <a-icon type="folder" />bbb
      </a-button>
      <a-button>
        <a-icon type="folder" />ccc
      </a-button>
      <a-button>
        <a-icon type="folder" />ddd
      </a-button>
    </a-button-group>
  </div>
</template>
<style>
.fav-container {
  display: flex;
  line-height: 30px;
  padding: -10px;
  background-color: rgb(236, 236, 236);
}
.fav-container .ant-btn{
  height: 90%;
  background-color: rgb(236, 236, 236);
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class MyFavorite extends Vue {}
</script>