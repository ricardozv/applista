/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductInput = {
  id?: string | null,
  name: string,
  description: string,
  descriptionHome?: string | null,
  image: string,
  price: number,
  quantiti: number,
  totalPrice: number,
  _version?: number | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  descriptionHome?: ModelStringInput | null,
  image?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  quantiti?: ModelFloatInput | null,
  totalPrice?: ModelFloatInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  description: string,
  descriptionHome?: string | null,
  image: string,
  price: number,
  quantiti: number,
  totalPrice: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  descriptionHome?: string | null,
  image?: string | null,
  price?: number | null,
  quantiti?: number | null,
  totalPrice?: number | null,
  _version?: number | null,
};

export type DeleteProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductListInput = {
  id?: string | null,
  quantity: number,
  productID: string,
  _version?: number | null,
};

export type ModelProductListConditionInput = {
  quantity?: ModelFloatInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelProductListConditionInput | null > | null,
  or?: Array< ModelProductListConditionInput | null > | null,
  not?: ModelProductListConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ProductList = {
  __typename: "ProductList",
  id: string,
  quantity: number,
  productID: string,
  product?: Product | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateProductListInput = {
  id: string,
  quantity?: number | null,
  productID?: string | null,
  _version?: number | null,
};

export type DeleteProductListInput = {
  id: string,
  _version?: number | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  descriptionHome?: ModelStringInput | null,
  image?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  quantiti?: ModelFloatInput | null,
  totalPrice?: ModelFloatInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProductListFilterInput = {
  id?: ModelIDInput | null,
  quantity?: ModelFloatInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelProductListFilterInput | null > | null,
  or?: Array< ModelProductListFilterInput | null > | null,
  not?: ModelProductListFilterInput | null,
};

export type ModelProductListConnection = {
  __typename: "ModelProductListConnection",
  items:  Array<ProductList | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    descriptionHome?: string | null,
    image: string,
    price: number,
    quantiti: number,
    totalPrice: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    descriptionHome?: string | null,
    image: string,
    price: number,
    quantiti: number,
    totalPrice: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    descriptionHome?: string | null,
    image: string,
    price: number,
    quantiti: number,
    totalPrice: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateProductListMutationVariables = {
  input: CreateProductListInput,
  condition?: ModelProductListConditionInput | null,
};

export type CreateProductListMutation = {
  createProductList?:  {
    __typename: "ProductList",
    id: string,
    quantity: number,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      descriptionHome?: string | null,
      image: string,
      price: number,
      quantiti: number,
      totalPrice: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProductListMutationVariables = {
  input: UpdateProductListInput,
  condition?: ModelProductListConditionInput | null,
};

export type UpdateProductListMutation = {
  updateProductList?:  {
    __typename: "ProductList",
    id: string,
    quantity: number,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      descriptionHome?: string | null,
      image: string,
      price: number,
      quantiti: number,
      totalPrice: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProductListMutationVariables = {
  input: DeleteProductListInput,
  condition?: ModelProductListConditionInput | null,
};

export type DeleteProductListMutation = {
  deleteProductList?:  {
    __typename: "ProductList",
    id: string,
    quantity: number,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      descriptionHome?: string | null,
      image: string,
      price: number,
      quantiti: number,
      totalPrice: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    descriptionHome?: string | null,
    image: string,
    price: number,
    quantiti: number,
    totalPrice: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      descriptionHome?: string | null,
      image: string,
      price: number,
      quantiti: number,
      totalPrice: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      descriptionHome?: string | null,
      image: string,
      price: number,
      quantiti: number,
      totalPrice: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductListQueryVariables = {
  id: string,
};

export type GetProductListQuery = {
  getProductList?:  {
    __typename: "ProductList",
    id: string,
    quantity: number,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      descriptionHome?: string | null,
      image: string,
      price: number,
      quantiti: number,
      totalPrice: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProductListsQueryVariables = {
  filter?: ModelProductListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductListsQuery = {
  listProductLists?:  {
    __typename: "ModelProductListConnection",
    items:  Array< {
      __typename: "ProductList",
      id: string,
      quantity: number,
      productID: string,
      product?:  {
        __typename: "Product",
        id: string,
        name: string,
        description: string,
        descriptionHome?: string | null,
        image: string,
        price: number,
        quantiti: number,
        totalPrice: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductListsQueryVariables = {
  filter?: ModelProductListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductListsQuery = {
  syncProductLists?:  {
    __typename: "ModelProductListConnection",
    items:  Array< {
      __typename: "ProductList",
      id: string,
      quantity: number,
      productID: string,
      product?:  {
        __typename: "Product",
        id: string,
        name: string,
        description: string,
        descriptionHome?: string | null,
        image: string,
        price: number,
        quantiti: number,
        totalPrice: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    descriptionHome?: string | null,
    image: string,
    price: number,
    quantiti: number,
    totalPrice: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    descriptionHome?: string | null,
    image: string,
    price: number,
    quantiti: number,
    totalPrice: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    descriptionHome?: string | null,
    image: string,
    price: number,
    quantiti: number,
    totalPrice: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProductListSubscription = {
  onCreateProductList?:  {
    __typename: "ProductList",
    id: string,
    quantity: number,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      descriptionHome?: string | null,
      image: string,
      price: number,
      quantiti: number,
      totalPrice: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProductListSubscription = {
  onUpdateProductList?:  {
    __typename: "ProductList",
    id: string,
    quantity: number,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      descriptionHome?: string | null,
      image: string,
      price: number,
      quantiti: number,
      totalPrice: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProductListSubscription = {
  onDeleteProductList?:  {
    __typename: "ProductList",
    id: string,
    quantity: number,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      descriptionHome?: string | null,
      image: string,
      price: number,
      quantiti: number,
      totalPrice: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
