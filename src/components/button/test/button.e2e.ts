import { createE2EPage } from '@test/helpers';

// only run this file --> npx stencil test --e2e -- button.e2e.ts
describe('<mac-button />', () => {
  it('should emit the buttonClick event when the button is clicked', async () => {
    const { component } = await createE2EPage('<mac-button text="Click me" />');
    const button = await component.find('button');
    const clickEvent = await component.spyOnEvent('buttonClick');

    await button.click();

    expect(clickEvent).toHaveReceivedEventTimes(1);
  });

  it('should not emit the buttonClick event when the disabled button is clicked', async () => {
    const { component } = await createE2EPage('<mac-button text="Click me" disabled="" />');
    const button = await component.find('button');
    const clickEvent = await component.spyOnEvent('buttonClick');

    await button.click();

    expect(clickEvent).toHaveReceivedEventTimes(0);
  });
});
