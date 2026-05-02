'use client';

import React, { useState } from 'react';
import { Mail, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#F0F2F5]">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#1D9E75]/5 rounded-full blur-2xl"></div>

        <Link 
          href="/admin/login" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#1D9E75] font-bold text-xs uppercase tracking-widest mb-10 transition-colors"
        >
          <ArrowLeft size={16} />
          Retour au Login
        </Link>

        {!submitted ? (
          <>
            <div className="mb-10">
              <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-3">Mot de passe oublié ?</h1>
              <p className="text-gray-500 font-medium leading-relaxed">
                Pas d'inquiétude. Entrez votre email et nous vous enverrons un lien pour réinitialiser votre accès.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Email Administrateur</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@predictprice.ai"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl font-bold text-gray-700 outline-none focus:ring-2 focus:ring-[#1D9E75]/20 transition-all"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#1D9E75] text-white py-5 rounded-2xl font-black text-lg shadow-lg shadow-[#1D9E75]/20 hover:bg-[#15805d] transition-all transform active:scale-[0.98] flex items-center justify-center gap-3"
              >
                Envoyer le lien
                <Send size={20} />
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-20 h-20 bg-green-50 text-[#1D9E75] rounded-full flex items-center justify-center mx-auto mb-8 animate-in zoom-in duration-300">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Email Envoyé !</h2>
            <p className="text-gray-500 font-medium leading-relaxed mb-8">
              Un lien de réinitialisation a été envoyé à <br/>
              <span className="text-gray-900 font-bold">{email}</span>.
            </p>
            <Link 
              href="/admin/login"
              className="inline-block px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-all"
            >
              Retourner à la connexion
            </Link>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-gray-300 text-[10px] font-bold uppercase tracking-[0.3em]">Support Technique PredictPrice</p>
        </div>
      </div>
    </div>
  );
}
