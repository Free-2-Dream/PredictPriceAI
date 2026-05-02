'use client';

import React from 'react';
import { TrendingUp, Calendar, MapPin, Package, Info } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, AreaChart, Area } from 'recharts';
import { webChartData } from '@/data/mockData';

export const PredictionTool = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Analyse Prédictive</h1>
        <p className="text-gray-500 font-medium italic">Anticipez les fluctuations du marché grâce à nos modèles IA (Prophet).</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Settings Panel */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="p-2 bg-green-50 text-[#1D9E75] rounded-lg">
                    <TrendingUp size={20} />
                </div>
                Configuration
            </h3>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <Package size={14} /> Produit
                </label>
                <select className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm font-bold text-gray-700 outline-none focus:ring-2 focus:ring-[#1D9E75]/20">
                  <option>Riz importé long grain</option>
                  <option>Maïs jaune</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <MapPin size={14} /> Marché
                </label>
                <select className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm font-bold text-gray-700 outline-none focus:ring-2 focus:ring-[#1D9E75]/20">
                  <option>Yaoundé-Mfoundi</option>
                  <option>Douala-Congo</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <Calendar size={14} /> Date cible
                </label>
                <input 
                  type="date" 
                  defaultValue="2027-01-15"
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm font-bold text-gray-700 outline-none focus:ring-2 focus:ring-[#1D9E75]/20"
                />
              </div>

              <button className="w-full bg-[#1D9E75] text-white py-4 rounded-xl font-bold shadow-lg shadow-[#1D9E75]/20 hover:bg-[#15805d] transition-all transform active:scale-[0.98]">
                Lancer la Prédiction
              </button>
            </div>
          </div>

          <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-200 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <TrendingUp size={120} />
             </div>
             <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-blue-100">Fiabilité Actuelle</h4>
             <p className="text-5xl font-black mb-2">94.2%</p>
             <p className="text-sm text-blue-100 font-medium leading-relaxed">Score basé sur l'analyse de 1,240 points de données historiques sur 3 ans.</p>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-8 space-y-8">
          {/* Main Result Card */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 relative z-10">
                <div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Prix Estimé · Janvier 2027</p>
                    <div className="flex items-baseline gap-2">
                        <p className="text-6xl md:text-7xl font-black text-[#1D9E75]">648</p>
                        <p className="text-xl font-bold text-gray-300">XAF/kg</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100">
                    <Info size={20} className="text-[#1D9E75]" />
                    <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Confiance</p>
                        <p className="text-sm font-bold text-gray-900">580 — 720 XAF</p>
                    </div>
                </div>
            </div>

            <div className="h-[400px] -mx-4 md:mx-0">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={webChartData}>
                        <defs>
                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1D9E75" stopOpacity={0.1}/>
                                <stop offset="95%" stopColor="#1D9E75" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                        <XAxis 
                            dataKey="month" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fontSize: 10, fill: '#9CA3AF', fontWeight: 600 }} 
                            dy={10}
                        />
                        <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fontSize: 10, fill: '#9CA3AF', fontWeight: 600 }} 
                        />
                        <Tooltip 
                            contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                        />
                        <Area 
                            type="monotone" 
                            dataKey="price" 
                            stroke="#1D9E75" 
                            strokeWidth={4} 
                            fillOpacity={1} 
                            fill="url(#colorPrice)" 
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
