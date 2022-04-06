import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";


export declare class ProductList {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly image: string;
  readonly price: number;
  readonly totalPrice?: number;
  constructor(init: ModelInit<ProductList>);
  static copyOf(source: Product, mutator: (draft: MutableModel<ProductList>) => MutableModel<ProductList> | void): ProducList;
}

export declare class ProductItem {
  readonly id: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly option?: string;
  readonly productID: string;
  readonly product?: Product;
  constructor(init: ModelInit<ProductItem>);
  static copyOf(source: ProductItem, mutator: (draft: MutableModel<ProductItem>) => MutableModel<ProductItem> | void): ProductItem;
}

