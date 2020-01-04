<template>
  <!-- // чтобы запустить приложение на сервере нужно прописать
// npm run dev -->

  <div id="app">
    <my-counter></my-counter>
  </div>
  <!-- // ЧЕРНОВИК НАЧАТ //////////////////////////////// -->
  <!-- <div id="app">
    <input type="text" v-on:input="changeName">
    <h1>String: {{ name }}</h1>
    <h1>Sum: {{ number }}</h1>
    <h1>Method: {{ sayHello() }}</h1>
    <h1>If statement: {{ isOk ? 'I am Ok':'I am not Ok' }}</h1>
    <h1>function: {{ string.split('').reverse().join('') }}</h1>
    <h2>
      <a :href="url">Google</a>
    </h2>
    <h2 v-html="link">
    </h2>
    <button @click="counterRize(-1, 'уровень понижен', $event)">Уменьшить</button>
    <h3 @mouseover="onHover">{{title}} = {{counter}}</h3>
    <button @click="counterRize(1, 'уровень увеличен', $event)">Увеличить</button>
    <hr>
    <button v-on:click="counter2--">Уменьшить</button>
    <h3>Счетчик = {{counter2}}</h3>
    <button v-on:click="counter2++">Увеличить</button>
    <h2>
      <a :href="url" target="_blank" @click.prevent="">Google</a>
    </h2> -->

  <!-- Отслеживание координат мыши пользователя -->
  <!-- <h2 v-on:mousemove="handleMouseMove">
      X: {{x}} \ Y:{{y}}
      <span v-on:mousemove.stop="">Не изменять</span>
    </h2>
    <hr>
    <input type="text" v-on:keyup.enter="alertValue">
    <div>
      <input type="text" @input="inputValue = $event.target.value" :value="inputValue">
      <h2>{{inputValue}}</h2>
    </div>
    <div class="circle" @click="isActive = !isActive" :class="getCssClasses">
    </div>
    <div class="circle" :class="[color, {'red': isActive}]"></div>
    <input type="text" v-model="color">
    <input type="text" v-model="white">
    <input type="text" v-model="height">
    <hr>
    <h3>13 lesson</h3>
    <div class="circle" :style="circleClasses">
      <p>
        hello i'm colorful
      </p>
    </div> -->

  <!-- следующий элемент массива может затереть предыдущие свойства или добавить новые -->
  <!-- <div class="circle" :style="[circleClasses, {'width': height + 'px'}]"></div> -->
  <!--14. Скрывание и показ элементов -->
  <!-- Этот способ стирает ненужный элемент(можно использовать шаблоны template) -->
  <!-- <hr>
    <h2 v-if="type  === 'a'">A</h2>
    <h2 v-else-if="type  === 'b'">B</h2>
    <h2 v-else-if="type  === 'c'">C</h2>
    <h2 v-else>not match</h2>
    <hr>
    <input type="text" v-model="type"> -->

  <!--15. директива v-show vs v-if -->
  <!-- скрывает части dom-дерева через свойство display-none -->
  <!-- <hr>
    <h1 v-show="isVisible">I am visible!</h1>
    <h2 v-show="!isVisible">You can't see me!</h2>
    <hr>
    <button @click="isVisible = !isVisible"> Toggle </button> -->
  <!--16. Работа со списками -->
  <!-- <hr>
    <ul>
      <li v-for="(person, index) in people">{{index + 1}} {{person.name}} <b>{{person.age}}</b></li>
      <li v-for="(person, index) of people">{{index + 1}} {{person.name}} <b>{{person.age}}</b></li>
    </ul>
    <ol>
      <li v-for="num of 3"> {{num}} </li>
    </ol>
    <hr>
    <ul>
      <li v-for="(value, key, index) in person"> <strong>{{index + 1}}</strong> <a href="#"> {{key}}: </a> {{value}}
      </li>
    </ul> -->
  <!--17. Оптимизация приложения с computed -->
  <!-- <h2>Counter {{counter}}</h2>
    <h3>{{result}}</h3>
    <button @click="add">Add</button>
    <button @click="sub">Sub</button>
  </div> -->
  <!--19. Связывание разных приложений. Инстанс vue. Для связывания объект 
      вью нужно записать в переменную, и уже через нее вызывать и менять ее 
      методы/переменные внутри других вью блоков -->

