import React from 'react';
import { 
  LayoutDashboard, 
  Server, 
  Lightbulb, 
  BarChart3, 
  Settings,
  X,
  Cloud,
  DollarSign
} from 'lucide-react';
import { clsx } from 'clsx';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Overview', key: 'dashboard', icon: LayoutDashboard },
  { name: 'Resources', key: 'resources', icon: Server },
  { name: 'Recommendations', key: 'recommendations', icon: Lightbulb },
  { name: 'Analytics', key: 'analytics', icon: BarChart3 },
  { name: 'Settings', key: 'settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ 
  currentPage, 
  onPageChange, 
  isOpen, 
  onClose 
}) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={clsx(
        'fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out',
        'md:translate-x-0 md:static md:z-0',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-gray-900">CloudOpt</span>
          </div>
          <button
            onClick={onClose}
            className="md:hidden p-1 text-gray-500 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cost Summary */}
        <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 mx-4 mt-4 rounded-lg border border-blue-100">
          <div className="flex items-center space-x-2 mb-2">
            <DollarSign className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Monthly Spend</span>
          </div>
          <div className="text-2xl font-bold text-blue-900">$12,847</div>
          <div className="text-sm text-blue-700">+12% vs last month</div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.key;
              
              return (
                <button
                  key={item.key}
                  onClick={() => {
                    onPageChange(item.key);
                    onClose();
                  }}
                  className={clsx(
                    'w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors',
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  )}
                >
                  <Icon className={clsx(
                    'mr-3 w-5 h-5',
                    isActive ? 'text-blue-700' : 'text-gray-500'
                  )} />
                  {item.name}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-xs text-gray-600 mb-1">Connected Providers</div>
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">
                A
              </div>
              <div className="w-6 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                Az
              </div>
              <div className="w-6 h-6 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
                G
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};