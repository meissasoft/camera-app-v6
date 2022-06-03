import { API_PAN_DETAILS } from '@/constants/api';
import { getRequest } from './utils';

// Sample to call the api it is for get request
export const getPanDetails = async (panNumber: string, dob: string): Promise<any> => {
  const response = await getRequest(`${API_PAN_DETAILS}/${panNumber}/${dob}`, {});
  return response.data;
};
