import AuiAvatar from './Avatar.vue'

import {shallow} from 'vue-test-utils'

describe('AuiAvatar.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(AuiAvatar, {propsData: {src: 'test'}})
    expect(wrapper.is('span')).toBe(true);
    expect(wrapper.hasClass('aui-avatar')).toBe(true);
    expect(wrapper.hasClass('aui-avatar-medium')).toBe(true);
    expect(wrapper.find('.aui-avatar > .aui-avatar-inner').exists()).toBeTruthy();
    expect(wrapper.find('.aui-avatar-inner > img').exists()).toBeTruthy();
  })
})
