'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight, Database, TrendingUp, RefreshCw, Settings, LayoutGrid } from 'lucide-react';
import { performanceData } from '@/data/mockData';

export const AdminDashboard = () => {
  const router = useRouter();

  const handleActionClick = (title: string) => {
    if (title === 'Changer les identifiants') {
      router.push('/admin/change-credentials');
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-gray-100 px-4 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1D9E75] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#1D9E75]/20">
             <LayoutGrid size={24} />
          </div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Console Admin <span className="text-[#1D9E75] ml-2 text-xs font-bold bg-green-50 px-3 py-1 rounded-full uppercase tracking-widest">Live</span></h1>
        </div>
        <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-gray-900">Admin Principal</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Connecté depuis 8h</p>
            </div>
            <div className="w-12 h-12 bg-gray-200 rounded-2xl border-2 border-white shadow-sm overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
            </div>
        </div>
      </div>

      <div className="flex-1 p-4 md:p-10 max-w-7xl mx-auto w-full">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {[
            { label: 'Produits Actifs', value: 47, sub: '+2 ce mois', color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Points de Vente', value: 12, sub: '8 régions couvertes', color: 'text-orange-600', bg: 'bg-orange-50' },
            { label: 'Modèles IA', value: 43, sub: '98% taux de succès', color: 'text-[#1D9E75]', bg: 'bg-green-50' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center transition-transform hover:scale-[1.02]">
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">{stat.label}</p>
              <p className={`text-6xl font-black ${stat.color} mb-2`}>{stat.value}</p>
              <p className="text-xs text-gray-500 font-bold bg-gray-50 px-3 py-1 rounded-full">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Actions Column */}
          <div className="space-y-6">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-4 ml-2">Actions Critiques</h3>
            {[
              { icon: <RefreshCw size={24} />, title: 'Réentraîner les modèles', sub: 'Mettre à jour les algorithmes Prophet', color: 'bg-blue-500 shadow-blue-200' },
              { icon: <TrendingUp size={24} />, title: 'Rapports de Performance', sub: 'Analyse détaillée MAE, RMSE, MAPE', color: 'bg-amber-500 shadow-amber-200' },
              { icon: <Database size={24} />, title: 'Importer des données', sub: 'Charger de nouveaux fichiers CSV de prix', color: 'bg-orange-500 shadow-orange-200' },
              { icon: <Settings size={24} />, title: 'Changer les identifiants', sub: 'Email et mot de passe', color: 'bg-rose-500 shadow-rose-200' },
            ].map((action, i) => (
              <div key={i} onClick={() => handleActionClick(action.title)} className="bg-white rounded-3xl p-6 flex items-center gap-6 border border-transparent hover:border-[#1D9E75]/20 hover:shadow-xl transition-all cursor-pointer group">
                <div className={`w-16 h-16 rounded-2xl ${action.color} text-white flex items-center justify-center shadow-lg transition-transform group-hover:rotate-6`}>
                  {action.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-900 font-black text-lg group-hover:text-[#1D9E75] transition-colors">{action.title}</h4>
                  <p className="text-sm text-gray-400 font-medium">{action.sub}</p>
                </div>
                <ChevronRight className="text-gray-200 group-hover:text-[#1D9E75] transition-all group-hover:translate-x-1" size={24} />
              </div>
            ))}
          </div>

          {/* Table Column */}
          <div className="space-y-6">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-4 ml-2">Santé des Modèles</h3>
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-50/50">
                        <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Produit</th>
                        <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Erreur (MAE)</th>
                        <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Statut</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {performanceData.map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50/30 transition-colors">
                            <td className="px-8 py-5 text-sm font-black text-gray-900">{row.product}</td>
                            <td className="px-8 py-5 text-sm text-gray-500 text-right font-mono font-bold">{row.mae}</td>
                            <td className="px-8 py-5 text-right">
                            <span className={`inline-block px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${
                                row.quality === 'Excellent' ? 'bg-green-50 text-green-600' :
                                row.quality === 'Acceptable' ? 'bg-amber-50 text-amber-600' :
                                'bg-red-50 text-red-600'
                            }`}>
                                {row.quality}
                            </span>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
