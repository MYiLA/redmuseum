<template>
<div class="car">
    <h3>Name: {{carName}}\{{reverseName}}</h3>
    <p>Year: {{carYear}}</p>
    <button @click="changeName">Change name</button>
    <button @click="changeFunc()">change from parent</button>
</div>
</template>

<script>
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
      changeName: function(){
         this.carName = 'Mazda';
        //  уведомление родителя о изменениях
        // this.$emit('название прослушиваемого события', значение которое изменилось)
        this.$emit('changeName', this.carName);
      },
    },
    // data(){
    //     return {
    //         carYear: 2015,
    //     }
    // },
}
</script>


<style>
.car {
    border: 1px solid black;
}
.car h3 {
    margin-bottom: 5px;
}
</style>