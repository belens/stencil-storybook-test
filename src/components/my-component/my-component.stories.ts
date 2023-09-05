// export default {
//   // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
//   title: 'Components/MyComponent',
//   // this is an example of how to add actions to the story
//   parameters: {
//     actions: {
//       argTypesRegex: '^on.*',
//       handles: ['click'], // you can add custom events to this array to trigger actions
//     },
//   },
// };

// const Template = args => `<my-component first="${args.first}" middle="${args.middle}" last="${args.last}"></my-component>`;

// export const Example = Template.bind({});
// Example.args = {
//   first: 'Winnie',
//   middle: 'The',
//   last: 'Pooh',
// };

// stories/Button.stories.jsx
import { MyComponent } from './my-component';

export default {
  component: MyComponent,
};

export const Basic = {
  args: {
    text: 'Hello World',
    color: 'purple',
  },
};
