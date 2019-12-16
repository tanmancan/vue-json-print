<template>
  <div id="app">
    <JsonTree :data-object="exampleData" expanded/>
    <JsonTree :data-string="exampleDataString"/>
  </div>
</template>

<script>
import JsonTree from './components/JsonTree.vue';
import exampleData from './assets/example.json';

export default {
  name: 'app',
  components: {
    JsonTree,
  },
  data() {
    return {
      exampleData,
      exampleDataString: '{"test": false}',
    };
  },
};
</script>
