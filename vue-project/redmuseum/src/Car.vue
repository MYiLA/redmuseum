<template>
  <div class="car">
      <h2>Car</h2>
    <h3>Name: {{carName}}\{{reverseName}}</h3>
    <p>Year: {{carYear}}</p>
    <button @click="changeName">Change name</button>
    <button @click="changeFunc()">change from parent</button>
    <button @click="updateCounter()">Update Counter</button>
    <p>
      Lorem ipsum dolor sit amet,
      consectetur adipisicing elit.
      Harum ullam exercitationem, eaque,
      molestias omnis voluptatibus natus
      sed totam ratione odio sint dolor dolorum.
      Facilis quae dolor, expedita doloribus sit vel!
    </p>
    <!-- slot - зарезервированное имя для обозначения места
     вставки html из родительского блока-->
    <slot name="title"></slot>
    <hr>
    <hr>
    <slot name="text"></slot>
  </div>
</template>

<script>
// фигурные собки потому, что мы пишем декомпозицию 
// объекта(мы не экспортируем по дефолту)
import {eventEmitter} from './main';
export default {
    // предупреждение о передаваемых параметрах 
    // от родителя
    // props:['carName', 'carYear'],
     // валидация передаваемых параметров
    //  props: {
    //      carName: String,
    //      carYear: Number,
    //  },
        props: {
          carName: {
            type: String,
            // данное поле обязательное, 
            // без него компонент не рабоьает
            // required: true,
            default: 'Default name',
          },
          carYear: Number,
          changeFunc: Function,
        },
   
    computed: {
        reverseName() {
            return this.carName.split('').reverse().join('')
        }
    },
    methods: {
      changeName() {
        this.carName = 'Mazda';
        //  уведомление родителя о изменениях
        // this.$emit('название прослушиваемого события', значение которое изменилось)
        this.$emit('changeName', this.carName);
      },
      updateCounter() {
        // this.$emit('updateCounter', this.counter + 1);
// инстанс вью: эмитим событие и передаем в него параметр, который будет 
// использоваться в компоненте counter как параметр 
// num данной функции updateCounter
        eventEmitter.$emit('updateCounter', 3);
      },
    },
    // data(){
    //     return {
    //         carYear: 2015,
    //     }
    // },
};
</script>


<style scoped>
/* // атрибут scoped инкапсулирует стили для блока */
div {
    background-color: rgba(92, 218, 207, 0.5);
}

/* почитать про 
$emit метод
декомпозиция объекта
экспорт по дефолту
экспорт ES6
инстанс вью */
</style>
