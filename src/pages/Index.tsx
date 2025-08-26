import React, { useState } from 'react';
import { CartProvider } from '../contexts/CartContext';
import { Header } from '../components/Header';
import { PlantStore } from '../components/PlantStore';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  console.log('PlantasMX Store initialized');

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onSearch={setSearchQuery} />
        <PlantStore searchQuery={searchQuery} />
        
        {/* Footer */}
        <footer className="bg-green-800 text-white py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">PlantasMX</h3>
                <p className="text-green-200">
                  Tu tienda especializada en plantas exóticas de México. 
                  Calidad garantizada y envíos a todo el país.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Categorías</h4>
                <ul className="space-y-2 text-green-200">
                  <li><a href="#" className="hover:text-white">Aráceas</a></li>
                  <li><a href="#" className="hover:text-white">Moráceas</a></li>
                  <li><a href="#" className="hover:text-white">Marantáceas</a></li>
                  <li><a href="#" className="hover:text-white">Strelitziáceas</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Ayuda</h4>
                <ul className="space-y-2 text-green-200">
                  <li><a href="#" className="hover:text-white">Guía de Cuidados</a></li>
                  <li><a href="#" className="hover:text-white">Envíos</a></li>
                  <li><a href="#" className="hover:text-white">Devoluciones</a></li>
                  <li><a href="#" className="hover:text-white">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contacto</h4>
                <ul className="space-y-2 text-green-200">
                  <li>📧 info@plantasmx.com</li>
                  <li>📱 +52 55 1234 5678</li>
                  <li>📍 Ciudad de México, México</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
              <p>&copy; 2024 PlantasMX. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;