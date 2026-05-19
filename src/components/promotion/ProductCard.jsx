import React from "react";
import Card from "./Card";

export default function ProductCard({ image, title, category, price, description }) {
  return (
    <Card className="overflow-hidden !p-0 flex flex-col h-full hover:shadow-md transition-shadow">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="inline-block bg-indigo-50 text-indigo-700 text-xs font-bold px-2.5 py-0.5 rounded-lg mb-2">
            {category}
          </span>
          <h3 className="text-lg font-bold text-gray-900 mb-1 leading-snug">{title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{description}</p>
        </div>
        <div className="text-base font-extrabold text-gray-900 pt-2 border-t border-gray-50">
          {price}
        </div>
      </div>
    </Card>
  );
}