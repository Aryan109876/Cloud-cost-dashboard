import React from 'react';
import { Lightbulb, DollarSign, Users } from 'lucide-react';
import { mockRecommendations } from '../data/mockData';

export const TopRecommendations: React.FC = () => {
  const topRecommendations = mockRecommendations.slice(0, 3);

  const getEffortBadge = (effort: string) => {
    const colors = {
      low: 'bg-green-100 text-green-700',
      medium: 'bg-yellow-100 text-yellow-700',
      high: 'bg-red-100 text-red-700'
    };
    return colors[effort as keyof typeof colors] || colors.medium;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Top Recommendations</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {topRecommendations.map((rec) => (
          <div key={rec.id} className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Lightbulb className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900">
                    {rec.title}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${getEffortBadge(rec.effort)}`}>
                    {rec.effort} effort
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {rec.description}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center space-x-1">
                      <DollarSign className="w-3 h-3" />
                      <span>Save ${rec.savings.toLocaleString()}/mo</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{rec.resourcesAffected} resources</span>
                    </span>
                  </div>
                  <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                    Apply
                  </button>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  {rec.category} • Priority {rec.priority}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
        Generate Full Report
      </button>
    </div>
  );
};