# Vue JSON Print

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

### `dataString` (`string`)

A valid JSON string to be displayed. If both `dataString` and `dataObject` are passed, `dataObject` will be printed.

### `expanded` (`boolean`)

Displays the tree in an expanded state. By default each nested node will always be collapsed.



&copy; Tanveer Karim
