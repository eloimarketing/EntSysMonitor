import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Server,
  Database,
  Network
} from 'lucide-react';
import { StaggerContainer, StaggerItem, AnimatedProgressBar, HoverScale } from './AnimatedComponents';

const DashboardPreview = () => {
  const metrics = [
    { name: 'CPU Usage', value: 78, color: 'from-green-400 to-green-600', icon: Server },
    { name: 'Memory', value: 92, color: 'from-yellow-400 to-orange-500', icon: Database },
    { name: 'Network', value: 45, color: 'from-blue-400 to-blue-600', icon: Network },
    { name: 'Storage', value: 67, color: 'from-purple-400 to-purple-600', icon: BarChart3 },
    { name: 'Response Time', value: 23, color: 'from-cyan-400 to-cyan-600', icon: Clock },
    { name: 'Error Rate', value: 2, color: 'from-red-400 to-red-600', icon: AlertTriangle }
  ];

  const alerts = [
    { type: 'warning', message: 'High CPU usage detected on server-01', time: '2 min ago', status: 'Active' },
    { type: 'error', message: 'Database connection timeout', time: '5 min ago', status: 'Resolved' },
    { type: 'info', message: 'Backup completed successfully', time: '10 min ago', status: 'Completed' },
    { type: 'warning', message: 'Memory usage approaching threshold', time: '15 min ago', status: 'Active' },
    { type: 'success', message: 'System optimization completed', time: '20 min ago', status: 'Completed' }
  ];

  const recentActivity = [
    { action: 'User login', user: 'admin@company.com', time: '1 min ago' },
    { action: 'Alert acknowledged', user: 'ops@company.com', time: '3 min ago' },
    { action: 'Configuration updated', user: 'admin@company.com', time: '5 min ago' },
    { action: 'Report generated', user: 'analyst@company.com', time: '8 min ago' }
  ];

  return (
    <section id="dashboard" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-800 dark:to-primary-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <StaggerItem>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              See Your Systems in Action
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto px-4 sm:px-0">
              Experience the power of real-time monitoring with our intuitive dashboard that 
              provides instant visibility into your entire infrastructure.
            </p>
          </StaggerItem>
        </div>

        {/* Dashboard Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Metrics Panel */}
          <div className="lg:col-span-2">
            <StaggerItem>
              <div className="bg-white dark:bg-secondary-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 dark:border-secondary-700">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white">
                    System Metrics
                  </h3>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-secondary-500 dark:text-secondary-400">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Live Data</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={metric.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="space-y-2 sm:space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${metric.color} rounded-lg flex items-center justify-center`}>
                            <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <span className="font-medium text-sm sm:text-base text-secondary-900 dark:text-white">
                            {metric.name}
                          </span>
                        </div>
                        <span className="text-base sm:text-lg font-bold text-secondary-900 dark:text-white">
                          {metric.value}%
                        </span>
                      </div>
                      <AnimatedProgressBar 
                        percentage={metric.value} 
                        className="h-2 sm:h-3"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </div>

          {/* Alerts Panel */}
          <div>
            <StaggerItem>
              <div className="bg-white dark:bg-secondary-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 dark:border-secondary-700 h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">
                  Recent Alerts
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  {alerts.map((alert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                      className={`p-3 sm:p-4 rounded-lg border-l-4 ${
                        alert.type === 'error' ? 'bg-red-50 dark:bg-red-900/20 border-red-500' :
                        alert.type === 'warning' ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500' :
                        alert.type === 'success' ? 'bg-green-50 dark:bg-green-900/20 border-green-500' :
                        'bg-blue-50 dark:bg-blue-900/20 border-blue-500'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm font-medium text-secondary-900 dark:text-white mb-1 truncate">
                            {alert.message}
                          </p>
                          <p className="text-xs text-secondary-500 dark:text-secondary-400">
                            {alert.time}
                          </p>
                        </div>
                        <span className={`text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ml-2 flex-shrink-0 ${
                          alert.status === 'Active' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                          alert.status === 'Resolved' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                          'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                        }`}>
                          {alert.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="mt-8 sm:mt-12">
          <StaggerItem>
            <div className="bg-white dark:bg-secondary-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 dark:border-secondary-700">
              <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">
                Recent Activity
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 dark:bg-secondary-700 rounded-lg"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs sm:text-sm">
                        {activity.user.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-medium text-secondary-900 dark:text-white truncate">
                        {activity.action}
                      </p>
                      <p className="text-xs text-secondary-500 dark:text-secondary-400 truncate">
                        {activity.user} • {activity.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </StaggerItem>
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <StaggerItem>
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Ready to Experience the Full Dashboard?
              </h3>
              <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-90">
                Get hands-on experience with our interactive demo and see how ESM can transform your monitoring.
              </p>
              <HoverScale scale={1.05}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  Try Interactive Demo
                </motion.button>
              </HoverScale>
            </div>
          </StaggerItem>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview; 