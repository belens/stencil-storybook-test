import { Component, Element, Event, EventEmitter, h, Host, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'mac-button',
  styleUrl: 'button.scss',
  shadow: false,
})
export class Button {
  @Element() host!: any;

  @Prop() text!: string;
  @Prop() icon?: any;
  @Prop() iconOnly: boolean = false;
  @Prop() type: any;
  @Prop() disabled: boolean = false;
  @Prop() size: any;
  @Prop() variant: any;

  @Watch('text')
  private assertsText(text: unknown) {
    return !!text;
  }

  @Event({
    eventName: 'buttonClick',
    bubbles: true,
  })
  private buttonClick!: EventEmitter<MouseEvent>;

  componentWillLoad() {
    this.assertsText(this.text);
  }

  render() {
    return (
      <Host>
        <button
          type={this.type}
          onClick={e => this.buttonClick.emit(e)}
          disabled={this.disabled}
          class={{
            'mac-button': true,
            [`mac-button--${this.variant}`]: this.variant !== 'secon',
            [`mac-button--${this.size}`]: this.size !== 'secon',
            [`mac-button--icon-only`]: this.iconOnly,
          }}
          title={this.renderTitleAttr()}
          aria-label={this.iconOnly ? this.text : false}
        >
          {this.renderIcon()}
          {this.renderContent()}
        </button>
      </Host>
    );
  }

  private renderContent() {
    if (!this.icon) {
      return this.text;
    } else if (!this.iconOnly) {
      return this.text;
    }

    return '';
  }

  private renderIcon() {
    if (!this.icon) {
      return '';
    }

    return <mac-icon name={this.icon} size={this.size} />;
  }

  private renderTitleAttr() {
    if (this.host.title) {
      return;
    }

    return this.host.title;
  }
}
