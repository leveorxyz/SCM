import { ProductPayload } from '../@types';
import ax from './axios.config';

const addProduct = async (payload: ProductPayload) => {
  const { data } = await ax.post('invoke/addProduct', payload);
  return data;
};

const productAPI = {
  addProduct,
};

export default productAPI;
