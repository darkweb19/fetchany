'use client'

import { motion } from 'framer-motion'
import { Link, Database, Table } from 'lucide-react'

const steps = [
  {
    icon: <Link className="w-12 h-12 text-blue-500" />,
    title: "Connect",
    description: "Simply provide your database URL to Fetchify."
  },
  {
    icon: <Database className="w-12 h-12 text-blue-500" />,
    title: "Fetch",
    description: "Fetchify securely connects and retrieves your data."
  },
  {
    icon: <Table className="w-12 h-12 text-blue-500" />,
    title: "Visualize",
    description: "Your data is instantly displayed in intuitive table forms."
  }
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How Fetchify Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

