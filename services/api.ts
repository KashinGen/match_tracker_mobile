import { GET_MATCHES_PATH } from '../const';
import { ApiResponse } from '../types';
import { axiosInstance } from './axios';

export const api = {
  getMatches: () =>
    axiosInstance.get<ApiResponse>(GET_MATCHES_PATH).then((response) => {
      const matches = response.data.data?.matches;
      if (matches === undefined) throw new Error('Ошибка: не удалось загрузить информацию');
      return matches;
    }),
};
