"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star, CheckCircle, Calendar, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  id: number
  name: string
  role: string
  company?: string
  image: string
  rating: number
  date: string
  text: string
  documentType: string
  verified?: boolean
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Healthcare Professional",
    company: "Memorial Hospital",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    date: "May 12, 2023",
    text: "I used to spend hours trying to understand medical reports. HOOH breaks everything down in seconds. It's like having a doctor explain things in plain English. The color-coded summaries make it easy to focus on what matters most.",
    documentType: "Medical Reports",
    verified: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Small Business Owner",
    company: "Chen Enterprises",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    date: "April 3, 2023",
    text: "As a small business owner, legal contracts used to give me anxiety. HOOH has been a game-changer. It highlights important clauses and explains the implications in simple terms. I've saved thousands on legal fees and feel confident in my business decisions.",
    documentType: "Legal Contracts",
    verified: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Financial Analyst",
    company: "Global Investments",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    date: "June 20, 2023",
    text: "HOOH helps me process financial statements in record time. What used to take hours now takes minutes. The color-coded summaries make it easy to spot trends and anomalies. My productivity has increased by at least 40% since I started using HOOH.",
    documentType: "Financial Statements",
    verified: true,
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Travel Enthusiast",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    date: "March 15, 2023",
    text: "International travel comes with so much paperwork. HOOH has been my travel companion, helping me understand visa requirements, travel insurance, and booking confirmations. I can focus on enjoying my trips instead of stressing about documents.",
    documentType: "Travel Documents",
    verified: true,
  },
  {
    id: 5,
    name: "Jennifer Lee",
    role: "Insurance Agent",
    company: "Secure Insurance Co.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    date: "May 28, 2023",
    text: "I use HOOH daily to help my clients understand their insurance policies. It translates complex policy language into clear, actionable insights. My clients love it, and it's helped me build trust and close more deals. Absolutely essential for my business.",
    documentType: "Insurance Policies",
    verified: true,
  },
]

export function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isAutoPlaying) return

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setDirection(1)
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 8000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isAutoPlaying, activeIndex])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setDirection(-1)
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setDirection(1)
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false)
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
  }

  return (
    <div className="relative overflow-hidden bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="absolute top-4 right-4 z-30">
        <Badge variant="outline" className="bg-violet-50 border-violet-200 text-violet-700 font-medium px-3 py-1">
          Verified Reviews
        </Badge>
      </div>

      <div className="relative min-h-[500px] md:min-h-[400px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 p-6 md:p-8 flex flex-col z-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
              {/* Left column - User info */}
              <div className="md:border-r border-gray-100 pr-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-full bg-violet-100 flex items-center justify-center overflow-hidden border-2 border-violet-200">
                      <img
                        src={testimonials[activeIndex].image || "/placeholder.svg"}
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {testimonials[activeIndex].verified && (
                      <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                    )}
                  </div>

                  <h3 className="font-bold text-lg text-gray-800">{testimonials[activeIndex].name}</h3>
                  <p className="text-sm text-gray-600">{testimonials[activeIndex].role}</p>
                  {testimonials[activeIndex].company && (
                    <p className="text-sm text-gray-500">{testimonials[activeIndex].company}</p>
                  )}

                  <div className="mt-4 flex items-center justify-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonials[activeIndex].rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-2">
                    <div className="flex items-center justify-center text-xs text-gray-500 gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{testimonials[activeIndex].date}</span>
                    </div>
                    <div className="flex items-center justify-center text-xs text-gray-500 gap-1">
                      <FileText className="h-3 w-3" />
                      <span>{testimonials[activeIndex].documentType}</span>
                    </div>
                  </div>

                  <div className="mt-6 hidden md:block">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-violet-600 border-violet-200 hover:bg-violet-50"
                    >
                      View Full Review
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right column - Testimonial */}
              <div className="md:col-span-2 flex flex-col">
                <div className="relative">
                  <blockquote className="pt-6 text-lg text-gray-700 italic">
                    {testimonials[activeIndex].text}
                  </blockquote>
                </div>

                <div className="mt-6 bg-violet-50 rounded-lg p-4 border border-violet-100">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-violet-200 flex items-center justify-center">
                        <FileText className="h-4 w-4 text-violet-700" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-violet-800 mb-1">
                        How HOOH helped with {testimonials[activeIndex].documentType}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonials[activeIndex].documentType === "Medical Reports" &&
                          "Simplified complex medical terminology, highlighted key health indicators, and provided plain-language explanations of test results."}
                        {testimonials[activeIndex].documentType === "Legal Contracts" &&
                          "Identified critical clauses, explained legal jargon in simple terms, and highlighted potential obligations and liabilities."}
                        {testimonials[activeIndex].documentType === "Financial Statements" &&
                          "Summarized key financial metrics, explained accounting terminology, and highlighted important trends and anomalies."}
                        {testimonials[activeIndex].documentType === "Travel Documents" &&
                          "Clarified visa requirements, explained travel insurance coverage, and simplified complex booking terms and conditions."}
                        {testimonials[activeIndex].documentType === "Insurance Policies" &&
                          "Explained coverage details, highlighted exclusions and limitations, and clarified claim procedures in simple language."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full border-2 border-white bg-violet-100 flex items-center justify-center text-xs font-bold text-violet-700"
                        >
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">+2,300 verified reviews</span>
                  </div>

                  <Button className="bg-violet-600 hover:bg-violet-700 hidden md:flex">Try HOOH Now</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex ? "bg-violet-600 w-6" : "bg-violet-200"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-2 shadow-md transition-all border border-gray-100 z-20"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5 text-violet-700" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-2 shadow-md transition-all border border-gray-100 z-20"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5 text-violet-700" />
      </button>
    </div>
  )
}
