import React from 'react';
import { motion } from 'framer-motion';
import { Users, Server, Globe, Shield } from 'lucide-react';
import { StaggerContainer, StaggerItem, AnimatedCounter } from './AnimatedComponents';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: 10000,
      suffix: '+',
      label: 'Active Users',
      description: 'Trusted by enterprises worldwide'
    },
    {
      icon: Server,
      value: 50000,
      suffix: '+',
      label: 'Servers Monitored',
      description: 'Real-time monitoring across all systems'
    },
    {
      icon: Globe,
      value: 99.9,
      suffix: '%',
      label: 'Uptime',
      description: 'Reliable performance you can count on'
    },
    {
      icon: Shield,
      value: 100,
      suffix: '%',
      label: 'Secure',
      description: 'Enterprise-grade security & compliance'
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <StaggerItem>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Trusted by Industry Leaders
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto px-4 sm:px-0">
              Our platform powers mission-critical systems for thousands of organizations, 
              providing unmatched reliability and performance.
            </p>
          </StaggerItem>
        </div>

        {/* Stats Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <StaggerItem key={stat.label}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-secondary-800 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-secondary-700"
              >
                {/* Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>

                {/* Counter */}
                <div className="mb-2">
                  <span className="text-3xl sm:text-4xl font-bold gradient-text">
                    <AnimatedCounter value={stat.value} />
                  </span>
                  <span className="text-3xl sm:text-4xl font-bold text-primary-500">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-lg sm:text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-secondary-600 dark:text-secondary-400">
                  {stat.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Additional Trust Indicators */}
        <div className="mt-12 sm:mt-16 text-center">
          <StaggerItem>
            <div className="bg-white dark:bg-secondary-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-secondary-700">
              <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">
                Industry Recognition
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { title: 'Gartner Leader', description: 'Named a Leader in Application Performance Monitoring' },
                  { title: 'Forrester Wave', description: 'Top performer in Infrastructure Monitoring' },
                  { title: 'Customer Choice', description: 'Highest customer satisfaction score in the industry' }
                ].map((award, index) => (
                  <motion.div
                    key={award.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-white font-bold text-sm sm:text-base">★</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                      {award.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-400">
                      {award.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </StaggerItem>
        </div>
      </div>
    </section>
  );
};

export default Stats; 