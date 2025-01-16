'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for small projects and individual developers',
    features: ['Up to 5 databases', '1,000 queries per day', 'Basic visualizations', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$99',
    description: 'Ideal for growing teams and businesses',
    features: ['Up to 20 databases', '10,000 queries per day', 'Advanced visualizations', 'Priority email support', 'API access'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale applications and organizations',
    features: ['Unlimited databases', 'Unlimited queries', 'Custom visualizations', '24/7 phone support', 'Dedicated account manager', 'On-premise deployment option'],
  },
]

export default function PricingPlans() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Choose the Right Plan for You
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-4xl font-bold mb-6">{plan.price}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Choose {plan.name}</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

