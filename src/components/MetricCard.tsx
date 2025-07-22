import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { clsx } from 'clsx';

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  iconColor?: string;
  trend?: 'up' | 'down' | 'stable';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  iconColor = 'text-blue-600',
  trend
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change && (
            <p className={clsx(
              'text-sm mt-1 flex items-center space-x-1',
              changeType === 'positive' ? 'text-green-600' :
              changeType === 'negative' ? 'text-red-600' :
              'text-gray-600'
            )}>
              <span>{change}</span>
            </p>
          )}
        </div>
        <div className={clsx(
          'w-12 h-12 rounded-lg flex items-center justify-center',
          iconColor === 'text-blue-600' ? 'bg-blue-50' :
          iconColor === 'text-green-600' ? 'bg-green-50' :
          iconColor === 'text-orange-600' ? 'bg-orange-50' :
          iconColor === 'text-red-600' ? 'bg-red-50' :
          'bg-gray-50'
        )}>
          <Icon className={clsx('w-6 h-6', iconColor)} />
        </div>
      </div>
    </div>
  );
};