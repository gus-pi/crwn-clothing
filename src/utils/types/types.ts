export type Category = {
  id: number;
  title: string;
  imageUrl: string;
};

export type User = {
  email: string | null;
};

export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type CartProduct = Product & {
  quantity: number;
};
