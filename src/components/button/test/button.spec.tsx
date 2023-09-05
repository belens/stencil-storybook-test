import { ButtonValues } from '@components/atoms/button/values';
import { IconValues } from '@components/atoms/icon/values';
import { newSpecPage } from '@stencil/core/testing';

import { Button } from '../button';

// only run this file --> npx stencil test --spec -- button.spec.tsx
describe('<mac-button />', () => {
  it('should render with default properties', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: '<mac-button text="Click me" />',
    });

    expect(page.root).toMatchSnapshot();
  });

  it('should have a title', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<mac-button text="Click me" title="You should click me" />`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it.each(Object.values(ButtonValues.Variant))('should add css class for variant %s', async variant => {
    const page = await newSpecPage({
      components: [Button],
      html: `<mac-button text="Click me" variant="${variant}" />`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it.each(Object.values(ButtonValues.Size))('should add css class for size %s', async size => {
    const page = await newSpecPage({
      components: [Button],
      html: `<mac-button text="Click me" size="${size}" />`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('should be disabled', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: '<mac-button text="Click me" disabled="" />',
    });

    expect(page.root).toMatchSnapshot();
  });

  it('should be a submit button', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: '<mac-button type="submit" text="Click me" />',
    });

    expect(page.root).toMatchSnapshot();
  });

  it('should have an icon', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<mac-button text="Click me" icon="${IconValues.Name.ADD}" />`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('should only have an icon (and an aria-label)', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<mac-button text="Click me" icon="${IconValues.Name.ADD}" icon-only="" />`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
