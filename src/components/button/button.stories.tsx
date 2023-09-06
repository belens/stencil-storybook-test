import { h } from '@stencil/core';

const names = ['s'];
const labels = [''];

export default {
  title: 'Atoms/button',
  args: {
    text: 'Button text',
  },
};

export const Default = args => {
  return <div>asdf {args.text}</div>;
};