</template>

<script>
  // создание компонента глобально (регистрация до его использования):
  // Vue.component ('кастомный тег', {для темплейт исп обратные кавычки})
  // Vue.component('my-counter', {
  //   template: `
  // <div style="border: 1px solid black">
  //     <h2>Counter: {{counter}}</h2>
  //     <button @click="add">Add</button>
  // </div>
  // `,
  // data: {
  //   counter: 0,
  // },
  // methods:{
  //   add: function(){
  //     return this.counter++;
  //   },
  // }
  // })
// локальная и глобальная регистрация компонента
// глобально - это Vue.component
// локально: поле внутри вью-объекта components: {
//   'название тега': объект конфигурации,
// }
// название компонента в формате camelCaze myCounter
// в шаблоне его же мы пишем my-counter



// 31. регистрация компонентов в .vue
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        counter: 0,
        counter2: 0,
      };
    },
  };
  // var vue = new Vue({
  //   el: "#app",
  //   data: {
  //     inputValue: 'Hello Vue',
  //     name: 'Vue!',
  //     number: 100,
  //     isOk: true,
  //     string: 'My name is Vlad',
  //     url: 'http://google.com',
  //     link: '<a href="http://google.com">Google html</a>',
  //     counter: 0,
  //     counter2: 0,
  //     title: 'Счетчик',
  //     x: 0,
  //     y: 0,
  //     isActive: false,
  //     color: 'blue',
  //     white: 'rgb(255, 255, 255)',
  //     height: '100',
  //     isVisible: true,
  //     type: 'a',
  //     people: [{
  //         name: 'Vlad',
  //         age: 20
  //       },
  //       {
  //         name: 'Max',
  //         age: 25
  //       },
  //       {
  //         name: 'Elena',
  //         age: 30
  //       },
  //       {
  //         name: 'Milana',
  //         age: 10
  //       },
  //     ],
  //     person: {
  //       name: 'Mary',
  //       age: '25',
  //       job: 'Architect',
  //     },

  // enter: 13,
  // },
  // не вызывать функцию без надобности (функция без скобок на слушателе),
  // они должны возвращать строку(приводимое к строке)
  // computed: {
  //   result: function () {
  //     return this.counter > 3 ? 'More than 3' : 'Less than 3'
  //   },
  //   getCssClasses: function () {
  //     return {
  //       'red': this.isActive,
  //       'blue': !this.isActive,
  //     }
  //   },
  //   circleClasses: function () {
  //     return {
  //       'background': this.color,
  //       'color': this.white,
  //       'height': this.height + 'px',
  //     }
  //   }
  // },

  // methods: {
  //   add: function () {
  //     this.counter++
  //   },
  //   sub: function () {
  //     this.counter--
  //   },
  //   changeName: function () {
  //     this.name = event.target.value
  //   },
  //   sayHello: function () {
  //     return "I am function"
  //   },
  //   counterRize: function (a, str, event) {
  //     this.counter += a;
  //     this.title = str;
  //     if (a === 1) {
  //       event.target.style.backgroundColor = "green";
  //     } else if (a === -1) {
  //       event.target.style.backgroundColor = "red";
  //     };
  //   },
  //   onHover: function (event) {
  //     event.target.style.color = "red"
  //   },
  // clickOnGoogle: function (event) {
  //   event.preventDefault()
  // },
  // handleMouseMove: function (event) {
  //   this.x = event.clientX
  //   this.y = event.clientY
  // },
  // alertValue: function (event) {
  // if (event.keyCode === this.enter) {
  // alert(event.target.value)
  // }
  //   },
  // },

  // <!--18. Отслеживание изменений с watch -->
  // внутрь wath пишут функции отслеживания. ключ этой функции 
  // должен совпадать с ключем отслеживаемого объекта. val - стандарт
  //   watch: {
  //     counter: function (val) {
  //       console.log("From watch object", val)
  //     }
  //   },
  // });
  // vue.$mount('#app');

</script>

<style lang="scss">
  // ЧЕРНОВИК НАЧАТ ////////////////////////////////
  .circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid black;
    display: inline-block;
    margin: 40px;
  }

  .red {
    background-color: red;
  }

  .blue {
    background-color: blue;
  }

  .green {
    background-color: green;
  }

</style>
