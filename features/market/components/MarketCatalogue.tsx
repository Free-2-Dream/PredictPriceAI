'use client';

import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight, Filter } from 'lucide-react';
import { productsMock } from '@/data/mockData';
import { PriceCard } from '@/components/ui/PriceCard';

export const MarketCatalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const categories = ['Tous', 'Céréales', 'Huiles', 'Viandes', 'Légumes', 'Produits laitiers'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Prix du Marché</h1>
          <p className="text-gray-500 font-medium">Prix en temps réel des denrées au Cameroun</p>
        </div>
        <div className="flex items-center gap-3 bg-[#E1F5EE] px-4 py-2 rounded-xl border border-[#1D9E75]/10">
          <div className="w-2 h-2 bg-[#1D9E75] rounded-full animate-pulse"></div>
          <span className="text-xs font-bold text-[#1D9E75] uppercase tracking-widest">Yaoundé · Mis à jour à 08:30</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar / Filters (Desktop) */}
        <aside className="hidden lg:block space-y-8">
          <div>
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Catégories</h3>
            <div className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#1D9E75] text-white shadow-lg shadow-[#1D9E75]/20'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {cat}
                  {selectedCategory === cat && <ChevronRight size={16} />}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Conseil du jour</p>
             <p className="text-sm text-gray-700 leading-relaxed italic">"Le prix du maïs jaune est en hausse. Privilégiez les achats groupés pour réduire les coûts."</p>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* Search and Mobile Category Pills */}
          <div className="space-y-6 sticky top-24 z-10 bg-[#F0F2F5]/80 backdrop-blur-md pb-4 -mx-4 px-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un produit (ex: Riz, Tomate...)"
                className="w-full pl-12 pr-4 py-4 bg-white border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-[#1D9E75]/20 outline-none text-gray-700 font-medium"
              />
              <button className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-50 text-gray-500 rounded-lg">
                <Filter size={20} />
              </button>
            </div>

            <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-full whitespace-nowrap text-sm font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#1D9E75] text-white shadow-md shadow-[#1D9E75]/20'
                      : 'bg-white text-gray-500 border border-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {productsMock.map((product, i) => (
              <PriceCard key={i} {...product} />
            ))}
          </div>

          {/* Grouped sections (Mobile design style) */}
          <div className="lg:hidden space-y-4 pt-6">
             <div className="flex items-center justify-between">
                <h3 className="font-black text-gray-900 uppercase text-xs tracking-widest">Catégories Secondaires</h3>
                <span className="text-[#1D9E75] text-xs font-bold">Voir tout</span>
             </div>
             <div className="space-y-3">
                <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center justify-between shadow-sm">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
                         <ChevronRight size={24} />
                      </div>
                      <span className="font-bold text-gray-900">Huiles et Graisses</span>
                   </div>
                   <span className="bg-gray-50 text-gray-400 text-[10px] font-bold px-2 py-1 rounded-md">8 PRODUITS</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
