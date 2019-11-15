<template>
  <v-app>
    <WindowBar />
    <MyTab2 />
    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { Component, Vue, Prop } from "vue-property-decorator";
import MyAbout from "./views/About.vue";
import WindowBar from "./components/WindowBar.vue";
import MyTab2 from "./components/MyTab2.vue";
@Component({
  components: {
    MyAbout,
    HelloWorld,
    WindowBar,
    MyTab2
  }
})
export default class App extends Vue {}

// export default Vue.extend({
//   name: 'App',

//   components: {
//     HelloWorld,
//   },

//   data: () => ({
//     //
//   }),
// });
</script>
