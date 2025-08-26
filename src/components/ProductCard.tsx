import React from 'react';
import { ShoppingCart, Heart, Star, Droplets, Sun } from 'lucide-react';
import { Product } from '../types/product';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!product.inStock) {
      toast.error('Producto agotado');
      return;
    }
    addToCart(product);
    toast.success(`${product.name} agregado al carrito`);
  };

  const getCareIcon = (level: string) => {
    switch (level) {
      case 'Fácil':
        return <Star className="h-4 w-4 text-green-500" />;
      case 'Intermedio':
        return <Star className="h-4 w-4 text-yellow-500" />;
      case 'Avanzado':
        return <Star className="h-4 w-4 text-red-500" />;
      default:
        return <Star className="h-4 w-4 text-gray-400" />;
    }
  };

  const getLightIcon = (requirement: string) => {
    const intensity = requirement === 'Alta' ? 'text-yellow-500' : 
                     requirement === 'Media' ? 'text-yellow-400' : 'text-gray-400';
    return <Sun className={`h-4 w-4 ${intensity}`} />;
  };

  const getWaterIcon = (requirement: string) => {
    const intensity = requirement === 'Alta' ? 'text-blue-500' : 
                     requirement === 'Media' ? 'text-blue-400' : 'text-gray-400';
    return <Droplets className={`h-4 w-4 ${intensity}`} />;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        {product.featured && (
          <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Destacado
          </div>
        )}
        {!product.inStock && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Agotado
          </div>
        )}
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
          <Heart className="h-4 w-4 text-gray-600" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-lg text-gray-800 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-500 italic">{product.scientificName}</p>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

        {/* Care Requirements */}
        <div className="flex items-center justify-between mb-3 text-xs">
          <div className="flex items-center space-x-1">
            {getCareIcon(product.careLevel)}
            <span className="text-gray-600">{product.careLevel}</span>
          </div>
          <div className="flex items-center space-x-1">
            {getLightIcon(product.lightRequirement)}
            <span className="text-gray-600">Luz {product.lightRequirement}</span>
          </div>
          <div className="flex items-center space-x-1">
            {getWaterIcon(product.waterRequirement)}
            <span className="text-gray-600">Agua {product.waterRequirement}</span>
          </div>
        </div>

        {/* Category and Origin */}
        <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
          <span className="bg-gray-100 px-2 py-1 rounded-full">{product.category}</span>
          <span>{product.origin}</span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-green-600">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              product.inStock
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>{product.inStock ? 'Agregar' : 'Agotado'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};