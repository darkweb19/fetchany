'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What types of databases does Fetchify support?',
    answer: 'Fetchify supports a wide range of databases, including relational databases like MySQL, PostgreSQL, and SQLite, as well as NoSQL databases like MongoDB and Cassandra.'
  },
  {
    question: 'Is my data secure with Fetchify?',
    answer: 'Yes, security is our top priority. Fetchify uses industry-standard encryption protocols and never stores your actual database content. We only process the data you request to visualize.'
  },
  {
    question: 'Can I try Fetchify before purchasing?',
    answer: 'We offer a 14-day free trial for all our plans. You can explore all features and decide which plan suits you best without any commitment.'
  },
  {
    question: 'How often is Fetchify updated?',
    answer: 'We release updates and new features regularly, typically on a bi-weekly basis. All updates are automatically applied to our cloud-based solution, ensuring you always have access to the latest improvements.'
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={false}
              animate={{ backgroundColor: activeIndex === index ? 'rgb(243 244 246)' : 'rgb(255 255 255)' }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="p-4 text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

