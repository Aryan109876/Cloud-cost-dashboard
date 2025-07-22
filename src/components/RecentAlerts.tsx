import React from 'react';
import { AlertTriangle, TrendingUp, Clock } from 'lucide-react';
import { mockAnomalies } from '../data/mockData';
import { formatDistanceToNow } from 'date-fns';

export const RecentAlerts: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Alerts</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {mockAnomalies.map((anomaly) => (
          <div key={anomaly.id} className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${
                anomaly.severity === 'high' ? 'bg-red-50 text-red-600' : 'bg-yellow-50 text-yellow-600'
              }`}>
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900 truncate">
                    {anomaly.title}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    anomaly.severity === 'high' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {anomaly.severity}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {anomaly.description}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>Impact: {anomaly.impact}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{formatDistanceToNow(new Date(anomaly.detectedAt), { addSuffix: true })}</span>
                    </span>
                  </div>
                </div>
                <div className="text-xs text-blue-600 font-medium mt-2">
                  {anomaly.affectedService}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
        Configure Alert Settings
      </button>
    </div>
  );
};