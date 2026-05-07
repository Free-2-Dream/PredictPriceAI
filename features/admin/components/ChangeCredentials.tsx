'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Loader2 } from 'lucide-react';
import axios from 'axios';

const API_URL = '/api/change-credentials';

export const ChangeCredentials = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; success: boolean } | null>(null);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      const body: Record<string, string> = { current_password: currentPassword };
      if (email) body.email = email;
      if (newPassword) body.password = newPassword;

      const { data } = await axios.post(API_URL, body);
      setMessage({ text: data.message, success: true });
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response?.data?.message) {
        setMessage({ text: err.response.data.message, success: false });
      } else {
        setMessage({ text: 'Une erreur est survenue. Réessayez.', success: false });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4">
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-gray-700 transition-colors"
      >
        <ArrowLeft size={20} />
      </button>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 w-full max-w-lg">
        <h2 className="text-2xl font-black text-gray-900 mb-8">Changer les identifiants</h2>

        {message && (
          <div className={`mb-6 px-4 py-3 rounded-xl text-sm font-medium ${message.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">Nouvel email</label>
            <input
              type="email"
              placeholder="Laisser vide pour ne pas modifier"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D9E75]/30"
            />
            <p className="text-xs text-gray-400 mt-1">Ce champ est optionnel</p>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">Ancien mot de passe</label>
            <input
              type="password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1D9E75]/30"
            />
            <p className="text-xs text-[#1D9E75] mt-1">Requis uniquement si vous changez le mot de passe</p>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">Nouveau mot de passe</label>
            <input
              type="password"
              placeholder="Laisser vide pour ne pas modifier"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D9E75]/30"
            />
            <p className="text-xs text-gray-400 mt-1">Ce champ est optionnel</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1D9E75] hover:bg-[#178a64] disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            {loading && <Loader2 size={18} className="animate-spin" />}
            {loading ? 'Enregistrement...' : 'Enregistrer les modifications'}
          </button>
        </form>
      </div>
    </div>
  );
};
