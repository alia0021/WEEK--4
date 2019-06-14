//main file that runs your app
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App) // render runs the app
}).$mount("#app");
