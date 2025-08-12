import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Mail, Phone, MapPin, Twitter, Linkedin, Github, Facebook } from 'lucide-react';
import { StaggerContainer, StaggerItem, HoverScale } from './AnimatedComponents';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Documentation', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Status Page', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'CCPA', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <StaggerContainer>
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10 sm:mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <StaggerItem>
                <div className="flex items-center mb-4 sm:mb-6">
                                    <img
                    src="/logo.png"
                    alt="ESM Logo"
                    className="w-20 h-20 sm:w-32 sm:h-32 object-contain"
                  />
                </div>
                <p className="text-sm sm:text-base text-secondary-300 mb-4 sm:mb-6 max-w-md">
                  Enterprise System Monitoring & Alerting platform that provides real-time insights, 
                  predictive analytics, and intelligent notifications for your critical infrastructure.
                </p>
                                 <div className="space-y-2 sm:space-y-3">
                   <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-secondary-300">
                     <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                     <span className="break-all">info@eloiconsulting.com</span>
                   </div>
                   <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-secondary-300">
                     <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                     <span>+44 787 650 0946</span>
                   </div>
                   <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-secondary-300">
                     <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                     <span>Headquarters, 2-4 Dalkeith Street, Barrow-In-Furness Cumbria, England, LA14 1SP, UK</span>
                   </div>
                 </div>
              </StaggerItem>
            </div>

            {/* Product Links */}
            <div>
              <StaggerItem>
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Product</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.product.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        className="text-xs sm:text-sm text-secondary-300 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </StaggerItem>
            </div>

            {/* Company Links */}
            <div>
              <StaggerItem>
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Company</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        className="text-xs sm:text-sm text-secondary-300 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </StaggerItem>
            </div>

            {/* Support Links */}
            <div>
              <StaggerItem>
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Support</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        className="text-xs sm:text-sm text-secondary-300 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </StaggerItem>
            </div>
          </div>

          {/* Newsletter Signup */}
          <StaggerItem>
            <div className="bg-secondary-800 rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Stay Updated</h3>
                <p className="text-sm sm:text-base text-secondary-300 mb-4 sm:mb-6 max-w-md mx-auto">
                  Get the latest updates, news, and insights about enterprise monitoring and our platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary-700 border border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-secondary-400 text-sm sm:text-base"
                  />
                  <HoverScale scale={1.05}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow duration-200 text-sm sm:text-base"
                    >
                      Subscribe
                    </motion.button>
                  </HoverScale>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Bottom Footer */}
          <div className="border-t border-secondary-700 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <StaggerItem>
                <p className="text-xs sm:text-sm text-secondary-400">
                  © 2024 EntSysMonitor. All rights reserved.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  {/* Social Links */}
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-secondary-700 transition-colors duration-200"
                      >
                        <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-300 hover:text-white transition-colors duration-200" />
                      </motion.a>
                    ))}
                  </div>

                  {/* Legal Links */}
                  <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
                    {footerLinks.legal.slice(0, 3).map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-secondary-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            </div>
          </div>
        </StaggerContainer>
      </div>
    </footer>
  );
};

export default Footer; 