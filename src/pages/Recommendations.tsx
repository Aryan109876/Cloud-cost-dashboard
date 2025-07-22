import React, { useState } from 'react';
import { Lightbulb, DollarSign, Users, ChevronRight, Filter } from 'lucide-react';
import { mockRecommendations } from '../data/mockData';
import { clsx } from 'clsx';

export const Recommendations: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [effortFilter, setEffortFilter] = useState<string>('all');

  const filteredRecommendations = mockRecommendations.filter(rec => {
    const matchesCategory = categoryFilter === 'all' || rec.category === categoryFilter;
    const matchesEffort = effortFilter === 'all' || rec.effort === effortFilter;
    return matchesCategory && matchesEffort;
  });

  const getEffortBadge = (effort: string) => {
    const colors = {
      low: 'bg-green-100 text-green-700 border-green-200',
      medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      high: 'bg-red-100 text-red-700 border-red-200'
    };
    return colors[effort as keyof typeof colors] || colors.medium;
  };

  const getPriorityBadge = (priority: number) => {
    if (priority <= 2) return 'bg-red-100 text-red-700 border-red-200';
    if (priority <= 4) return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    return 'bg-blue-100 text-blue-700 border-blue-200';
  };

  const totalSavings = filteredRecommendations.reduce((sum, rec) => sum + rec.savings, 0);
  const totalResources = filteredRecommendations.reduce((sum, rec) => sum + rec.resourcesAffected, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Recommendations</h1>
        <p className="text-gray-600 mt-1">AI-powered suggestions to optimize your cloud costs</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Potential Savings</p>
              <p className="text-2xl font-bold text-green-900 mt-1">${totalSavings.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mt-1">per month</p>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Recommendations</p>
              <p className="text-2xl font-bold text-blue-900 mt-1">{filteredRecommendations.length}</p>
              <p className="text-sm text-gray-500 mt-1">available actions</p>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Resources Affected</p>
              <p className="text-2xl font-bold text-orange-900 mt-1">{totalResources}</p>
              <p className="text-sm text-gray-500 mt-1">total resources</p>
            </div>
            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-700">Filters:</span>
          </div>
          
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Categories</option>
            <option value="Compute">Compute</option>
            <option value="Cost Optimization">Cost Optimization</option>
            <option value="Automation">Automation</option>
          </select>
          
          <select
            value={effortFilter}
            onChange={(e) => setEffortFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Effort Levels</option>
            <option value="low">Low Effort</option>
            <option value="medium">Medium Effort</option>
            <option value="high">High Effort</option>
          </select>
        </div>
      </div>

      {/* Recommendations List */}
      <div className="space-y-4">
        {filteredRecommendations.map((recommendation) => (
          <div key={recommendation.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {recommendation.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={clsx(
                        'px-2 py-1 text-xs rounded-full border',
                        getPriorityBadge(recommendation.priority)
                      )}>
                        Priority {recommendation.priority}
                      </span>
                      <span className={clsx(
                        'px-2 py-1 text-xs rounded-full border',
                        getEffortBadge(recommendation.effort)
                      )}>
                        {recommendation.effort} effort
                      </span>
                      <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                        {recommendation.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  {recommendation.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        ${recommendation.savings.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">monthly savings</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {recommendation.resourcesAffected}
                      </div>
                      <div className="text-xs text-gray-500">resources affected</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        ROI: {Math.round((recommendation.savings * 12) / 1000)}x
                      </div>
                      <div className="text-xs text-gray-500">annual return</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-4">
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-1">
                  <span>Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Panel */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-blue-900">
              Implement All Low-Effort Recommendations
            </h3>
            <p className="text-blue-700 mt-1">
              Apply {mockRecommendations.filter(r => r.effort === 'low').length} quick fixes to save up to ${mockRecommendations.filter(r => r.effort === 'low').reduce((sum, r) => sum + r.savings, 0).toLocaleString()}/month
            </p>
          </div>
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Apply All
          </button>
        </div>
      </div>
    </div>
  );
};