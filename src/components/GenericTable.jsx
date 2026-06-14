// src/components/GenericTable.jsx
import React from 'react';

export default function GenericTable({ columns, data, renderRow }) {
    return (
        <div className="w-full overflow-x-auto align-middle">
            <table className="w-full text-left border-collapse overflow-hidden rounded-2xl shadow-sm border border-gray-100">
                <thead className="text-white bg-[#7F7CFF] text-xs font-bold uppercase tracking-wider">
                    <tr>
                        {columns.map((col, idx) => (
                            <th key={idx} className="px-6 py-4">
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-50 text-sm text-gray-700 font-medium">
                    {data.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50/50 transition-all">
                            {renderRow(item, index)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}