import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { StaggerContainer, StaggerItem, HoverScale } from './AnimatedComponents';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch with our support team',
      value: 'info@eloiconsulting.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our sales team',
      value: '+44 787 650 0946',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our headquarters',
      value: 'Headquarters, 2-4 Dalkeith Street, Barrow-In-Furness Cumbria, England, LA14 1SP, UK',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const formFields = [
    { name: 'name', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email Address', type: 'email', required: true },
    { name: 'company', label: 'Company', type: 'text', required: false },
    { name: 'message', label: 'Message', type: 'textarea', required: true }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <StaggerItem>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Get in Touch
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto px-4 sm:px-0">
              Ready to transform your monitoring strategy? Our team is here to help you 
              get started and answer any questions you might have.
            </p>
          </StaggerItem>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div>
            <StaggerItem>
              <div className="bg-white dark:bg-secondary-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 dark:border-secondary-700">
                <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white">
                      Send us a Message
                    </h3>
                    <p className="text-sm sm:text-base text-secondary-600 dark:text-secondary-400">
                      We'll get back to you within 24 hours
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {formFields.map((field, index) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          required={field.required}
                          rows={4}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-secondary-400 transition-colors duration-200 text-sm sm:text-base"
                          placeholder={`Enter your ${field.label.toLowerCase()}`}
                        />
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          required={field.required}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-secondary-400 transition-colors duration-200 text-sm sm:text-base"
                          placeholder={`Enter your ${field.label.toLowerCase()}`}
                        />
                      )}
                    </motion.div>
                  ))}

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 animate-pulse"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </StaggerItem>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Cards */}
            <StaggerContainer>
              {contactInfo.map((info, index) => (
                <StaggerItem key={info.title}>
                  <HoverScale scale={1.02}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="bg-white dark:bg-secondary-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-secondary-700"
                    >
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-base sm:text-lg font-semibold text-secondary-900 dark:text-white mb-1">
                            {info.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-400 mb-2">
                            {info.description}
                          </p>
                          <p className="text-sm sm:text-base text-primary-600 dark:text-primary-400 font-medium break-all">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </HoverScale>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Response Time */}
            <StaggerItem>
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-6 sm:p-8 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">Fast Response Time</h4>
                    <p className="text-sm sm:text-base text-white/80">We typically respond within 2 hours</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-white/60">Support Hours</p>
                    <p className="font-semibold">24/7 Available</p>
                  </div>
                  <div>
                    <p className="text-white/60">Response Time</p>
                    <p className="font-semibold">2-4 hours</p>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* FAQ Preview */}
            <StaggerItem>
              <div className="bg-white dark:bg-secondary-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-secondary-700">
                <h4 className="text-base sm:text-lg font-semibold text-secondary-900 dark:text-white mb-3 sm:mb-4">
                  Frequently Asked Questions
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    'How quickly can I get started?',
                    'What kind of support do you offer?',
                    'Can I integrate with my existing tools?'
                  ].map((question, index) => (
                    <motion.div
                      key={question}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 cursor-pointer transition-colors duration-200"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                      <span className="truncate">{question}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="mt-3 sm:mt-4 text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 text-sm sm:text-base"
                >
                  View All FAQs →
                </motion.button>
              </div>
            </StaggerItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 