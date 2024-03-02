import { $instance } from '@/utils/backendURL';

export const fetchAllWines = async () => {
  try {
    const response = await $instance.get('v1/craft_wines');
    return response.data;
  } catch (error) {
    console.error('Error fetching wine data:', error);
  }
};
