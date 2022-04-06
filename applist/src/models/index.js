// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, ProductList } = initSchema(schema);

export {
  Product,
  ProductList
};