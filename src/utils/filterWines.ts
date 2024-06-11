import { IWine } from '@/types/types';

const filterWines = (wines: IWine[], filters: string[]) => {
  const filteredWines = wines.filter((wine) => {
    return filters.every((filter) => {
      switch (filter) {
        case 'Sales':
          return wine.isSale;
        case 'Bestsellers':
          return wine.isBestSeller;
        case 'New Collections':
          return wine.isNewCollection;
        case 'Red':
        case 'White':
        case 'Pink':
          return wine.wineColor.trim().toLowerCase() === filter.toLowerCase();
        case 'Dry':
        case 'Medium dry':
        case 'Medium':
        case 'Sweet':
          return (
            wine.sugarConsistency.trim().toLowerCase() === filter.toLowerCase()
          );
        default:
          return wine.country === filter || wine.region === filter;
      }
    });
  });

  if (filters.includes('Bestsellers')) {
    filteredWines.sort((a, b) => b.bottlesSoldCounter - a.bottlesSoldCounter);
  }

  return filteredWines;
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
  return sortedWines;
};



export default { filterWines, sortToShameWines };
