/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      description
      descriptionHome
      image
      price
      quantiti
      totalPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      description
      descriptionHome
      image
      price
      quantiti
      totalPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      description
      descriptionHome
      image
      price
      quantiti
      totalPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createProductList = /* GraphQL */ `
  mutation CreateProductList(
    $input: CreateProductListInput!
    $condition: ModelProductListConditionInput
  ) {
    createProductList(input: $input, condition: $condition) {
      id
      quantity
      productID
      product {
        id
        name
        description
        descriptionHome
        image
        price
        quantiti
        totalPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProductList = /* GraphQL */ `
  mutation UpdateProductList(
    $input: UpdateProductListInput!
    $condition: ModelProductListConditionInput
  ) {
    updateProductList(input: $input, condition: $condition) {
      id
      quantity
      productID
      product {
        id
        name
        description
        descriptionHome
        image
        price
        quantiti
        totalPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProductList = /* GraphQL */ `
  mutation DeleteProductList(
    $input: DeleteProductListInput!
    $condition: ModelProductListConditionInput
  ) {
    deleteProductList(input: $input, condition: $condition) {
      id
      quantity
      productID
      product {
        id
        name
        description
        descriptionHome
        image
        price
        quantiti
        totalPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
