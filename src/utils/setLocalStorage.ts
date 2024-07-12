import { IWine } from '@/types/types';

const addToBasket = (
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

const removeFromBasket = (_id: string) => {
  const basket = JSON.parse(localStorage.getItem('basket') || '{}');
  if (basket[_id]) {
    delete basket[_id];
    localStorage.setItem('basket', JSON.stringify(basket));
  }
};

const changeBasket = (_id: string, numberToOrder: number) => {
  const basket = JSON.parse(localStorage.getItem('basket') || '{}');
  if (basket[_id]) {
    basket[_id].numberToOrder = numberToOrder;
    localStorage.setItem('basket', JSON.stringify(basket));
  }
};

const getBasket = (wines: IWine[]) => {
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

const toggleFavorites = (_id: string): boolean => {
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

const getFavorites = (wines: IWine[]): IWine[] => {
  const favoriteWines: string[] = JSON.parse(
    localStorage.getItem('favoriteWines') || '[]'
  );
  if (favoriteWines.length > 0 && wines) {
    return wines.filter((wine) => favoriteWines.includes(wine._id));
  }
  return [];
};

export default {
  removeFromBasket,
  addToBasket,
  changeBasket,
  getBasket,
  toggleFavorites,
  getFavorites,
};
