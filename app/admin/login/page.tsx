'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Lock, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#F0F2F5]">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl border border-gray-100">
        <div className="flex flex-col items-center mb-12">
            <div className="w-20 h-20 bg-[#1D9E75] rounded-3xl flex items-center justify-center text-white mb-6 shadow-xl shadow-[#1D9E75]/20 animate-float">
                <Lock size={32} />
            </div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Accès Admin</h1>
            <p className="text-gray-400 text-sm font-medium mt-1">Espace réservé · PredictPriceAI</p>
        </div>

        <div className="space-y-6">
            <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Identifiant</label>
                <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                    <input 
                        type="text" 
                        placeholder="nom@exemple.com"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl font-bold text-gray-700 outline-none focus:ring-2 focus:ring-[#1D9E75]/20 transition-all"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Mot de passe</label>
                <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                    <input 
                        type={showPassword ? 'text' : 'password'} 
                        placeholder="••••••••"
                        className="w-full pl-12 pr-14 py-4 bg-gray-50 border-none rounded-2xl font-bold text-gray-700 outline-none focus:ring-2 focus:ring-[#1D9E75]/20 transition-all"
                    />
                    <button 
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-[#1D9E75] transition-colors"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
                <div className="flex justify-end px-1">
                    <Link 
                      href="/admin/forgot-password" 
                      className="text-[10px] font-black text-[#1D9E75] uppercase tracking-widest hover:underline"
                    >
                      Mot de passe oublié ?
                    </Link>
                </div>
            </div>

            <Link 
              href="/admin/dashboard"
              className="w-full bg-[#1D9E75] text-white py-5 rounded-2xl font-black text-lg shadow-lg shadow-[#1D9E75]/20 hover:bg-[#15805d] transition-all transform active:scale-[0.98] flex items-center justify-center gap-3"
            >
                Connexion
                <ArrowRight size={20} />
            </Link>
        </div>

        <p className="mt-12 text-center text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em]">Système de Sécurité Avancé</p>
      </div>
    </div>
  );
}
