import React from 'react';

interface PriceCardProps {
  name: string;
  category: string;
  price: number;
  variation: string;
  trend: 'up' | 'down';
}

export const PriceCard: React.FC<PriceCardProps> = ({ name, category, price, variation, trend }) => {
  return (
    <div className="bg-white border-[0.5px] border-[#E0E0E0] rounded-xl p-4 transition-all hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
        <div className="text-right">
          <p className="text-[#1D9E75] font-semibold">{price} XAF/kg</p>
          <span className={`inline-block text-xs px-2 py-0.5 rounded-full mt-1 ${
            trend === 'up' ? 'bg-[#FCEBEB] text-[#A32D2D]' : 'bg-[#EAF3DE] text-[#3B6D11]'
          }`}>
            {variation}
          </span>
        </div>
      </div>
    </div>
  );
};
