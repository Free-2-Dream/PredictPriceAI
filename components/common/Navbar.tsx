'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, TrendingUp, MapPin, User } from 'lucide-react';

export const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Produits', href: '/', icon: <ShoppingBag size={20} /> },
    { name: 'Prédiction', href: '/prediction', icon: <TrendingUp size={20} /> },
    { name: 'Marchés', href: '#', icon: <MapPin size={20} /> },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50 px-8 py-4 items-center justify-between shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1D9E75] rounded-lg"></div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">PrixMarché</span>
        </Link>
        
        <div className="flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold transition-colors ${
                pathname === item.href ? 'text-[#1D9E75]' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link 
          href="/admin/login" 
          className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-100 transition-all"
        >
          <User size={16} />
          Espace Admin
        </Link>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-100 z-50 px-6 py-3 flex items-center justify-around pb-8 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center gap-1 transition-all ${
              pathname === item.href ? 'text-[#1D9E75] scale-110' : 'text-gray-400'
            }`}
          >
            {item.icon}
            <span className="text-[10px] font-bold uppercase tracking-widest">{item.name}</span>
          </Link>
        ))}
      </nav>
    </>
  );
};
