<template>
  <!-- // чтобы запустить приложение на сервере нужно прописать
// npm run dev -->

  <div id="app">
    <!-- <my-counter></my-counter> -->
    <!-- $event = получить параметр -->
    <h1 v-colored:background="'red'" v-if="visible">Parent: {{carName}}</h1>
    <!-- можно добавлять сразу несколько модификаторов в директиве (.font.delay) -->
    <h2 v-colored:color.font.delay="'green'" v-if="visible">Parent: {{carName}}</h2>
    <h2 v-font-directive>local font directives</h2>

    <!-- проверка жизненного цикла директив -->
    <button @click="visible = !visible">Toggle</button>
    <button @click="carName = 'B-)'">Smail</button>
    <!-- // lowercase - фильтр.
    фильтры не меняют данные, а только их отображение.
    все фильтры кастомные. Их нет в стандарте вью
    Перед тем, как вывести carName, его необходимо прогнать через фильтр -->
    <h3>{{carName | lowercase}}</h3>
    <h3>{{carName | uppercase}}</h3>
    <h3>{{carName | uppercase | lowercase}}</h3>
    <app-counter>
    </app-counter>

    <app-car :carName="carName" :carYear="carYear" :changeFunc="changeNameToAudi" @changeName="carName=$event"
      @updateCounter="counter=$event">
      <h2 slot="title">{{carName}}</h2>
      <p slot="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut a eum velit. Explicabo
        quibusdam quia repellendus ab, enim ipsum delectus vitae ratione libero molestias architecto saepe laboriosam?
        Pariatur, sapiente?
        Ipsa quidem perferendis eum consequatur nisi, dignissimos dolorum distinctio quibusdam autem cumque. Sint quasi
        nostrum quas, quam nobis, nulla ratione recusandae libero est, pariatur laboriosam rem? Deserunt aspernatur
        corporis eos.
        Commodi distinctio laudantium qui optio rerum corrupti quibusdam esse doloremque dolorem ut eveniet delectus
        earum repudiandae natus quam ipsum nihil itaque velit, magni magnam asperiores ipsa? Dolorum repellat soluta
        aliquam.
      </p>
    </app-car>
    <input type="text" v-model="searchName">
    <ul>
      <li v-for="name of filteredNames">{{name}}</li>
    </ul>
<hr>
<app-list></app-list>
<hr>
  <h2>Form inputs</h2>
  <input type="text" v-model.lazy="nameA">
  <p>{{nameA}}</p>
  <textarea v-model="textarea"></textarea>
  <p>{{textarea}}</p>
  </div>

</template>

<script>
// Регистрация компонента локально
import Car from './Car.vue';
import Counter from './Counter.vue';
import ListMixin from './listMixin.js';

// 31. регистрация компонентов в .vue
export default {
  data() {
    return {
      textarea: 'I am initial text',
      nameA: 'klara',
      carName: 'BMW bmw',
      carYear: 2020,
      // counter: 0,
      counter2: 0,
      visible: true,
    };
  },
  //миксин вью: импортируется в начале файла и прописывается в объекте mixins
  mixins: [ListMixin],
  // computed - функции сортировки. Всегда должны что-то возвращать.
  // computed: {
  // filteredNames() {
  //   return this.names.filter(name => {
  //     //в теле функции условие, которое должно возвращать
  //     // true(элемент остается в массиве) или false( элемент удаляется)
  //     return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1;
  //   });
  // },
  // },
  // фильтры - функции изменяющие внешний вид данных, но не сами данные
  filters: {
    lowercase(value){
      return value.toLowerCase()
    }
  },
  // регистрация директивы локально
  directives: {
    fontDirective: {
      bind(el, bindings, vnode) {
        el.style.fontSize = '10px'
      }
    }
  },
  // Регистрация компонента локально
  components: {
    appCar: Car,
    appCounter: Counter,
  },
  methods: {
    changeNameToAudi() {
      this.carName = 'Audi';
    },
  },
};
// var vue = new Vue({
//   el: "#app",
//   data: {
//     url: 'http://google.com',
//     link: '<a href="http://google.com">Google html</a>',
//     x: 0,
//     y: 0,
//     isActive: false,
//     color: 'blue',
//     white: 'rgb(255, 255, 255)',
//     height: '100',
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

<style scoped>
h2 {
  color: brown;
}
textarea {
  height: 100px;
  width: 400px;
}
/* сохранение в параграфе форматирования */
p {
  white-space: pre;
}
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid black;
  display: inline-block;
  margin: 40px;
}

.red {
  background-color: black;
  color: red;
}

.blue {
  background-color: blue;
}

.green {
  background-color: green;
}

</style>
