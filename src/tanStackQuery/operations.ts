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
  await $instance.post('api/auth/signup', data);

// const login = async (data: ICredentials): Promise<string> => {
//   const response = await $instance.post('api/auth/signin', data);
//   return response.data;
// };

const login = async (data: ICredentials): Promise<string> => {
  const response = await $instance.post('/api/auth/signin', data);
  return response.data.token;
};

const refreshUser = async (
  token: string | undefined
): Promise<IUser | null> => {
  queryClient.setQueryData([QueryKeys.isLoggedIn], false);
  if (!token) return null;
  $instance.defaults.headers.common.Authorization = `Bearer ${token}`;

  try {
    const response = await $instance.get('api/auth/current');
    queryClient.setQueryData([QueryKeys.isLoggedIn], true);
    return response.data;
  } catch (error) {
    return null;
  }
};

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

const addToBasketCache = (wine: IWine, counterValue?: number): boolean => {
  const basket = queryClient.getQueryData<IWine[]>([QueryKeys.basket]) || [];
  const isInBasket = basket.find((item) => item._id === wine._id);

  if (isInBasket) {
    isInBasket.numberToOrder = isInBasket.numberToOrder ?? 0;
    const newNumberToOrder = counterValue
      ? isInBasket.numberToOrder + counterValue
      : isInBasket.numberToOrder + 1;

    if (newNumberToOrder <= wine.quantity) {
      isInBasket.numberToOrder = newNumberToOrder;
      queryClient.setQueryData([QueryKeys.basket], basket);
      return true;
    }
  } else {
    const numberToOrder = counterValue || 1;
    if (numberToOrder <= wine.quantity) {
      const wineToAdd = { ...wine, numberToOrder };
      basket.push(wineToAdd);
      queryClient.setQueryData([QueryKeys.basket], basket);
      return true;
    }
  }
  return false;
};

const getBasket = async (page: number = 1, limit: number | null) => {
  try {
    const response = await $instance.get<IWine[]>(
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
    const { data: basket } = await $instance.get<IWine[]>('api/basket');
    const isInBasket = basket.find((item) => item._id === id);
    if (isInBasket) {
      await $instance.delete(`api/basket/delete/${id}`);
    }
  } catch (error) {
    console.error('Error removing wine from basket:', error);
  }
};

const removeFromBasketCache = (id: string): boolean => {
  const basket = queryClient.getQueryData<IWine[]>([QueryKeys.basket]);
  const isInBasket = basket?.find((item) => item._id === id);
  if (isInBasket) {
    const updatedBasket = basket?.filter((item) => item._id !== id);
    queryClient.setQueryData([QueryKeys.basket], updatedBasket);
    return true;
  } else {
    return false;
  }
};

const addToFavorites = async (productId: string): Promise<string[]> => {
  try {
    const response = await $instance.post('/api/favorites', {
      productId: productId,
    });
    return response.data;
  } catch (error) {
    console.error('Error adding to favorites:', error);
    return [];
  }
};

const addToFavoritesCache = (productId: string): boolean => {
  try {
    const favorites =
      queryClient.getQueryData<string[]>([QueryKeys.favorites]) || [];
    const updatedFavorites = [...favorites, productId];
    queryClient.setQueryData([QueryKeys.favorites], updatedFavorites);
    return true;
  } catch (error) {
    console.error('Error updating favorites cache:', error);
    return false;
  }
};

const removeFromFavorites = async (productId: string): Promise<string[]> => {
  try {
    const response = await $instance.delete(`api/favorites/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error removing from favorites:', error);
    return [];
  }
};

const removeFromFavoritesCache = (productId: string): boolean => {
  try {
    const favorites =
      queryClient.getQueryData<string[]>([QueryKeys.favorites]) || [];
    const updatedFavorites = favorites.filter((id) => id !== productId);
    queryClient.setQueryData([QueryKeys.favorites], updatedFavorites);
    return true;
  } catch (error) {
    console.error('Error updating favorites cache:', error);
    return false;
  }
};

const getFavorites = async (): Promise<string[]> => {
  try {
    const response = await $instance.get(`api/favorites`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const getFavoritesCache = () => {
  return queryClient.getQueryData<string[]>([QueryKeys.favorites]);
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
  addToFavorites,
  removeFromFavorites,
  addToFavoritesCache,
  removeFromFavoritesCache,
  getFavorites,
  getFavoritesCache,
};

export default operations;
