import { ICredentials, INewUser, IUser } from '@/types/types';
import { $instance } from '@/utils/backendURL';
import { QueryKeys, client } from './';

const getAllWines = async (page: number = 1, limit: number = 8) => {
  try {
    const response = await $instance.get(
      `v1/craft_wines?page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const getPromotion = async (page: number = 1, limit: number = 8) => {
  try {
    const response = await $instance.get(
      `v1/wine_time_promotion/get_promotion?page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const signUp = async (data: INewUser): Promise<void> =>
  await $instance.post('v1/reg/registration', data);

const login = async (data: ICredentials): Promise<string> => {
  const response = await $instance.post('v1/auth/login', data);
  return response.data;
};

const refreshUser = async (
  token: string | undefined
): Promise<IUser | null> => {
  client.setQueryData([QueryKeys.isLoggedIn], false);
  if (!token) return null;
  $instance.defaults.headers.common.Authorization = `Bearer ${token}`;

  try {
    const response = await $instance.get('v1/user/get_user');
    client.setQueryData([QueryKeys.isLoggedIn], true);
    return response.data;
  } catch (error) {
    return null;
  }
};

const operations = {
  getAllWines,
  getPromotion,
  refreshUser,
  login,
  signUp,
};

export default operations;
