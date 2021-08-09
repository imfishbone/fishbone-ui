import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { BaseButtonProps } from './Button';

export default {
  title: 'Example/Button',
  parameters: {
    docs: {
      description: {
        component: '这是一个简单的 Button 组件',
      },
    },
  },
  component: Button,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      }
    },
    btnType: {
      control: {
        type: 'select',
        options: ['primary', 'default', 'danger', 'link']
      }
    },
    size: {
      control: {
        type: 'radio',
        options: ['lg', 'sm'],
      }
    },
  },
} as Meta

const Template: Story<BaseButtonProps> = (args) => (<Button {...args}>Button</Button>);

export const Default = Template.bind({});
Default.args = {
  size: 'lg',
  btnType: 'default'
};

export const Primary = Template.bind({});
Primary.args = {
  size: 'lg',
  btnType: 'primary'
};

export const Danger = Template.bind({});
Danger.args = {
  size: 'lg',
  btnType: 'danger'
};

export const Link = Template.bind({});
Link.args = {
  size: 'lg',
  btnType: 'link',
  href: 'https://fishbone.live',
};