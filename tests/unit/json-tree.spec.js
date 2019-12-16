import { expect } from 'chai';
import { shallowMount, mount } from '@vue/test-utils';
import JsonTree from '../../src/components/JsonTree.vue';

const defaultKey = 'DATA';

describe('JsonTree.vue', () => {
  it('renders json string object when passed', () => {
    const data = {
      test: false,
    };
    const jsonString = JSON.stringify(data);
    const wrapper = shallowMount(JsonTree, {
      propsData: {
        dataString: jsonString,
      },
    });
    expect(wrapper.text()).to.include(defaultKey);
    expect(wrapper.text()).to.include('Object');
  });

  it('renders json string array when passed', () => {
    const data = [
      'test',
      false,
    ];
    const jsonString = JSON.stringify(data);
    const wrapper = shallowMount(JsonTree, {
      propsData: {
        dataString: jsonString,
      },
    });
    expect(wrapper.text()).to.include(defaultKey);
    expect(wrapper.text()).to.include(`Array[${data.length}]`);
  });

  it('renders object data when passed', () => {
    const data = {
      test: false,
    };
    const wrapper = shallowMount(JsonTree, {
      propsData: {
        dataObject: data,
      },
    });
    expect(wrapper.text()).to.include(defaultKey);
    expect(wrapper.text()).to.include('Object');
  });

  it('renders nested object data when passed', () => {
    const data = {
      test: false,
    };
    const wrapper = mount(JsonTree, {
      propsData: {
        dataObject: data,
      },
    });
    const wrapperNested = wrapper.findAll(JsonTree);
    for (let idx = 1; idx < wrapperNested.length; idx += 1) {
      const dataKey = Object.keys(data)[idx - 1];
      expect(wrapperNested.at(idx).text()).to.include(dataKey);
      expect(wrapperNested.at(idx).text()).to.include(data[dataKey]);
    }
  });

  it('renders array data when passed', () => {
    const data = [
      'test',
      false,
    ];
    const wrapper = shallowMount(JsonTree, {
      propsData: {
        dataObject: data,
      },
    });
    expect(wrapper.text()).to.include(defaultKey);
    expect(wrapper.text()).to.include(`Array[${data.length}]`);
  });

  it('renders nested array data when passed', () => {
    const data = [
      'test',
      false,
    ];
    const wrapper = mount(JsonTree, {
      propsData: {
        dataObject: data,
      },
    });
    const wrapperNested = wrapper.findAll(JsonTree);
    for (let idx = 1; idx < wrapperNested.length; idx += 1) {
      expect(wrapperNested.at(idx).text()).to.include(idx - 1);
      expect(wrapperNested.at(idx).text()).to.include(data[idx - 1]);
    }
  });

  it('renders strings when passed', () => {
    const data = 'A string';
    const wrapper = shallowMount(JsonTree, {
      propsData: {
        dataObject: data,
      },
    });
    expect(wrapper.text()).to.include(defaultKey);
    expect(wrapper.text()).to.include(data);
  });

  it('renders number when passed', () => {
    const data = 12345;
    const wrapper = shallowMount(JsonTree, {
      propsData: {
        dataObject: data,
      },
    });
    expect(wrapper.text()).to.include(defaultKey);
    expect(wrapper.text()).to.include(data);
  });

  it('renders boolean when passed', () => {
    const data = false;
    const wrapper = shallowMount(JsonTree, {
      propsData: {
        dataObject: data,
      },
    });
    expect(wrapper.text()).to.include(defaultKey);
    expect(wrapper.text()).to.include(data);
  });

  it('renders null when passed', () => {
    const data = null;
    const wrapper = shallowMount(JsonTree, {
      propsData: {
        dataObject: data,
      },
    });
    expect(wrapper.text()).to.include(defaultKey);
    expect(wrapper.text()).to.include(data);
  });
});
