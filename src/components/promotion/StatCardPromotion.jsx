import React from "react";
import Card from "../Card";

export default function StatCardPromotion({ title, value, icon, trend, trendColor }) {
  return (
    <Card>
      <div className="flex justify-between items-start">
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        </div>
        <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
          {icon}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${trendColor}`}>
          {trend}
        </span>
        <span className="text-xs text-gray-400">vs last month</span>
      </div>
    </Card>
  );
}