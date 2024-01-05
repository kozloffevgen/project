import { shallowMount } from '@vue/test-utils';
import VButton from '@/components/common/VButton.vue';

const props = {
  btnType: 'submit',
  value: 'Test',
}
describe('VButton.vue', () => {
  Object.entries(props).forEach(([propsName, propsValue]) => {
    it(`props.${propsName} check`, () => {
      const wrapper = shallowMount(VButton, {
        props: { [propsName]: propsValue },
      });

      expect(wrapper.html()).toMatch(propsValue);
    })
  })
  it('event click emit check', () => {
    const wrapper = shallowMount(VButton);
    wrapper.find('.v-button').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('btn-click');
  })
})
