import { h } from '@stencil/core';
// import { ButtonValues } from './values';
// import { IconValues } from '../icon/values';

const names = ['s'];
const labels = [''];

export default {
  title: 'Atoms/button',
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    icon: {
      options: names,
      control: { type: 'select', labels },
    },
    iconOnly: {
      control: { type: 'boolean' },
    },
    variant: {
      control: { type: 'inline-radio' },
      options: [],
    },
    size: {
      control: { type: 'inline-radio' },
      options: [],
    },
    title: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    onButtonClick: { action: 'onButtonClick' },
  },
  args: {
    text: 'Button text',
    iconOnly: false,
    variant: 'asdf',
    size: 'asdf',
    disabled: false,
  },
};

export const Default = () => {
  return <div>asdf</div>;
};
