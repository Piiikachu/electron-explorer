<template>
  <v-card flat style="-webkit-app-region:no-drag;width=100vw" tile>
    <v-toolbar color="primary" dark flat tile>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <MyTab2 />
      <div class="blank"></div>
      <v-btn icon>
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-checkbox-blank-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import MyTab2 from "./MyTab2.vue";
@Component({
  components: {
    MyTab2
  }
})
export default class WindowBar extends Vue {}
</script>

<style>
.blank {
  height: 100%;
  width: 40px;
  border: solid red 1px;
  min-width: 40px;
  flex-grow: 1;
  background: transparent;
  -webkit-app-region: drag;
}
.v-btn {
  flex-shrink: 0;
}
</style>