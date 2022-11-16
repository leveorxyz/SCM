import {
  Stack,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  useColorModeValue,
  Button,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProductSchema } from '../../schema';
import { ProductPayload } from '../../@types';
import { useProductMutation } from '../../hooks/productHooks';

export default function AddProductForm() {
  const borderColor = useColorModeValue('gray.300', 'gray.700');
  const inputBgColor = useColorModeValue('gray.50', 'gray.800');
  const bottomBtnBgColor = useColorModeValue('white', 'gray.700');
  const { mutate, isLoading, isError } = useProductMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductPayload['input']>({
    resolver: yupResolver(ProductSchema),
  });

  const handleFormSubmit = (data: ProductPayload['input']) => {
    mutate({ input: { ...data, email: 'contact@leveor.xyz' }, options: {} });
  };

  return (
    <Flex
      as="form"
      w="full"
      direction="column"
      justify="space-between"
      border={1}
      borderColor={borderColor}
      borderStyle="solid"
      rounded="lg"
      overflow="hidden"
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} p={4}>
        <Stack direction="column" spacing={2}>
          <FormControl isInvalid={!!errors?.name}>
            <Input
              placeholder="Product name"
              variant="filled"
              bgColor={inputBgColor}
              {...register('name')}
            />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors?.description}>
            <Textarea
              placeholder="Description"
              variant="filled"
              bgColor={inputBgColor}
              resize="vertical"
              {...register('description')}
            />
            <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
          </FormControl>
        </Stack>

        <Stack direction="column" spacing={2}>
          <FormControl>
            <Input placeholder="District" variant="filled" bgColor={inputBgColor} />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors?.price}>
            <Input
              type="number"
              placeholder="Retail Price"
              variant="filled"
              bgColor={inputBgColor}
              {...register('price')}
            />
            <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors?.productId}>
            <Input
              placeholder="Product ID"
              variant="filled"
              bgColor={inputBgColor}
              {...register('productId')}
            />
            <FormErrorMessage>{errors.productId?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors?.unit}>
            <Input
              placeholder="Unit"
              variant="filled"
              bgColor={inputBgColor}
              {...register('unit')}
            />
            <FormErrorMessage>{errors?.unit?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors?.amount}>
            <Input
              type="number"
              placeholder="Amount"
              variant="filled"
              bgColor={inputBgColor}
              {...register('amount')}
            />
            <FormErrorMessage>{errors?.amount?.message}</FormErrorMessage>
          </FormControl>
        </Stack>
      </SimpleGrid>

      <Button
        onClick={handleSubmit(handleFormSubmit)}
        bgColor={bottomBtnBgColor}
        w="full"
        rounded="none"
        colorScheme="gray"
        mt={2}
        isLoading={isLoading}
      >
        Add Product
      </Button>
    </Flex>
  );
}
