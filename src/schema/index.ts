import { object, string } from 'yup';

export const ProductSchema = object({
  name: string().required('Product name is required'),
  price: string().required('Price is required'),
  productId: string().required('Product id is required'),
  unit: string().required('Unit is required'),
  amount: string().required('Amount is required'),
  description: string().required('Description is required'),
});
