export interface Product {
  id: string;
  name: string;
  scientificName: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  category: string;
  origin: string;
  careLevel: 'Fácil' | 'Intermedio' | 'Avanzado';
  lightRequirement: 'Baja' | 'Media' | 'Alta';
  waterRequirement: 'Baja' | 'Media' | 'Alta';
  inStock: boolean;
  featured: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}