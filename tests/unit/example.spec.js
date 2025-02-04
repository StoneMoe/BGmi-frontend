import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
describe('HelloWorld.vue', function() {
  it('renders props.msg when passed', function() {
    var msg = 'new message';
    var wrapper = shallowMount(HelloWorld, {
      propsData: { msg: msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
// # sourceMappingURL=example.spec.js.map
