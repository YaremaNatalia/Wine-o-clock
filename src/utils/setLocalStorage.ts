import { IWine } from '@/types/types';

const addToLocalStorageBasket = (
  _id: string,
  quantity: number,
  counterValue?: number
): boolean => {
  const basket = JSON.parse(localStorage.getItem('basket') || '{}');

  if (basket[_id]) {
    const newTotalOrder = counterValue
      ? basket[_id].numberToOrder + counterValue
      : basket[_id].numberToOrder + 1;

    if (newTotalOrder <= quantity) {
      basket[_id].numberToOrder = counterValue
        ? newTotalOrder
        : basket[_id].numberToOrder + 1;
      localStorage.setItem('basket', JSON.stringify(basket));
      return true;
    } else {
      return false;
    }
  } else {
    if (counterValue && counterValue <= quantity) {
      basket[_id] = { numberToOrder: counterValue };
      localStorage.setItem('basket', JSON.stringify(basket));
      return true;
    } else if (!counterValue) {
      basket[_id] = { numberToOrder: 1 };
      localStorage.setItem('basket', JSON.stringify(basket));
      return true;
    } else {
      return false;
    }
  }
};

const removeFromLocalStorageBasket = (_id: string) => {
  const basket = JSON.parse(localStorage.getItem('basket') || '{}');
  if (basket[_id]) {
    delete basket[_id];
    localStorage.setItem('basket', JSON.stringify(basket));
  }
};

const getLocalStorageBasket = (wines: IWine[]) => {
  const basket = JSON.parse(localStorage.getItem('basket') || '{}');
  if (basket && wines) {
    return wines
      .filter((wine: IWine) => basket[wine._id])
      .map((wine: IWine) => ({
        ...wine,
        numberToOrder: basket[wine._id].numberToOrder,
      }));
  }
  return [];
};

const toggleLocalStorageFavorites = (_id: string): boolean => {
  let favoriteWines: string[] = JSON.parse(
    localStorage.getItem('favoriteWines') || '[]'
  );

  if (favoriteWines.includes(_id)) {
    favoriteWines = favoriteWines.filter((id) => id !== _id);
    localStorage.setItem('favoriteWines', JSON.stringify(favoriteWines));
    return false;
  } else {
    favoriteWines.push(_id);
    localStorage.setItem('favoriteWines', JSON.stringify(favoriteWines));
    return true;
  }
};

const getLocalStorageFavorites = (wines: IWine[]): IWine[] => {
  const favoriteWines: string[] = JSON.parse(
    localStorage.getItem('favoriteWines') || '[]'
  );
  if (favoriteWines.length > 0 && wines) {
    return wines.filter((wine) => favoriteWines.includes(wine._id));
  }
  return [];
};

export default {
  removeFromLocalStorageBasket,
  addToLocalStorageBasket,
  getLocalStorageBasket,
  toggleLocalStorageFavorites,
  getLocalStorageFavorites,
};
