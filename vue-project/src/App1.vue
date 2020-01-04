<template>
     <div id="app1">
    <!-- heading и watermelon это ключи, по которым можно обратиться к DOM-элементам -->
    <!-- для работы с DOM лучше использовать ref, так как он быстрее работает, чем команда "document.querySelector()" -->
    <h2 ref="heading">{{title}}</h2>
    <h2 ref="watermelon">{{title}}</h2>
    <button @click="UpdateFirstTitle"> Updated title </button>
    <button @click="doDestroyed"> Destroy title </button>
    <!-- 21. Свойство template -->
    <hr>
    <h2 ref="heading">{{title21}}</h2>
    <!-- 23. Зачем нужен CLI установка и создание проекта
      разворачивает готовые проекты на вью чтобы дальше их использовать
    https://cli.vuejs.org/ 
    npm install -g @vue/cli-init
    vue init webpack-simple vue-project
    vue-redmuseum 
       To get started:

     cd vue-project
     npm install
     npm run dev
     установка оф сайт.
  у расширения файла .vue есть правила:
  1) 3 основные части: 
  <template>шаблон всего приложения</template> (обязательный)
  <script> 
  <style> -->

  </div> 
</template>
<script>
var vue1 = new Vue({
      data: {
        title: 'I am title!',
        title21: 'Hello I am Vue',
      },
      // <!-- 22. Жизненный цикл компонента или инстанс вью(экземпляр класса) new vue - это класс вью-->
      // Отслеживание этапов работы вью
      beforeCreate: function () {
        console.log('before Create');
      },
      created: function(){
        console.log('Created');
      },
      beforeMount: function(){
        console.log('Before Mount');
      },
      mounted: function(){
        console.log('Mounted');
      },
      // Изменение компонента
      beforeUpdate: function() {
        console.log('Before Update');
      },
      updated: function() {
        console.log('Updated');
      },
      // Отслеживание удаления компонента
      beforeDestroy: function(){
        console.log('Before Destroy');
      },
      destroyed: function(){
        console.log('Destroyed');
      },
      methods: {
        UpdateFirstTitle: function () {
          this.title = 'I am title UpdateFirstTitle in block app1';
          // Все системные названия vue js начинаются с символа $
          console.log(this.$refs);
          this.$refs.watermelon.style.color = 'green';
        },
        doDestroyed: function(){
          // уничтожает приложение, кнопки перестают работать(измененные элементы сохраняются такими, приложение перестает есть память)
          this.$destroy();
        },
      },
      // template заменяет все содержимое выбранного блока. необходимо элемент оборачивать в div-обертку-блок
      // template: '<div>
      // <h1>{{ title }}</h1>
      // </div>',
    });
    // После создания блока - присваиваем его элементу с id = app
    vue1.$mount('#app1');
</script>
<style>
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
