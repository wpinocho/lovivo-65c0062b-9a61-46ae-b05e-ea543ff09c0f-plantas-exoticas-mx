import React from 'react';
import { Filter, X } from 'lucide-react';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    category: string;
    careLevel: string;
    priceRange: string;
    inStock: boolean;
  };
  onFilterChange: (filters: any) => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  onClose,
  filters,
  onFilterChange
}) => {
  const categories = ['Todas', 'Aráceas', 'Moráceas', 'Marantáceas', 'Strelitziáceas'];
  const careLevels = ['Todos', 'Fácil', 'Intermedio', 'Avanzado'];
  const priceRanges = [
    { label: 'Todos los precios', value: '' },
    { label: 'Menos de $1,000', value: '0-1000' },
    { label: '$1,000 - $2,000', value: '1000-2000' },
    { label: '$2,000 - $3,000', value: '2000-3000' },
    { label: 'Más de $3,000', value: '3000+' }
  ];

  const handleFilterChange = (key: string, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:relative lg:inset-auto">
      <div className="absolute inset-0 bg-black bg-opacity-50 lg:hidden" onClick={onClose} />
      <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-xl lg:relative lg:w-full lg:shadow-none">
        <div className="p-4 border-b lg:border-b-0">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filtros
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full lg:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="p-4 space-y-6">
          {/* Category Filter */}
          <div>
            <h3 className="font-medium mb-3">Categoría</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value={category === 'Todas' ? '' : category}
                    checked={filters.category === (category === 'Todas' ? '' : category)}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="mr-2 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Care Level Filter */}
          <div>
            <h3 className="font-medium mb-3">Nivel de Cuidado</h3>
            <div className="space-y-2">
              {careLevels.map((level) => (
                <label key={level} className="flex items-center">
                  <input
                    type="radio"
                    name="careLevel"
                    value={level === 'Todos' ? '' : level}
                    checked={filters.careLevel === (level === 'Todos' ? '' : level)}
                    onChange={(e) => handleFilterChange('careLevel', e.target.value)}
                    className="mr-2 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm">{level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div>
            <h3 className="font-medium mb-3">Rango de Precio</h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <label key={range.value} className="flex items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    value={range.value}
                    checked={filters.priceRange === range.value}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    className="mr-2 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm">{range.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Stock Filter */}
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.inStock}
                onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                className="mr-2 text-green-600 focus:ring-green-500"
              />
              <span className="text-sm">Solo productos en stock</span>
            </label>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => onFilterChange({
              category: '',
              careLevel: '',
              priceRange: '',
              inStock: false
            })}
            className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Limpiar Filtros
          </button>
        </div>
      </div>
    </div>
  );
};