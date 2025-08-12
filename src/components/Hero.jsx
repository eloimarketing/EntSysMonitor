import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, BarChart3, Bell, Shield, Zap } from 'lucide-react';
import { FadeIn, SlideUp, HoverScale } from './AnimatedComponents';

const Hero = () => {
  const features = [
    { icon: BarChart3, text: 'Real-time Analytics' },
    { icon: Bell, text: 'Smart Alerts' },
    { icon: Shield, text: 'Enterprise Security' },
    { icon: Zap, text: 'Lightning Fast' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-1">
            {/* Badge */}
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm font-medium">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
                <span className="hidden sm:inline">Enterprise System Monitoring Platform</span>
                <span className="sm:hidden">Enterprise Monitoring</span>
              </div>
            </FadeIn>

            {/* Headline */}
            <div className="space-y-4">
              <FadeIn delay={0.4}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Monitor Your
                  <span className="block gradient-text">Enterprise Systems</span>
                  Like Never Before
                </h1>
              </FadeIn>
              
              <SlideUp delay={0.6}>
                <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto px-4 sm:px-0">
                  Advanced monitoring and alerting platform that provides real-time insights, 
                  predictive analytics, and intelligent notifications for your critical infrastructure.
                </p>
              </SlideUp>
            </div>

            {/* Feature Pills */}
            <SlideUp delay={0.8}>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4 sm:px-0">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white dark:bg-secondary-800 rounded-full shadow-sm border border-gray-200 dark:border-secondary-700"
                  >
                    <feature.icon className="w-4 h-4 text-primary-500" />
                    <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </SlideUp>

            {/* CTA Buttons */}
            <SlideUp delay={1.0}>
              <div className="flex flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <HoverScale scale={1.05}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-shadow duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </HoverScale>
                
                <HoverScale scale={1.05}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-secondary-300 dark:border-secondary-600 text-secondary-700 dark:text-secondary-300 rounded-lg font-semibold text-base sm:text-lg hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Watch Demo</span>
                  </motion.button>
                </HoverScale>
              </div>
            </SlideUp>

            {/* Trust Indicators */}
            <SlideUp delay={1.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 text-sm text-secondary-500 dark:text-secondary-400 px-4 sm:px-0">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 border-2 border-white dark:border-secondary-800"
                      />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm">Trusted by 10,000+ companies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm">4.9/5 rating</span>
                </div>
              </div>
            </SlideUp>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative order-2 lg:order-2">
            <FadeIn delay={0.6}>
              <div className="relative bg-white dark:bg-secondary-800 rounded-2xl shadow-2xl p-4 sm:p-6 border border-gray-200 dark:border-secondary-700 max-w-sm mx-auto lg:max-w-none">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs sm:text-sm text-secondary-500 dark:text-secondary-400">
                    ESM Dashboard
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  {[
                    { label: 'CPU Usage', value: '78%', color: 'from-green-400 to-green-600' },
                    { label: 'Memory', value: '92%', color: 'from-yellow-400 to-orange-500' },
                    { label: 'Network', value: '45%', color: 'from-blue-400 to-blue-600' },
                    { label: 'Storage', value: '67%', color: 'from-purple-400 to-purple-600' },
                  ].map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
                      className="bg-gray-50 dark:bg-secondary-700 rounded-lg p-3 sm:p-4"
                    >
                      <div className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-400 mb-1 sm:mb-2">
                        {metric.label}
                      </div>
                      <div className={`text-lg sm:text-2xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                        {metric.value}
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-secondary-600 rounded-full h-1.5 sm:h-2 mt-1 sm:mt-2">
                        <motion.div
                          className={`h-1.5 sm:h-2 bg-gradient-to-r ${metric.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: metric.value }}
                          transition={{ delay: 1.5 + index * 0.1, duration: 1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Alerts */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="text-xs sm:text-sm font-medium text-secondary-700 dark:text-secondary-300">
                    Recent Alerts
                  </div>
                  {[
                    { type: 'warning', message: 'High CPU usage detected', time: '2 min ago' },
                    { type: 'error', message: 'Database connection timeout', time: '5 min ago' },
                    { type: 'info', message: 'Backup completed successfully', time: '10 min ago' },
                  ].map((alert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.8 + index * 0.2, duration: 0.5 }}
                      className={`flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg ${
                        alert.type === 'error' ? 'bg-red-50 dark:bg-red-900/20' :
                        alert.type === 'warning' ? 'bg-yellow-50 dark:bg-yellow-900/20' :
                        'bg-blue-50 dark:bg-blue-900/20'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                        alert.type === 'error' ? 'bg-red-500' :
                        alert.type === 'warning' ? 'bg-yellow-500' :
                        'bg-blue-500'
                      }`}></div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm font-medium text-secondary-700 dark:text-secondary-300 truncate">
                          {alert.message}
                        </div>
                        <div className="text-xs text-secondary-500 dark:text-secondary-400">
                          {alert.time}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-20"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-12 sm:h-12 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full opacity-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 