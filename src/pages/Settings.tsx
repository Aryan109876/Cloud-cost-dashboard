import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  Bell, 
  DollarSign, 
  Cloud, 
  Key,
  Save,
  Shield,
  Globe
} from 'lucide-react';

export const Settings: React.FC = () => {
  const [budgetAlert, setBudgetAlert] = useState(15000);
  const [alertThreshold, setAlertThreshold] = useState(80);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [slackNotifications, setSlackNotifications] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Configure your dashboard preferences and integrations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Budget & Alerts */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Budget & Alerts</h3>
                <p className="text-sm text-gray-600">Set spending limits and notification preferences</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Budget Limit
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="number"
                    id="budget"
                    value={budgetAlert}
                    onChange={(e) => setBudgetAlert(Number(e.target.value))}
                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="threshold" className="block text-sm font-medium text-gray-700 mb-2">
                  Alert Threshold ({alertThreshold}% of budget)
                </label>
                <input
                  type="range"
                  id="threshold"
                  min="50"
                  max="95"
                  value={alertThreshold}
                  onChange={(e) => setAlertThreshold(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>50%</span>
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                <p className="text-sm text-gray-600">Choose how you want to receive alerts</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-900">Email Notifications</div>
                  <div className="text-sm text-gray-600">Receive alerts via email</div>
                </div>
                <button
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    emailNotifications ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      emailNotifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-900">Slack Integration</div>
                  <div className="text-sm text-gray-600">Send alerts to Slack channels</div>
                </div>
                <button
                  onClick={() => setSlackNotifications(!slackNotifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    slackNotifications ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      slackNotifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Cloud Providers */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <Cloud className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Cloud Provider Integration</h3>
                <p className="text-sm text-gray-600">Manage your cloud provider connections</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded text-white text-sm flex items-center justify-center font-bold">
                      A
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Amazon Web Services</div>
                      <div className="text-sm text-gray-600">Connected • Last sync: 2 minutes ago</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-green-600">Active</span>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded text-white text-sm flex items-center justify-center font-bold">
                      Az
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Microsoft Azure</div>
                      <div className="text-sm text-gray-600">Connected • Last sync: 5 minutes ago</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-green-600">Active</span>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-500 rounded text-white text-sm flex items-center justify-center font-bold">
                      G
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Google Cloud Platform</div>
                      <div className="text-sm text-gray-600">Connected • Last sync: 1 hour ago</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-green-600">Active</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Add New Provider
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* API Keys */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                <Key className="w-4 h-4 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">API Configuration</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Manage API keys and access tokens for cloud provider integrations.
            </p>
            <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Configure APIs
            </button>
          </div>

          {/* Security */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Security</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Two-Factor Auth</span>
                <span className="text-green-600">Enabled</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Session Timeout</span>
                <span className="text-gray-900">30 minutes</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">API Rate Limit</span>
                <span className="text-gray-900">1000/hour</span>
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Security Settings
            </button>
          </div>

          {/* Data & Privacy */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                <Globe className="w-4 h-4 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Data & Privacy</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Control data retention, export options, and privacy settings.
            </p>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Export Data
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Privacy Settings
              </button>
            </div>
          </div>

          {/* Save Button */}
          <button className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};