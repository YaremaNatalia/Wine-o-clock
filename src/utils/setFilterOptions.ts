const toShameOptions = [
  { value: 'By name', label: 'By name' },
  { value: 'From cheap', label: 'From cheap to expensive' },
  { value: 'From expensive', label: 'From expensive to cheap' },
];

const productPerPageOptions = [
  { value: '6', label: '6' },
  { value: '12', label: '12' },
  { value: '24', label: '24' },
];

const productPerPageOptionsTablet = [
  { value: '12', label: '12' },
  { value: '24', label: '24' },
];

const collections = ['New Collections', 'Sales', "Bestsellers"];
const color = ['Red', 'White', 'Pink'];
const sweetness = ['Dry', 'Medium dry', 'Medium', "Sweet"];



export default {
  toShameOptions,
  productPerPageOptions,
  productPerPageOptionsTablet,
  collections,
  color,
  sweetness
};
