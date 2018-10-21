import { mount } from '@vue/test-utils'
import Me from '../../src/components/Me.vue'

test('Me has a h1 element', () => {
  const wrapper = mount(Me)
  expect(wrapper.find('.description').exists()).toEqual(true)
})

test('Me contains correct text', () => {
  const wrapper = mount(Me)
  expect(wrapper.find('.description').text()).toEqual(`Hello, I'm Ken!`)
})
