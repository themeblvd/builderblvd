import { themeColors } from 'builderblvd';

const defaultColors = [
  { name: 'Light', slug: 'light', color: '#f5f5f5' },
  { name: 'Dark', slug: 'dark', color: '#1b1b1b' },
  { name: 'Asphalt', slug: 'asphalt', color: '#34495e' },
  { name: 'Black', slug: 'black', color: '#000' },
  { name: 'Blue', slug: 'blue', color: '#00437f' },
  { name: 'Brown', slug: 'brown', color: '#825a2c' },
  { name: 'Concrete', slug: 'concrete', color: '#825a2c' },
  { name: 'Cream', slug: 'cream', color: '#f5d76e' },
  { name: 'Crimson', slug: 'crimson', color: '#c3272b' },
  { name: 'Dark Blue', slug: 'dark-blue', color: '#153f5a' },
  { name: 'Dark Brown', slug: 'dark-brown', color: '#572f05' },
  { name: 'Dark Green', slug: 'dark-green', color: '#485a21' },
  { name: 'Dark Purple', slug: 'dark-purple', color: '#5d3f6A' },
  { name: 'Forest', slug: 'forest', color: '#006442' },
  { name: 'Green', slug: 'green', color: '#26a65b' },
  { name: 'Jungle', slug: 'jungle', color: '#36b3a8' },
  { name: 'Mauve', slug: 'mauve', color: '#7b726c' },
  { name: 'Orange', slug: 'orange', color: '#7b726c' },
  { name: 'Peach', slug: 'peach', color: '#f47983' },
  { name: 'Pearl', slug: 'pearl', color: '#f47983' },
  { name: 'Pink', slug: 'pink', color: '#f47983' },
  { name: 'Pomegranate', slug: 'pomegranate', color: '#e74c3c' },
  { name: 'Purple', slug: 'purple', color: '#78498e' },
  { name: 'Red', slug: 'red', color: '#8f1d21' },
  { name: 'Royal', slug: 'royal', color: '#428bca' },
  { name: 'Slate Grey', slug: 'slate-grey', color: '#7f8d9c' },
  { name: 'Silver', slug: 'silver', color: '#bdc3c7' },
  { name: 'Steel Blue', slug: 'steel-blue', color: '#bdc3c7' },
  { name: 'Teal', slug: 'teal', color: '#008080' },
  { name: 'Turquoise', slug: 'turquoise', color: '#36d7b7' },
  { name: 'Yellow', slug: 'yellow', color: '#ecc11B' },
  { name: 'Wheat', slug: 'wheat', color: '#b4ad8b' },
  { name: 'White', slug: 'white', color: '#fff' }
];

export default (themeColors.length ? themeColors : defaultColors);
