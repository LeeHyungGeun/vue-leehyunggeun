import { mount } from '@vue/test-utils'
import Me from '../../src/components/Me.vue'

test('Me has a h1 element', () => {
  const wrapper = mount(Me, { propsData: { name: 'World' } })
  expect(wrapper.find('h1').exists()).toEqual(true)
})

test('Me contains correct text', () => {
  const wrapper = mount(Me, { propsData: { name: 'World' } })
  expect(wrapper.find('h1').text()).toEqual('Hello World!')
})
