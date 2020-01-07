import Vue from 'vue';
import App from './App.vue';

// регистрация новой директивы
import ColorDirective from './color.js';

// создание шины событий для связи их во всех омпонентах
// в данном классе мы получаем доступ к событиям emit и on
// константы определяются в начале приложения
export const eventEmitter = new Vue();
Vue.directive('colored', ColorDirective);
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

