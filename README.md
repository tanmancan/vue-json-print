# Vue JSON Print

Pretty prints JSON object in a collapsible tree view.

Demo: https://tanmancan.github.io/examples/vue-json-print/

![](public/example.png)
*example JSON from: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON*

## Install

```bash
npm install vue-json-print
```

## Usage

This package provides a single file component meant to work with your existing Vue app. To use imply import the component and use with your app.

```javascript
const JsonTree = import 'json-tree-print'
const Vue from 'vue';

Vue.component('json-tree', JsonTree);
```

## Options

### `dataObject` (`string|number|boolean|null|object|array`)

Javascript data to be displayed. Values must be valid JSON types. If an object is provided, keys must
be valid JSON type. (ie. not `Symbol`);

```javascript
const myDataObject = {
  one: 1,
  two: 2,
  array: [
    true,
    false,
    'string',
  ],
};

<JsonTree :dataObject="myDataObject" />
```

### `dataString` (`string`)

A valid JSON string to be displayed. If both `dataString` and `dataObject` are passed, `dataObject` will be printed.

```javascript
const myDataString = '{"one":1, "two":2, "array":[true, false, "string"]}';

<JsonTree :dataString="myDataString" />
```

### `expanded` (`boolean`)

Displays the tree in an expanded state. By default each nested node will always be collapsed.

```javascript
const myDataObject = {
  one: 1,
  two: 2,
  array: [
    true,
    false,
    'string',
  ],
};

<JsonTree expanded :dataObject="myDataObject" />
```

### `depth` (`number`)

Limits how many nested nodes to print. Default of 0 will print all nodes. This is useful for deeply nested JSON data, where you may not want to output every single node.

```javascript
const myDataObject = {
  one: 1,
  two: 2,
  array: [
    true,
    false,
    'string',
  ],
};

<JsonTree :depth="2" :dataObject="myDataObject" />
```

&copy; Tanveer Karim
