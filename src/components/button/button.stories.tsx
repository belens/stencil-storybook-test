import { h } from '@stencil/core';
import { ButtonValues } from './values';
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
      options: Object.values(ButtonValues.Variant),
    },
    size: {
      control: { type: 'inline-radio' },
      options: Object.values(ButtonValues.Size),
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
    variant: ButtonValues.Variant.SECONDARY,
    size: ButtonValues.Size.MEDIUM,
    disabled: false,
  },
};

export const Default = args => {
  return <div>asdf</div>;
};
