import React from 'react';
import { DollarSign, TrendingUp, AlertTriangle, Zap } from 'lucide-react';
import { MetricCard } from '../components/MetricCard';
import { CostTrendChart } from '../components/CostTrendChart';
import { ProviderBreakdown } from '../components/ProviderBreakdown';
import { RecentAlerts } from '../components/RecentAlerts';
import { TopRecommendations } from '../components/TopRecommendations';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Cost Overview</h1>
        <p className="text-gray-600 mt-1">Monitor and optimize your cloud spending across all providers</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Monthly Spend"
          value="$12,847"
          change="+12% vs last month"
          changeType="negative"
          icon={DollarSign}
          iconColor="text-blue-600"
        />
        <MetricCard
          title="Daily Average"
          value="$415"
          change="+3% vs yesterday"
          changeType="negative"
          icon={TrendingUp}
          iconColor="text-green-600"
        />
        <MetricCard
          title="Cost Savings"
          value="$3,247"
          change="Available this month"
          changeType="positive"
          icon={Zap}
          iconColor="text-orange-600"
        />
        <MetricCard
          title="Active Alerts"
          value="3"
          change="2 high priority"
          changeType="negative"
          icon={AlertTriangle}
          iconColor="text-red-600"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CostTrendChart />
        </div>
        <div>
          <ProviderBreakdown />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentAlerts />
        <TopRecommendations />
      </div>
    </div>
  );
};