<template>
<div>
  <h1>List</h1>
   <input type="text" v-model="searchName">
    <ul>
      <li :key="name" v-for="name of filteredNames">{{name}}</li>
    </ul>
</div>
</template>



<script>
import ListMixin from './listMixin.js';
export default {
  mixins: [ListMixin],
};
</script>



<style>

</style>
