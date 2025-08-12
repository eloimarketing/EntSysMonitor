import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Globe } from 'lucide-react';
import { StaggerContainer, StaggerItem, HoverScale } from './AnimatedComponents';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started',
      price: { monthly: 29, yearly: 290 },
      features: [
        'Up to 10 servers',
        'Basic monitoring',
        'Email alerts',
        '7-day data retention',
        'Community support'
      ],
      icon: Zap,
      color: 'from-blue-500 to-blue-600',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: { monthly: 99, yearly: 990 },
      features: [
        'Up to 100 servers',
        'Advanced monitoring',
        'SMS & Email alerts',
        '30-day data retention',
        'Priority support',
        'Custom dashboards',
        'API access',
        'Team collaboration'
      ],
      icon: Shield,
      color: 'from-primary-500 to-accent-500',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large-scale operations',
      price: { monthly: 299, yearly: 2990 },
      features: [
        'Unlimited servers',
        'Enterprise monitoring',
        'All alert types',
        '1-year data retention',
        '24/7 phone support',
        'Custom integrations',
        'Advanced analytics',
        'Dedicated account manager',
        'SLA guarantees',
        'On-premise deployment'
      ],
      icon: Globe,
      color: 'from-purple-500 to-purple-600',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <StaggerItem>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Simple, Transparent Pricing
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto px-4 sm:px-0">
              Choose the perfect plan for your organization. All plans include a 14-day free trial 
              with full access to all features.
            </p>
          </StaggerItem>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <StaggerItem>
            <div className="bg-gray-100 dark:bg-secondary-800 rounded-lg p-1 flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 sm:px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  billingCycle === 'monthly'
                    ? 'bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white shadow-sm'
                    : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 sm:px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  billingCycle === 'yearly'
                    ? 'bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white shadow-sm'
                    : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-white'
                }`}
              >
                Yearly
                <span className="ml-1 sm:ml-2 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-xs rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </StaggerItem>
        </div>

        {/* Pricing Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <StaggerItem key={plan.name}>
              <HoverScale scale={1.02}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`relative bg-white dark:bg-secondary-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    plan.popular
                      ? 'border-primary-500 dark:border-primary-400'
                      : 'border-gray-100 dark:border-secondary-700'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center space-x-1">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-6 sm:mb-8">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                      <plan.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm sm:text-base text-secondary-600 dark:text-secondary-400">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white">
                        ${plan.price[billingCycle]}
                      </span>
                      <span className="text-sm sm:text-base text-secondary-600 dark:text-secondary-400 ml-1 sm:ml-2">
                        /{billingCycle === 'monthly' ? 'mo' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-xs sm:text-sm text-green-600 dark:text-green-400 mt-2">
                        Save ${(plan.price.monthly * 12 - plan.price.yearly).toLocaleString()}/year
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2 sm:space-x-3"
                      >
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm sm:text-base text-secondary-700 dark:text-secondary-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg'
                        : 'bg-gray-100 dark:bg-secondary-700 text-secondary-900 dark:text-white hover:bg-gray-200 dark:hover:bg-secondary-600'
                    }`}
                  >
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </motion.button>
                </motion.div>
              </HoverScale>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Enterprise CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <StaggerItem>
            <div className="bg-gradient-to-r from-secondary-50 to-primary-50 dark:from-secondary-800 dark:to-primary-900/20 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-3 sm:mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-base sm:text-lg text-secondary-600 dark:text-secondary-300 mb-4 sm:mb-6">
                Contact our sales team for enterprise pricing and custom integrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <HoverScale scale={1.05}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
                  >
                    Contact Sales
                  </motion.button>
                </HoverScale>
                <HoverScale scale={1.05}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-secondary-300 dark:border-secondary-600 text-secondary-700 dark:text-secondary-300 rounded-lg font-semibold text-base sm:text-lg hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors duration-200"
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

export default Pricing; 