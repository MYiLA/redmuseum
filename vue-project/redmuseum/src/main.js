import Vue from 'vue';
import App from './App.vue';
import List from './List.vue';

// регистрация новой директивы
import ColorDirective from './color.js';

// создание шины событий для связи их во всех омпонентах
// в данном классе мы получаем доступ к событиям emit и on
// константы определяются в начале приложения
export const eventEmitter = new Vue();
// регистрация директивы глобально
Vue.directive('colored', ColorDirective);
// регистрация фильтра глобально
Vue.filter('uppercase', value => value.toUpperCase());
// регистрация компонента глобально,
// лучше добавлять префикс, чтобы они
// не пересекались с названиями тегов html5
// import Car from './Car.vue';
Vue.component('app-list', List);
//регистрация глобального миксина
Vue.mixin ({
  beforeCreate(){
    console.log('beforeCreate');
  }
})
new Vue({
  el: '#app',
  // позволяет рендерить приложение вью
  render: h => h(App),
  // та же запись на ES5
  // render: function (h) {
  //   return h(App)
  // },
});

