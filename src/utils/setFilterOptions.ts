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

const searchKeysToExclude = [
  '_id',
  'description',
  'quantity',
  'bottleCapacity',
  'alcohol',
  'evaluation',
  'comments',
  'bottlesSoldCounter',
  'isWineTimePromotion',
  'imageUrl',
  "adminDiscountPercentage",
];

  const fuseSearchOptions = {
    includeScore: true,
    keys: [
      'title',
      'wineColor',
      'sugarConsistency',
      'country',
      'region',
      'price',
    ],
    threshold: 0.3,
  };


export default {
  toShameOptions,
  productPerPageOptions,
  productPerPageOptionsTablet,
  collections,
  color,
  sweetness,
  searchKeysToExclude,
  fuseSearchOptions,
};
