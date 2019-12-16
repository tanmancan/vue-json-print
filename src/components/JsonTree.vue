<template>
  <div :class="`data__type data__type--${dataType} data__type--${openClassModifier}`">
    <span
      @click="toggleNode"
      :class="!isPrimitive
        ? `data__list-handle data__list-handle--${openClassModifier}`
        : 'data__no-list'">
      <span class="data__key">{{ objectKey }}</span>
      <span :class="dataValueClass">{{ dataValue }}</span>
    </span>
    <div
      v-if="isObject || isArray"
      :class="`data__list-items data__list-items--${openClassModifier}`">
      <JsonTree
        v-for="(node, key) in data"
        :key="key"
        :object-key="key"
        :data-object="node"
        :expanded="expanded"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'JsonTree',
  props: {
    dataObject: {
      type: [Object, Array, String, Number, Boolean],
      default: null,
    },
    dataString: {
      type: String,
      default: undefined,
    },
    objectKey: {
      type: [String, Number],
      default: 'DATA',
    },
    expanded: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      open: this.expanded,
    };
  },
  computed: {
    data() {
      if (typeof this.dataObject === 'boolean') return this.dataObject;
      if (this.dataObject) {
        return this.dataObject;
      }
      if (this.dataString) {
        try {
          return JSON.parse(this.dataString);
        } catch (error) {
          return `ERROR: ${error.message}`;
        }
      }
      return null;
    },
    dataValue() {
      if (this.isArray) return `Array[${this.data.length}]`;
      if (this.isObject) return 'Object';
      return this.primitiveValue;
    },
    primitiveValue() {
      if (this.isNull) return 'null';
      return this.data;
    },
    dataType() {
      if (this.isNull) return 'null';
      if (this.isObject) return 'object';
      if (this.isArray) return 'array';
      return typeof this.data;
    },
    isPrimitive() {
      return (
        typeof this.data === 'string'
        || typeof this.data === 'number'
        || typeof this.data === 'boolean'
        || this.isNull
      );
    },
    isObject() {
      return (
        !this.isNull
        && !this.isUndefined
        && !Array.isArray(this.data)
        && typeof this.data === 'object'
      );
    },
    isArray() {
      return Array.isArray(this.data);
    },
    isNull() {
      return this.data === null;
    },
    dataValueClass() {
      const dataValueClass = [
        'data__value',
      ];

      if (this.isPrimitive) {
        dataValueClass.push([
          'data__value--primitive',
          `data__value--${this.dataType}`,
        ]);
      }

      if (this.isArray) {
        dataValueClass.push([
          'data__value--array',
        ]);
      }

      if (this.isObject) {
        dataValueClass.push([
          'data__value--object',
        ]);
      }

      return dataValueClass;
    },
    openClassModifier() {
      return this.open
        ? 'opened'
        : 'closed';
    },
  },
  methods: {
    toggleNode(e) {
      e.preventDefault();
      if (this.isPrimitive) return;
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
.data__type {
  position: relative;
  font-family: courier;
  font-size: 1rem;
  white-space: pre;
}
.data__type--opened:before {
  content: '';
  position: absolute;
  height: calc(100% - 1rem);
  top: 1rem;
  left: calc(.25rem / 2);
  border-left: 1px dotted #ccc;
}
.data__key {
  color: sandybrown;
  display: inline-block;
  padding-right: .5rem;
}
.data__key:after {
  content: ':';
  color: #666;
}
.data__value--string {
  color: darkseagreen;
}
.data__value--string:before,
.data__value--string:after {
  content: '"';
  color: #666;
}
.data__value--number {
  color: royalblue;
}
.data__value--boolean {
  color: violet;
}
.data__value--null {
  color: #ccc;
}
.data__value--object,
.data__value--array {
  color: #666;
}
.data__list-handle:before {
  content: '';
  height: 0;
  border-style: solid;
  border-width: .25rem .45rem;
  border-color: transparent transparent transparent #666;
  display: inline-block;
  vertical-align: middle;
}
.data__list-handle--opened:before {
  transform: rotate(90deg) translate3d(.25rem, .25rem, 0);
}
.data__list-handle:hover {
  cursor: pointer;
}
.data__list-items {
  margin-left: 1.5rem;
  display: none;
}
.data__list-items--opened {
  display: block;
}
</style>
