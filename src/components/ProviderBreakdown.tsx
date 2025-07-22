import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { mockProviders } from '../data/mockData';

export const ProviderBreakdown: React.FC = () => {
  const data = mockProviders.map(provider => ({
    name: provider.name,
    value: provider.spend,
    color: provider.color
  }));

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Provider Breakdown</h3>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Spend']}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-2 mt-4">
        {mockProviders.map((provider) => (
          <div key={provider.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded" 
                style={{ backgroundColor: provider.color }}
              ></div>
              <span className="text-sm text-gray-700">{provider.name}</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">
                ${provider.spend.toLocaleString()}
              </div>
              <div className={`text-xs ${provider.change > 0 ? 'text-red-600' : 'text-green-600'}`}>
                {provider.change > 0 ? '+' : ''}{provider.change}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};