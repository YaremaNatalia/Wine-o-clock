import { $instance } from '@/utils/backendURL';

const getAllWines = async (page: number = 1, limit: number=8) => {
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

const operations = {
  getAllWines,
  getPromotion,
};

export default operations;
