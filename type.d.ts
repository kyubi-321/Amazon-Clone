export interface ProductProps {
    brand: string; // You might want to define a type for brand (e.g., 'Nike' or 'Adidas')
    category: string;
    description: string;
    image: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    title: string;
    _id: number; // Use the appropriate type for _id
  }
  
  export interface StoreProduct extends ProductProps {
    quantity: number;
  }
  
  export interface StateProps {
    productData: ProductProps[];
    favouriteData: StoreProduct[];
    userInfo: null | string;
    next: any;
    allProducts: ProductProps[];
  }
  