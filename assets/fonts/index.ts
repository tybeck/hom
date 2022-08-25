import { FontSource } from 'expo-font'

const lithosPro = require('./lithos-pro.ttf');
const lithosProBlack = require('./lithos-pro-black.ttf');
const nunito = require('./nunito.ttf');
const nunitoBlack = require('./nunito-black.ttf');

interface IFonts extends Record<string, FontSource> {
  LithosPro: 'LithosPro',
  LithosProBlack: 'LithosProBlack',
  Nunito: 'Nunito',
  NunitoBlack: 'NunitoBlack',
}

type FontName = keyof IFonts;
type IFont = {
  [key in FontName]: FontSource;
};

const fonts: IFonts = {
  'LithosPro': lithosPro,
  'LithosProBlack': lithosProBlack,
  'Nunito': nunito,
  'NunitoBlack': nunitoBlack,
}

const Font: IFonts = {
  ...(
    Object.assign(
      ...(Object
        .keys(fonts)
        .map(font => ({ [font]: font })) as [IFont]),
    )
  ),
}

export { fonts, Font, IFont }