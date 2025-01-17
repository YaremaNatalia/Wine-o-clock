import {
  CartItem,
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
      `/api/products?page=${page}&limit=${limit}&title=${title}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const getAllWinesCache = () => {
  return queryClient.getQueryData<IAllWinesData>([QueryKeys.wines]);
};

const getWineById = async (productId: string) => {
  try {
    const response = await $instance.get<IWine>(`/api/products/${productId}`);
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

const login = async (data: ICredentials): Promise<string> => {
  const response = await $instance.post('/api/auth/signin', data);
  return response.data.token;
};

const logout = async (): Promise<void> => {
  try {
    await $instance.post('/api/auth/signout');
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

const getPersonalData = async (
  token: string | undefined
): Promise<IUser | null> => {
  queryClient.setQueryData([QueryKeys.isLoggedIn], false);
  if (!token) return null;

  $instance.defaults.headers.common.Authorization = `Bearer ${token}`;

  try {
    const response = await $instance.get('/api/auth/current');
    queryClient.setQueryData([QueryKeys.isLoggedIn], true);
    queryClient.setQueryData([QueryKeys.user], response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching personal data:', error);
    throw error;
  }
};

const getPersonalDataCache = () => {
  return queryClient.getQueryData<IUser>([QueryKeys.user]);
};

const updatePersonalData = async (
  userData: INewUser
): Promise<IUser | null> => {
  try {
    console.log('Mocking updatePersonalData with:', userData);
    return {
      firstName: userData.firstName || 'Mock Name',
      email: userData.email || 'mock@example.com',
    } as IUser;

    // const response = await $instance.patch('/api/auth/current', userData);
    // return response.data;
  } catch (error) {
    console.error('Error updating the personal data:', error);
    throw error;
  }
};

const addToCart = async (
  productId: string,
  amount?: number
): Promise<CartItem | null> => {
  try {
    const response = await $instance.post('/api/cart', {
      productId: productId,
      amount: amount,
    });
    return response.data;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};

const addToCartCache = (productId: string, amount: number): boolean => {
  try {
    const cart = queryClient.getQueryData<CartItem[]>([QueryKeys.cart]) || [];
    const isOnCart = cart.findIndex(
      (item: CartItem) => item.productId === productId
    );

    if (isOnCart === -1) {
      const newCartItem: CartItem = {
        productId,
        amount,
      };
      const updatedCart = [...cart, newCartItem];
      queryClient.setQueryData([QueryKeys.cart], updatedCart);
    }

    return true;
  } catch (error) {
    console.error('Error updating cart cache:', error);
    return false;
  }
};

const updateCart = async (
  productId: string,
  amount: number
): Promise<CartItem | null> => {
  try {
    const response = await $instance.patch(`/api/cart/amount/${productId}`, {
      amount: amount,
    });
    return response.data;
  } catch (error) {
    console.error('Error updating the cart:', error);
    throw error;
  }
};

const updateCartCache = (productId: string, amount: number): boolean => {
  try {
    const cart = queryClient.getQueryData<CartItem[]>([QueryKeys.cart]) || [];
    const updatedCart = cart.map((item: CartItem) => {
      if (item.productId === productId) {
        return { ...item, amount };
      }

      return item;
    });
    queryClient.setQueryData([QueryKeys.cart], updatedCart);

    return true;
  } catch (error) {
    console.error('Error updating cart cache:', error);
    return false;
  }
};

const removeFromCart = async (productId: string): Promise<CartItem | null> => {
  try {
    const response = await $instance.delete(`/api/cart/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error removing from cart:', error);
    throw error;
  }
};

const removeFromCartCache = (productId: string): boolean => {
  try {
    const cart = queryClient.getQueryData<CartItem[]>([QueryKeys.cart]) || [];
    const updatedCart = cart.filter((item) => item.productId !== productId);
    queryClient.setQueryData([QueryKeys.cart], updatedCart);
    return true;
  } catch (error) {
    console.error('Error updating cart cache:', error);
    return false;
  }
};

const getCart = async (): Promise<CartItem[]> => {
  try {
    const response = await $instance.get(`/api/cart`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const getCartCache = () => {
  return queryClient.getQueryData<CartItem[]>([QueryKeys.cart]);
};
//!заглушка
const clearCart = async (): Promise<void> => {
  try {
    const response = await $instance.delete('/api/cart');
    return response.data;
  } catch (error) {
    console.error('Error removing from cart:', error);
    throw error;
  }
};

const clearCartCache = async (): Promise<void> => {
  queryClient.setQueryData([QueryKeys.cart], []);
};

const addToFavorites = async (productId: string): Promise<string[]> => {
  try {
    const response = await $instance.post('/api/favorites', {
      productId: productId,
    });
    return response.data;
  } catch (error) {
    console.error('Error adding to favorites:', error);
    throw error;
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
    const response = await $instance.delete(`/api/favorites/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error removing from favorites:', error);
    throw error;
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
    const response = await $instance.get(`/api/favorites`);
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
  getPersonalData,
  getPersonalDataCache,
  updatePersonalData,
  login,
  signUp,
  logout,
  addToCart,
  addToCartCache,
  updateCart,
  updateCartCache,
  getCart,
  getCartCache,
  removeFromCart,
  removeFromCartCache,
  clearCart,
  clearCartCache,
  addToFavorites,
  removeFromFavorites,
  addToFavoritesCache,
  removeFromFavoritesCache,
  getFavorites,
  getFavoritesCache,
};

export default operations;
