<template>
   <div id="app2">
    <h2>{{title}}</h2>
    <button @click="UpdateFirstTitle"> Updated title </button>
  </div>  
</template>
<script>
var vue2 = new Vue({
      el: "#app2",
      data: {
        title: 'I am title 2!',
      },
      methods: {
        UpdateFirstTitle: function () {
          vue1.title = 'I am title UpdateFirstTitle in block app2';
        }
      },
    });
    vue2.$mount('#app2');
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