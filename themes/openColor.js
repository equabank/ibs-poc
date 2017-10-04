// @flow

// These colors have been taken from open-color@1.4.0
// We don't import them from NPM because they can change.
// blue - blue0 - blue9
// cyan - cyan0 - cyan9
// grape - grape0 - grape9
// gray - gray0 - gray9
// green - green0 - green9
// indigo - indigo0 - indigo9
// lime - lime0 - lime9
// orange - orange0 - orange9
// pink - pink0 - pink9
// red - red0 - red9
// teal - teal0 - teal9
// violet - violet0 - violet9
// yellow - yellow0 - yellow9

export type OpenColor = {
  white: string,
  black: string,
  blue0: string,
  blue1: string,
  blue2: string,
  blue3: string,
  blue4: string,
  blue5: string,
  blue6: string,
  blue7: string,
  blue8: string,
  blue9: string,
  blue10: string,
  cyan0: string,
  cyan1: string,
  cyan2: string,
  cyan3: string,
  cyan4: string,
  cyan5: string,
  cyan6: string,
  cyan7: string,
  cyan8: string,
  cyan9: string,
  grape0: string,
  grape1: string,
  grape2: string,
  grape3: string,
  grape4: string,
  grape5: string,
  grape6: string,
  grape7: string,
  grape8: string,
  grape9: string,
  gray0: string,
  gray1: string,
  gray2: string,
  gray3: string,
  gray4: string,
  gray5: string,
  gray6: string,
  gray7: string,
  gray8: string,
  gray9: string,
  gray10: string,
  gray11: string,
  gray12: string,
  green0: string,
  green1: string,
  green2: string,
  green3: string,
  green4: string,
  green5: string,
  green6: string,
  green7: string,
  green8: string,
  green9: string,
  indigo0: string,
  indigo1: string,
  indigo2: string,
  indigo3: string,
  indigo4: string,
  indigo5: string,
  indigo6: string,
  indigo7: string,
  indigo8: string,
  indigo9: string,
  lime0: string,
  lime1: string,
  lime2: string,
  lime3: string,
  lime4: string,
  lime5: string,
  lime6: string,
  lime7: string,
  lime8: string,
  lime9: string,
  orange0: string,
  orange1: string,
  orange2: string,
  orange3: string,
  orange4: string,
  orange5: string,
  orange6: string,
  orange7: string,
  orange8: string,
  orange9: string,
  pink0: string,
  pink1: string,
  pink2: string,
  pink3: string,
  pink4: string,
  pink5: string,
  pink6: string,
  pink7: string,
  pink8: string,
  pink9: string,
  red0: string,
  red1: string,
  red2: string,
  red3: string,
  red4: string,
  red5: string,
  red6: string,
  red7: string,
  red8: string,
  red9: string,
  teal0: string,
  teal1: string,
  teal2: string,
  teal3: string,
  teal4: string,
  teal5: string,
  teal6: string,
  teal7: string,
  teal8: string,
  teal9: string,
  violet0: string,
  violet1: string,
  violet2: string,
  violet3: string,
  violet4: string,
  violet5: string,
  violet6: string,
  violet7: string,
  violet8: string,
  violet9: string,
  yellow0: string,
  yellow1: string,
  yellow2: string,
  yellow3: string,
  yellow4: string,
  yellow5: string,
  yellow6: string,
  yellow7: string,
  yellow8: string,
  yellow9: string,
};

// Copy pasted from open-color@1.4.0
const openColorOriginal = {
  white: '#ffffff',
  black: '#000000',
  gray: [
    '#f8f9fa',
    '#f1f3f5',
    '#e9ecef',
    '#dee2e6',
    '#ced4da',
    '#adb5bd',
    '#868e96',
    '#495057',
    '#343a40',
    '#212529',
    '#ececec',
    '#9c9c9c',
    '#B0B0B0',
  ],
  red: [
    '#fff5f5',
    '#ffe3e3',
    '#ffc9c9',
    '#ffa8a8',
    '#ff8787',
    '#ff6b6b',
    '#fa5252',
    '#f03e3e',
    '#e03131',
    '#c92a2a',
  ],
  pink: [
    '#fff0f6',
    '#ffdeeb',
    '#fcc2d7',
    '#faa2c1',
    '#f783ac',
    '#f06595',
    '#e64980',
    '#d6336c',
    '#c2255c',
    '#a61e4d',
  ],
  grape: [
    '#f8f0fc',
    '#f3d9fa',
    '#eebefa',
    '#e599f7',
    '#da77f2',
    '#cc5de8',
    '#be4bdb',
    '#ae3ec9',
    '#9c36b5',
    '#862e9c',
  ],
  violet: [
    '#f3f0ff',
    '#e5dbff',
    '#d0bfff',
    '#b197fc',
    '#9775fa',
    '#845ef7',
    '#7950f2',
    '#7048e8',
    '#6741d9',
    '#5f3dc4',
  ],
  indigo: [
    '#edf2ff',
    '#dbe4ff',
    '#bac8ff',
    '#91a7ff',
    '#748ffc',
    '#5c7cfa',
    '#4c6ef5',
    '#4263eb',
    '#3b5bdb',
    '#364fc7',
  ],
  blue: [
    '#e8f7ff',
    '#ccedff',
    '#a3daff',
    '#72c3fc',
    '#4dadf7',
    '#329af0',
    '#228ae6',
    '#1c7cd6',
    '#1b6ec2',
    '#1862ab',
    '#02b1f4',
  ],
  cyan: [
    '#e3fafc',
    '#c5f6fa',
    '#99e9f2',
    '#66d9e8',
    '#3bc9db',
    '#22b8cf',
    '#15aabf',
    '#1098ad',
    '#0c8599',
    '#0b7285',
  ],
  teal: [
    '#e6fcf5',
    '#c3fae8',
    '#96f2d7',
    '#63e6be',
    '#38d9a9',
    '#20c997',
    '#12b886',
    '#0ca678',
    '#099268',
    '#087f5b',
  ],
  green: [
    '#ebfbee',
    '#d3f9d8',
    '#b2f2bb',
    '#8ce99a',
    '#69db7c',
    '#51cf66',
    '#40c057',
    '#37b24d',
    '#2f9e44',
    '#2b8a3e',
  ],
  lime: [
    '#f4fce3',
    '#e9fac8',
    '#d8f5a2',
    '#c0eb75',
    '#a9e34b',
    '#94d82d',
    '#82c91e',
    '#74b816',
    '#66a80f',
    '#5c940d',
  ],
  yellow: [
    '#fff9db',
    '#fff3bf',
    '#ffec99',
    '#ffe066',
    '#ffd43b',
    '#fcc419',
    '#fab005',
    '#f59f00',
    '#f08c00',
    '#e67700',
  ],
  orange: [
    '#fff4e6',
    '#ffe8cc',
    '#ffd8a8',
    '#ffc078',
    '#ffa94d',
    '#ff922b',
    '#fd7e14',
    '#f76707',
    '#e8590c',
    '#d9480f',
  ],
};

// I don't know why, but "| any" is required.
const openColor: OpenColor | any = Object.keys(
  openColorOriginal,
).reduce((flatten, colorName) => {
  const values = openColorOriginal[colorName];
  if (typeof values === 'string') {
    return { ...flatten, [colorName]: values };
  }
  const colors = values.reduce(
    (values, colorValue, i) => ({
      ...values,
      [colorName + i]: colorValue,
    }),
    {},
  );
  return { ...flatten, ...colors };
}, {});

export default openColor;
