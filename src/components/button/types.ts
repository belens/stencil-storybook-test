import type { ButtonValues } from '@components/atoms/button/values';
import type { IconValues } from '@components/atoms/icon/values';

export namespace ButtonTypes {
  export type Size = `${ButtonValues.Size}`;
  export type Type = `${ButtonValues.Type}`;
  export type Variant = `${ButtonValues.Variant}`;

  export interface Props {
    text: string;
    name: string;
    type: ButtonValues.Type;
    disabled: boolean;
    variant?: ButtonValues.Variant;
    icon?: IconValues.Name;
    size?: ButtonValues.Size;
  }
}
