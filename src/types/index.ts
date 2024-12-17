export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  minOrder: string;
  price: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Supplier {
  id: string;
  name: string;
  location: string;
  rating: number;
  verified: boolean;
}