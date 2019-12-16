<template>
  <div id="app">
    <JsonTree :data-object="exampleDataJavascript" />
    <JsonTree :data-object="exampleDataJson" expanded />
    <JsonTree :data-string="exampleDataString" />
  </div>
</template>

<script>
import JsonTree from './components/JsonTree.vue';
import exampleData from './assets/example.json';

const symbolKey = Symbol('symbolKey');

export default {
  name: 'app',
  components: {
    JsonTree,
  },
  data() {
    return {
      exampleDataJson: exampleData,
      exampleDataString: '{"test": false}',
      exampleDataJavascript: {
        myNumber: 1235,
        myString: 'Hello world',
        [symbolKey]: 'A symbol key',
      },
    };
  },
};
</script>
