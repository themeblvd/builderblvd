import { hasColorLibrary } from 'builderblvd';

let colors = [
  {
    value: 'light',
    label: 'Light'
  },
  {
    value: 'dark',
    label: 'Dark'
  }
];

if (hasColorLibrary) {
  colors = [
    ...colors,
    { value: 'asphalt', label: 'Asphalt' },
    { value: 'black', label: 'Black' },
    { value: 'blue', label: 'blue' },
    { value: 'brown', label: 'Brown' }
  ];
}

export default colors;
