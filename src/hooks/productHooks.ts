import { useMutation } from '@tanstack/react-query';
import productAPI from '../services/productAPI';

export const useProductMutation = () => {
  return useMutation({
    mutationFn: productAPI.addProduct,
  });
};
