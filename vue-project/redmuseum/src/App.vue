<template>
  <!-- // чтобы запустить приложение на сервере нужно прописать
// npm run dev -->

  <div id="app">
    <!-- <my-counter></my-counter> -->
     <!-- $event = получить параметр -->
    <h1 v-colored>Parent: {{carName}}</h1>
      <app-counter>
    </app-counter>

    <app-car
    :carName="carName"
    :carYear="carYear"
    :changeFunc="changeNameToAudi"
    @changeName="carName=$event"
    @updateCounter="counter=$event">
      <h2 slot="title">{{carName}}</h2>
      <p slot="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut a eum velit. Explicabo quibusdam quia repellendus ab, enim ipsum delectus vitae ratione libero molestias architecto saepe laboriosam? Pariatur, sapiente?
      Ipsa quidem perferendis eum consequatur nisi, dignissimos dolorum distinctio quibusdam autem cumque. Sint quasi nostrum quas, quam nobis, nulla ratione recusandae libero est, pariatur laboriosam rem? Deserunt aspernatur corporis eos.
      Commodi distinctio laudantium qui optio rerum corrupti quibusdam esse doloremque dolorem ut eveniet delectus earum repudiandae natus quam ipsum nihil itaque velit, magni magnam asperiores ipsa? Dolorum repellat soluta aliquam.
      </p>
    </app-car>

  </div>
</template>

<script>
// Регистрация компонента локально
import Car from './Car.vue';
import Counter from './Counter.vue';

// 31. регистрация компонентов в .vue
  export default {
    data() {
      return {
        carName: 'BMW',
        carYear: 2020,
        // counter: 0,
        counter2: 0,
      };
    },
    // Регистрация компонента локально
    components:{
      appCar: Car,
      appCounter: Counter,
      },
      methods: {
changeNameToAudi(){
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
