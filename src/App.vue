<template>
  <div id="app">
    <h1>vue-json-print</h1>
    <p>
      <a href="https://www.npmjs.com/package/vue-json-print">https://www.npmjs.com/package/vue-json-print</a>
    </p>
    <p>
      View the source for this page
      <a href="https://github.com/tanmancan/vue-json-print/blob/master/src/App.vue">here</a>.
    </p>
    <h2>Limits output to 3 nested nodes</h2>
    <JsonTree
    :depth="3"
    expanded
    :data-object="exampleDataJavascript" />
<pre>{{ typeof exampleDataJavascript }}: {{ exampleDataJavascript }}</pre>
    <h2>Print all nodes as expanded</h2>
    <JsonTree
    :depth="3"
    :data-object="exampleDataJson" expanded />
<pre>{{ typeof exampleDataJson }}: {{ exampleDataJson }}</pre>
    <h2>Uses a JSON string value</h2>
    <JsonTree
    :data-string="exampleDataString" />
<pre>{{ typeof exampleDataString }}: {{ exampleDataString }}</pre>
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
      hidden: false,
      exampleDataJson: exampleData,
      exampleDataString: '{"test": false}',
      exampleDataJavascript: {
        myNumber: 1235,
        myString: 'Hello world',
        // This key/value will not be used. Only valid JSON types allowed.
        [symbolKey]: 'A symbol key',
        nestedArray: [
          true,
          'Another string',
          {
            nestedObject: {
              anotherNestedObject: {
                myNestedKey: false,
                myNestedNumber: 123,
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
body {
  font-family: sans-serif;
}
</style>
