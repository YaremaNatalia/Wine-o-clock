import { INewUser } from '@/types/types';
import { $instance } from '@/utils/backendURL';

const getAllWines = async () => {
  try {
    const response = await $instance.get('v1/craft_wines');
    return response.data;
  } catch (error) {
    console.error('Error fetching wine data:', error);
  }
};

const signUp = async (data: INewUser): Promise<void> =>
  await $instance.post('v1/reg/registration', data);

const operations = {
  getAllWines,
  signUp,
};

export default operations;
