import Vue from 'vue';
import App from './App.vue';

// регистрация компонента глобально, 
// лучше добавлять префикс, чтобы они 
// не пересекались с названиями тегов html5
// import Car from './Car.vue';
// Vue.component('app-car', Car);
new Vue({
  el: '#app',
  // позволяет рендерить приложение вью
  render: h => h(App),
  // та же запись на ES5
  // render: function (h) {
  //   return h(App)
  // },
});
