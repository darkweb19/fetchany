'use client'

import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    name: "Alex Johnson",
    role: "Database Administrator",
    content: "Fetchify has revolutionized our database management. It's incredibly fast and easy to use.",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "Sarah Lee",
    role: "Full Stack Developer",
    content: "I love how Fetchify works with any database. It's saved me countless hours of work.",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "Mike Chen",
    role: "CTO",
    content: "Fetchify's visualization capabilities have greatly improved our data analysis process.",
    avatar: "/placeholder.svg?height=40&width=40"
  }
]

export default function Reviews() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">"{review.content}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

