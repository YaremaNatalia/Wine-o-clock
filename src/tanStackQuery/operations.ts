import {
  IAllWinesData,
  ICredentials,
  INewUser,
  IUser,
  IWine,
} from '@/types/types';
import { $instance } from '@/utils/backendURL';
import { QueryKeys } from './';
import queryClient from './queryClient';

const getAllWines = async (
  page: number = 1,
  limit: number | null,
  title: string = ''
) => {
  try {
    const response = await $instance.get<IAllWinesData>(
      `api/products?page=${page}&limit=${limit}&title=${title}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const getAllWinesCache = () => {
  return queryClient.getQueryData<IAllWinesData>([QueryKeys.wines]);
};

const getWineById = async (productId: string) => {
  try {
    const response = await $instance.get<IWine>(`api/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// const getPromotion = async (page: number = 1, limit: number = 8) => {
//   try {
//     const response = await $instance.get(
//       `v1/wine_time_promotion/get_promotion?page=${page}&limit=${limit}`
//     );
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

const signUp = async (data: INewUser): Promise<void> =>
  await $instance.post('v1/reg/registration', data);

const login = async (data: ICredentials): Promise<string> => {
  const response = await $instance.post('v1/auth/login', data);
  return response.data;
};

const refreshUser = async (
  token: string | undefined
): Promise<IUser | null> => {
  queryClient.setQueryData([QueryKeys.isLoggedIn], false);
  if (!token) return null;
  $instance.defaults.headers.common.Authorization = `Bearer ${token}`;

  try {
    const response = await $instance.get('v1/user/get_user');
    queryClient.setQueryData([QueryKeys.isLoggedIn], true);
    return response.data;
  } catch (error) {
    return null;
  }
};

// const addToBasket = (wine: IWine, counterValue?: number) => {
//   const basket = queryClient.getQueryData<IWine[]>([QueryKeys.basket]) || [];
//   const isInBasket = basket.find((item) => item._id === wine._id);

//   if (isInBasket) {
//     isInBasket.numberToOrder = isInBasket.numberToOrder ?? 0;
//     const newNumberToOrder = counterValue
//       ? isInBasket.numberToOrder + counterValue
//       : isInBasket.numberToOrder + 1;

//     if (newNumberToOrder <= wine.quantity) {
//       isInBasket.numberToOrder = newNumberToOrder;
//     }
//   } else {
//     const numberToOrder = counterValue || 1;
//     if (numberToOrder <= wine.quantity) {
//       const wineToAdd = { ...wine, numberToOrder };
//       basket.push(wineToAdd);
//     }
//   }

//   queryClient.setQueryData([QueryKeys.basket], basket);
// };

const addToBasket = async (
  wine: IWine,
  counterValue?: number
): Promise<void> => {
  try {
    const { data: basket } = await $instance.get<IWine[]>('api/basket');
    const isInBasket = basket.find((item) => item._id === wine._id);

    if (isInBasket) {
      isInBasket.numberToOrder = isInBasket.numberToOrder ?? 0;
      const newNumberToOrder = counterValue
        ? isInBasket.numberToOrder + counterValue
        : isInBasket.numberToOrder + 1;

      if (newNumberToOrder <= wine.quantity) {
        isInBasket.numberToOrder = newNumberToOrder;
      }
    } else {
      const numberToOrder = counterValue || 1;
      if (numberToOrder <= wine.quantity) {
        const wineToAdd = { ...wine, numberToOrder };
        basket.push(wineToAdd);
      }
    }
    await $instance.post('api/basket', basket);
  } catch (error) {
    console.error('Error adding to basket:', error);
  }
};

const addToBasketCache = (wine: IWine, counterValue?: number) => {
  const basket = queryClient.getQueryData<IWine[]>([QueryKeys.basket]) || [];
  const isInBasket = basket.find((item) => item._id === wine._id);

  if (isInBasket) {
    isInBasket.numberToOrder = isInBasket.numberToOrder ?? 0;
    const newNumberToOrder = counterValue
      ? isInBasket.numberToOrder + counterValue
      : isInBasket.numberToOrder + 1;

    if (newNumberToOrder <= wine.quantity) {
      isInBasket.numberToOrder = newNumberToOrder;
    }
  } else {
    const numberToOrder = counterValue || 1;
    if (numberToOrder <= wine.quantity) {
      const wineToAdd = { ...wine, numberToOrder };
      basket.push(wineToAdd);
    }
  }

  queryClient.setQueryData([QueryKeys.basket], basket);
};

const getBasket = async (page: number = 1, limit: number | null) => {
  try {
    const response = await $instance.get(
      `api/basket?page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const getBasketCache = () => {
  return queryClient.getQueryData<IWine[]>([QueryKeys.basket]);
};

const removeFromBasket = async (id: string): Promise<void> => {
  try {
    await $instance.delete(`api/basket/delete/${id}`);
  } catch (error) {
    console.error('Error removing wine from basket:', error);
  }
};

const removeFromBasketCache = (id: string): boolean => {
  const basket = queryClient.getQueryData<IWine[]>([QueryKeys.basket]);
  const wineToRemove = basket?.find((item) => item._id === id);

  if (wineToRemove) {
    const updatedBasket = basket?.filter((item) => item._id !== id);
    queryClient.setQueryData([QueryKeys.basket], updatedBasket);
    return true;
  } else {
    return false;
  }
};

const toggleToFavorites = (wine: IWine): boolean => {
  let favoriteWines =
    queryClient.getQueryData<IWine[]>([QueryKeys.favorites]) || [];
  const isFavorite = favoriteWines.some((w) => w._id === wine._id);

  if (isFavorite) {
    favoriteWines = favoriteWines.filter((w) => w._id !== wine._id);
    queryClient.setQueryData([QueryKeys.favorites], favoriteWines);
    return false;
  } else {
    favoriteWines.push(wine);
    queryClient.setQueryData([QueryKeys.favorites], favoriteWines);
    return true;
  }
};

const getFavorites = (): IWine[] => {
  return queryClient.getQueryData<IWine[]>([QueryKeys.favorites]) || [];
};

const operations = {
  getAllWines,
  getAllWinesCache,
  getWineById,
  // getPromotion,
  refreshUser,
  login,
  signUp,
  addToBasket,
  addToBasketCache,
  getBasket,
  getBasketCache,
  removeFromBasket,
  removeFromBasketCache,
  toggleToFavorites,
  getFavorites,
};

export default operations;
