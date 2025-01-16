'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Simplify Your Database Management with Fetchify?
        </motion.h2>
        <motion.p 
          className="text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Start populating and visualizing your database content in minutes with Fetchify.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 transition-colors"
          >
            Get Started with Fetchify
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

