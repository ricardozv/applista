/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateProductList = /* GraphQL */ `
  subscription OnCreateProductList {
    onCreateProductList {
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
export const onUpdateProductList = /* GraphQL */ `
  subscription OnUpdateProductList {
    onUpdateProductList {
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
export const onDeleteProductList = /* GraphQL */ `
  subscription OnDeleteProductList {
    onDeleteProductList {
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
