import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Bell, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Cpu, 
  Network,
  Eye,
  Clock,
  TrendingUp,
  Settings
} from 'lucide-react';
import { StaggerContainer, StaggerItem, HoverScale } from './AnimatedComponents';

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Monitor system performance with live dashboards and customizable metrics that update in real-time.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Bell,
      title: 'Smart Alerting',
      description: 'Intelligent notifications that learn from your environment and only alert when it matters.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, SSO integration, and compliance certifications.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Sub-second response times with global CDN and optimized infrastructure for instant insights.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Monitoring',
      description: 'Monitor systems across multiple regions and cloud providers from a single unified dashboard.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Database,
      title: 'Data Intelligence',
      description: 'AI-powered insights that predict issues before they occur and optimize your infrastructure.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Cpu,
      title: 'Resource Optimization',
      description: 'Automatically optimize resource allocation and identify cost-saving opportunities.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Network,
      title: 'Network Monitoring',
      description: 'Comprehensive network visibility with packet analysis and bandwidth monitoring.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Eye,
      title: 'Visual Monitoring',
      description: 'Beautiful visualizations and heatmaps that make complex data easy to understand.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Clock,
      title: 'Historical Data',
      description: 'Access years of historical data with advanced querying and trend analysis capabilities.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: TrendingUp,
      title: 'Performance Trends',
      description: 'Track performance over time with predictive analytics and capacity planning tools.',
      color: 'from-rose-500 to-rose-600'
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Simple setup with pre-built integrations for popular tools and cloud platforms.',
      color: 'from-violet-500 to-violet-600'
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <StaggerItem>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Powerful Features for Modern Enterprises
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto px-4 sm:px-0">
              Everything you need to monitor, analyze, and optimize your enterprise infrastructure 
              with cutting-edge technology and intuitive design.
            </p>
          </StaggerItem>
        </div>

        {/* Features Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <StaggerItem key={feature.title}>
              <HoverScale scale={1.02}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-secondary-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-secondary-700 group"
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-secondary-900 dark:text-white mb-3 sm:mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-full h-1 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                  </div>
                </motion.div>
              </HoverScale>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Call to Action */}
        <div className="mt-16 sm:mt-20 text-center">
          <StaggerItem>
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 sm:p-12 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Transform Your Monitoring?
              </h3>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
                Join thousands of enterprises that trust ESM for their critical infrastructure monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <HoverScale scale={1.05}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
                  >
                    Start Free Trial
                  </motion.button>
                </HoverScale>
                <HoverScale scale={1.05}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
                  >
                    Schedule Demo
                  </motion.button>
                </HoverScale>
              </div>
            </div>
          </StaggerItem>
        </div>
      </div>
    </section>
  );
};

export default Features; 