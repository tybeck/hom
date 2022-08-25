import {Color as SharedColor} from '@hoagiesonmain/shared';

export enum Sizing {
  Mini = 'mini',
  Small = 'small',
  Medium = 'medium',
  Xmedium = 'xmedium',
  Large = 'large',
  Xlarge = 'xlarge',
  Xxlarge = 'xxlarge',
}

type SizingType = {[K in Capitalize<Sizing>]: Lowercase<K>};
type SpacingType = {[K in Capitalize<Sizing>]: Lowercase<K>};

export const Size: SizingType = {
  Mini: 'mini',
  Small: 'small',
  Medium: 'medium',
  Xmedium: 'xmedium',
  Large: 'large',
  Xlarge: 'xlarge',
  Xxlarge: 'xxlarge',
};

export const Spacing: SpacingType = Size;

export enum Font {
  LithosPro = 'LithosPro',
  LithosProBlack = 'LithosProBlack',
  Nunito = 'Nunito',
  NunitoBlack = 'NunitoBlack',
}

export type FontSize = Record<Sizing, number>;
export type SpaceSize = Record<Sizing, number>;

export enum ThirdPartyColorName {
  /**
   * @color BlueJeans
   * Used for twitter
   */
  BlueJeans = 'blueJeans',
  BdazzledBlue = 'bdazzledBlue',
  Cinnabar = 'cinnabar',
}

export type Color = Record<ThirdPartyColorName, string> & SharedColor;

export type ITheme = {
  colors: Color;
  fontSize: FontSize;
  spaceSize: SpaceSize;
};
