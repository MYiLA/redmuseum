<template>
<div>
  <h2>Counter</h2>
  <h3>Counter: {{counter}}</h3>
  <p>
    Lorem, ipsum dolor sit amet consectetur 
    adipisicing elit. Quasi doloremque illum hic 
    repudiandae ipsum similique esse laboriosam 
    magni incidunt reiciendis fugiat rem deserunt,
    eius quaerat voluptatibus soluta culpa. Provident, minima.
  </p>
</div>

</template>


<script>
import { eventEmitter } from './main';
  export default {
    data () {
      return {
        counter: 0,
      };
    },
    created(){
      eventEmitter.$on('updateCounter', (num) => {
        this.counter += num;
      })
    }
  };
  </script>


<style></style>