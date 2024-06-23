import { IWine } from '@/types/types';

const filterCatalogWines = (wines: IWine[], filters: string[]) => {
    if (filters.length === 0) {
      return wines;
  }
  
  const collectionsFilters = filters.filter((filter) =>
    ['Sales', 'Bestsellers', 'New Collections'].includes(filter)
  );
  const colorFilters = filters.filter((filter) =>
    ['Red', 'White', 'Pink'].includes(filter)
  );
  const sugarConsistencyFilters = filters.filter((filter) =>
    ['Dry', 'Medium dry', 'Medium', 'Sweet'].includes(filter)
  );
  const countryFilters = filters.filter((filter) =>
    wines.some((wine) => wine.country === filter)
  );
  const regionFilters = filters.filter((filter) =>
    wines.some((wine) => wine.region === filter)
  );

  const filteredWines = wines.filter((wine) => {
    const selectedCollectionsFilter =
      collectionsFilters.length === 0 ||
      collectionsFilters.some((filter) => {
        switch (filter) {
          case 'Sales':
            return wine.isSale;
          case 'Bestsellers':
            return wine.isBestSeller;
          case 'New Collections':
            return wine.isNewCollection;
          default:
            return true;
        }
      });

    const selectedColorFilter =
      colorFilters.length === 0 ||
      colorFilters.some(
        (filter) => wine.wineColor.trim().toLowerCase() === filter.toLowerCase()
      );

    const selectedSugarConsistencyFilter =
      sugarConsistencyFilters.length === 0 ||
      sugarConsistencyFilters.some(
        (filter) =>
          wine.sugarConsistency.trim().toLowerCase() === filter.toLowerCase()
      );

    const selectedCountryFilter =
      countryFilters.length === 0 || countryFilters.includes(wine.country);

    const selectedRegionFilter =
      regionFilters.length === 0 || regionFilters.includes(wine.region);

    return (
      selectedCollectionsFilter &&
      selectedColorFilter &&
      selectedSugarConsistencyFilter &&
      selectedCountryFilter &&
      selectedRegionFilter
    );
  });

  return filteredWines;
};

const filterMainWines = (wines: IWine[], filter: string): IWine[] => {
  switch (filter) {
    case 'sales':
      return sortByAvailability(wines.filter((wine) => wine.isSale));
    case 'newCollection':
      return sortByAvailability(wines.filter((wine) => wine.isNewCollection));
    case 'bestsellers':
      return sortByAvailability(wines.filter((wine) => wine.isBestSeller));
    default:
      return sortByAvailability(wines);
  }
};

const sortByAvailability = (wines: IWine[]): IWine[] => {
  const availableWines = wines.filter((wine) => wine.quantity > 0);
  const unavailableWines = wines.filter((wine) => wine.quantity === 0);
  return [...availableWines, ...unavailableWines];
};

const sortToShameWines = (wines: IWine[], filter: string): IWine[] => {
  const sortedWines = [...wines];
  if (filter === 'By name') {
    sortedWines.sort((a, b) => a.title.localeCompare(b.title));
  } else if (filter === 'From cheap') {
    sortedWines.sort((a, b) => a.price - b.price);
  } else if (filter === 'From expensive') {
    sortedWines.sort((a, b) => b.price - a.price);
  }
  
  return sortByAvailability(sortedWines);

};

const filterPrice = (
  wines: IWine[],
  priceValues: [number, number]
): IWine[] => {
  return wines.filter(
    (wine) => wine.price >= priceValues[0] && wine.price <= priceValues[1]
  );
};

const setValueList = (wines: IWine[] | undefined, filter: string): string[] => {
  switch (filter) {
    case 'countries':
      return wines
        ? [...new Set(wines.map((wine) => wine.country))].sort()
        : [];
    case 'regions':
      return wines ? [...new Set(wines.map((wine) => wine.region))].sort() : [];
    default:
      return [];
  }
};

export default {
  filterCatalogWines,
  filterMainWines,
  sortToShameWines,
  filterPrice,
  setValueList,
};
