"use client"

import Link from "next/link"
import {
  ArrowRight,
  Shield,
  Globe,
  Zap,
  MessageSquare,
  FileText,
  Plane,
  FileCheck,
  Upload,
  LockKeyhole,
  Star,
  CheckCircle,
  Award,
  Brain,
  Clock,
  Sparkles,
  Layers,
  Lock,
  Languages,
  Lightbulb,
  Wand2,
  Rocket,
  Cpu,
  Eye,
  Scan,
  Bookmark,
  Repeat,
  Gauge,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { TrustScore } from "@/components/trust-score"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="rounded-full bg-gradient-to-r from-violet-500 to-violet-300 w-8 h-8 flex items-center justify-center text-white">
              H
            </div>
            HOOH
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#why-hooh" className="text-sm font-medium hover:underline underline-offset-4">
              Why HOOH
            </Link>
            <Link href="#reviews" className="text-sm font-medium hover:underline underline-offset-4">
              Reviews
            </Link>
            <Link href="#trust" className="text-sm font-medium hover:underline underline-offset-4">
              Trust & Legal
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Log in
            </Button>
            <Button size="sm">Try HOOH Now</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section with Direct Upload CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-violet-100 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div
                  className="inline-block rounded-lg px-3 py-1 text-sm font-medium"
                  style={{
                    backgroundColor: "#D3D4FB",
                    color: "#5B5EAA",
                  }}
                >
                  Document Assistant
                </div>

                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  <span style={{ color: "#979AF6" }}>Instantly Understand</span> Any Document
                </h1>
                <p className="text-xl text-gray-700 md:text-2xl/relaxed">
                  HOOH transforms complex documents into plain English in seconds.
                </p>

                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-600"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="font-medium">Medical reports in plain language</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-600"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="font-medium">Legal contracts without the jargon</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-600"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="font-medium">Financial statements made simple</span>
                  </li>
                </ul>
              </div>

              {/* Direct Upload Form */}
              <div className="relative">
                <div className="absolute -top-6 -right-6 bg-yellow-300 text-yellow-800 text-sm font-bold px-4 py-1 rounded-full shadow-lg transform rotate-6 z-10">
                  FREE • No Sign-up Required
                </div>
                <div className="bg-white rounded-xl shadow-xl border-2 border-violet-200 p-6 md:p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Upload Your Document</h2>
                    <p className="text-gray-600">Get instant clarity in seconds</p>
                  </div>

                  <div className="border-2 border-dashed border-violet-300 rounded-lg p-8 bg-violet-50 mb-6 text-center cursor-pointer hover:bg-violet-100 transition-colors">
                    <div className="flex flex-col items-center justify-center">
                      <Upload className="h-12 w-12 mb-4" style={{ color: "#979AF6" }} />

                      <p className="font-medium text-gray-700 mb-1">Drag & drop your file here</p>
                      <p className="text-sm text-gray-500 mb-4">or</p>
                      <Button
                        style={{
                          backgroundColor: "#979AF6",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#7b7ede")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#979AF6")}
                      >
                        Browse Files
                      </Button>

                      <p className="text-xs text-gray-500 mt-4">Supports PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button
                      style={{
                        backgroundColor: "#979AF6",
                      }}
                      className="w-full bg-violet-600 hover:bg-violet-700 text-lg py-6 font-bold"
                    >
                      Understand My Document Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <Shield className="h-4 w-4" />
                      <span>Your document is secure and private</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex -space-x-2">
                        <div
                          className="w-8 h-8 rounded-full border-2 border-white"
                          style={{ backgroundColor: "#D3D4FB" }} // светлый
                        ></div>
                        <div
                          className="w-8 h-8 rounded-full border-2 border-white"
                          style={{ backgroundColor: "#979AF6" }} // оригинальный
                        ></div>
                        <div
                          className="w-8 h-8 rounded-full border-2 border-white"
                          style={{ backgroundColor: "#6D70D1" }} // тёмный
                        ></div>
                      </div>
                      <p className="text-sm font-medium text-gray-600">10,000+ users this month</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">4.9/5</span> from 2,300+ reviews
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-green-100 text-green-800 text-sm font-bold px-4 py-2 rounded-lg shadow-md z-10">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-5 h-5 bg-green-500 rounded-full text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span>Results in 5 seconds or less</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                <div className="flex items-center justify-center gap-2">
                  <Shield className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600">Bank-level security</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Zap className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600">Instant results</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Globe className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600">Works with any document</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600">24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Score Section - NEW */}
        <section className="w-full py-8 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <TrustScore />
            </div>
          </div>
        </section>

        {/* How It Works - Redesigned */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Badge variant="outline" className="border-violet-200 bg-violet-50 text-violet-700">
                  Simple Process
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How HOOH Works</h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Transform any complex document into clear, actionable insights in three simple steps
                </p>
              </div>
            </div>

            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-100 text-violet-700 font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">Upload Any Document</h3>
                  <p className="text-gray-600">
                    Simply drag and drop your document or take a photo. HOOH accepts medical reports, legal contracts,
                    financial statements, and more in various formats (PDF, DOC, JPG).
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-600"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">No account required</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-600"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">Secure, encrypted transfer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-600"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">Support for 20+ file formats</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative bg-white rounded-xl shadow-lg p-6 border border-violet-100">
                  <div className="absolute -top-3 -right-3 bg-violet-100 text-violet-700 text-xs font-bold px-3 py-1 rounded-full">
                    Step 1
                  </div>
                  <div className="border-2 border-dashed border-violet-200 rounded-lg p-8 bg-violet-50 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Upload className="h-16 w-16 mb-4 text-violet-500" />
                      <p className="font-medium text-gray-700 mb-2">Drag & drop your document here</p>
                      <p className="text-sm text-gray-500 mb-4">or</p>
                      <Button className="bg-violet-600 hover:bg-violet-700">Browse Files</Button>
                      <div className="mt-6 flex flex-wrap justify-center gap-2">
                        <Badge variant="outline" className="bg-white">
                          PDF
                        </Badge>
                        <Badge variant="outline" className="bg-white">
                          DOC
                        </Badge>
                        <Badge variant="outline" className="bg-white">
                          DOCX
                        </Badge>
                        <Badge variant="outline" className="bg-white">
                          JPG
                        </Badge>
                        <Badge variant="outline" className="bg-white">
                          PNG
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="relative bg-white rounded-xl shadow-lg p-6 border border-violet-100">
                  <div className="absolute -top-3 -right-3 bg-violet-100 text-violet-700 text-xs font-bold px-3 py-1 rounded-full">
                    Step 2
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-violet-600 w-8 h-8 flex items-center justify-center text-white font-bold">
                          H
                        </div>
                        <span className="font-bold">HOOH Processing</span>
                      </div>
                      <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">5 seconds</div>
                    </div>

                    <div className="space-y-3">
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-violet-500 rounded-full"></div>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <div className="flex flex-col items-center p-3 bg-violet-50 rounded-lg">
                          <FileText className="h-6 w-6 text-violet-600 mb-2" />
                          <span className="text-xs text-center text-gray-600">Document Analysis</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-violet-50 rounded-lg">
                          <MessageSquare className="h-6 w-6 text-violet-600 mb-2" />
                          <span className="text-xs text-center text-gray-600">Language Processing</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-violet-50 rounded-lg">
                          <Zap className="h-6 w-6 text-violet-600 mb-2" />
                          <span className="text-xs text-center text-gray-600">Insight Generation</span>
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="flex items-start gap-3">
                          <div className="animate-pulse flex space-x-4 w-full">
                            <div className="flex-1 space-y-2 py-1">
                              <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                              <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                              <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-100 text-violet-700 font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-2xl font-bold">Intelligent Processing</h3>
                  <p className="text-gray-600">
                    HOOH's advanced AI analyzes your document in seconds, identifying key information, complex
                    terminology, and important details that matter to you.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-600"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">5-second processing time</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-600"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">Understands technical jargon</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-600"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">Works in 30+ languages</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-100 text-violet-700 font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-2xl font-bold">Get Clear Results</h3>
                  <p className="text-gray-600">
                    Receive a complete breakdown of your document in plain language. HOOH highlights what's important,
                    explains complex terms, and gives you actionable insights.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-600"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">Color-coded summaries</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-600"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">Plain language explanations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-600"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">Downloadable reports</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Button className="bg-violet-600 hover:bg-violet-700">
                      Try It Now - It's Free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative bg-white rounded-xl shadow-lg p-6 border border-violet-100">
                  <div className="absolute -top-3 -right-3 bg-violet-100 text-violet-700 text-xs font-bold px-3 py-1 rounded-full">
                    Step 3
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-violet-600 w-8 h-8 flex items-center justify-center text-white font-bold">
                          H
                        </div>
                        <span className="font-bold">Document Summary</span>
                      </div>
                      <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                        Medical Report
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-4">
                      <div className="text-green-800 font-medium mb-2">Overall Assessment</div>
                      <div className="text-sm text-gray-600">
                        Your blood test results are within normal ranges. No concerning values detected.
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 mb-4">
                      <div className="text-gray-800 font-medium mb-2">Key Points</div>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-violet-100 p-1 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-violet-600"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </div>
                          <span>Cholesterol: 180 mg/dL (Normal range: 125-200)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-violet-100 p-1 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-violet-600"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </div>
                          <span>Blood pressure: 120/80 (Optimal)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-violet-100 p-1 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-violet-600"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </div>
                          <span>Next check-up recommended in 12 months</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                      <div className="text-yellow-800 font-medium mb-2">Terms Explained</div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">HDL:</span> "Good" cholesterol that helps remove other forms of
                        cholesterol from your bloodstream.
                      </div>
                    </div>

                    <div className="flex justify-between mt-4">
                      <Button variant="outline" size="sm" className="text-xs">
                        Download PDF
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        Share Results
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section - NEW */}
        <section id="reviews" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Badge variant="outline" className="border-violet-200 bg-violet-50 text-violet-700">
                  User Experiences
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied users who have transformed how they understand documents
                </p>
              </div>
            </div>

            <div className="max-w-5xl mx-auto mb-16">
              <TestimonialSlider />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">97% Satisfaction</h3>
                <p className="text-gray-600">
                  97% of our users report being "very satisfied" or "extremely satisfied" with HOOH's document clarity.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">4.9/5 Average Rating</h3>
                <p className="text-gray-600">
                  Based on 2,347 verified reviews across multiple platforms and document categories.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-violet-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Award-Winning</h3>
                <p className="text-gray-600">
                  Recognized as "Best Document Assistant" by TechReview and "Most Innovative AI Tool" in 2023.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                Join Our Satisfied Users
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Why HOOH - Completely Redesigned with Visual Variety */}
        <section
          id="why-hooh"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-violet-50 via-white to-blue-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center justify-center p-1 px-3 rounded-full bg-violet-600 text-white text-sm font-medium mb-2">
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                <span>Powerful Features</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-violet-700 via-violet-600 to-violet-500">
                Why Choose HOOH
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
                Experience document understanding reimagined with our powerful AI technology
              </p>
            </div>

            {/* Feature Showcase - Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Feature 1 - Large Card */}
              <div className="lg:col-span-2 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl group">
                <div className="p-8 text-white h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-none">
                      <Cpu className="h-3 w-3 mr-1" /> AI-Powered
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Advanced AI Understanding</h3>
                  <p className="text-white/80 mb-6">
                    Our state-of-the-art AI comprehends context, technical terminology, and document structure to
                    provide accurate insights that matter to you.
                  </p>
                  <div className="mt-auto grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 transform transition-all duration-300 group-hover:translate-y-[-5px]">
                      <div className="flex items-center gap-2 mb-1">
                        <Wand2 className="h-4 w-4 text-yellow-300" />
                        <span className="text-sm font-medium text-white">Smart Analysis</span>
                      </div>
                      <p className="text-xs text-white/70">Identifies key information automatically</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 transform transition-all duration-300 group-hover:translate-y-[-5px] group-hover:delay-100">
                      <div className="flex items-center gap-2 mb-1">
                        <Rocket className="h-4 w-4 text-yellow-300" />
                        <span className="text-sm font-medium text-white">Contextual AI</span>
                      </div>
                      <p className="text-xs text-white/70">Understands document purpose and context</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 - Speed Card */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-2 bg-yellow-400"></div>
                <div className="p-6">
                  <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center mb-4 shadow-md">
                    <Gauge className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Lightning-Fast Results</h3>
                  <p className="text-gray-600 mb-4">
                    Get comprehensive document analysis in seconds, not minutes or hours.
                  </p>
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Processing Time</span>
                      <span className="text-sm font-bold text-yellow-600">5 seconds</span>
                    </div>
                    <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-[20%] bg-yellow-400 rounded-full"></div>
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-gray-500">
                      <span>0s</span>
                      <span>10s</span>
                      <span>20s</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-yellow-700 font-medium">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Faster than 98% of competitors</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Feature Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Feature 3 - Language Card */}
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-2 bg-emerald-400"></div>
                <div className="p-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-400 flex items-center justify-center mb-4 shadow-md">
                    <MessageSquare className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Plain Language Clarity</h3>
                  <p className="text-gray-600 mb-4">
                    Complex documents translated into clear, simple language that anyone can understand.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="rounded-full bg-emerald-100 p-1 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-emerald-600" />
                      </div>
                      <span className="text-sm text-gray-600">Medical terminology simplified</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="rounded-full bg-emerald-100 p-1 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-emerald-600" />
                      </div>
                      <span className="text-sm text-gray-600">Legal jargon explained</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="rounded-full bg-emerald-100 p-1 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-emerald-600" />
                      </div>
                      <span className="text-sm text-gray-600">Financial terms decoded</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 4 - Security Card */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-2 bg-blue-500"></div>
                <div className="p-6">
                  <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center mb-4 shadow-md">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Bank-Level Security</h3>
                  <p className="text-gray-600 mb-4">
                    Your documents are protected with enterprise-grade encryption and security protocols.
                  </p>
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">Security Features</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">End-to-end encryption</span>
                        <Badge className="bg-blue-100 text-blue-700 border-none">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">GDPR compliance</span>
                        <Badge className="bg-blue-100 text-blue-700 border-none">Certified</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">Data retention</span>
                        <Badge className="bg-blue-100 text-blue-700 border-none">24 hours</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 5 - Multilingual Card */}
              <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-2 bg-purple-500"></div>
                <div className="p-6">
                  <div className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center mb-4 shadow-md">
                    <Globe className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Multilingual Support</h3>
                  <p className="text-gray-600 mb-4">
                    Process documents in multiple languages with the same level of accuracy and clarity.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["English", "Spanish", "French", "German", "Chinese", "Japanese"].map((lang) => (
                      <Badge key={lang} className="bg-purple-100 text-purple-700 border-none">
                        {lang}
                      </Badge>
                    ))}
                    <Badge className="bg-purple-100 text-purple-700 border-none">+24 more</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-purple-700 font-medium">
                    <Languages className="h-4 w-4" />
                    <span className="text-sm">30+ languages supported</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Feature Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Feature 6 - Document Support */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-lg bg-violet-100 flex items-center justify-center">
                      <Layers className="h-7 w-7 text-violet-600" />
                    </div>
                    <Badge className="bg-violet-100 text-violet-700 border-none">
                      <FileText className="h-3 w-3 mr-1" /> All Formats
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Universal Document Support</h3>
                  <p className="text-gray-600 mb-4">
                    Works with virtually any document type, from medical reports to legal contracts and beyond.
                  </p>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <FileText className="h-5 w-5 text-violet-600 mx-auto mb-1" />
                      <span className="text-xs text-gray-600">PDF</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <FileText className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                      <span className="text-xs text-gray-600">DOC</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <FileText className="h-5 w-5 text-green-600 mx-auto mb-1" />
                      <span className="text-xs text-gray-600">XLS</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <FileText className="h-5 w-5 text-yellow-600 mx-auto mb-1" />
                      <span className="text-xs text-gray-600">JPG</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <FileText className="h-5 w-5 text-red-600 mx-auto mb-1" />
                      <span className="text-xs text-gray-600">PNG</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <FileText className="h-5 w-5 text-gray-600 mx-auto mb-1" />
                      <span className="text-xs text-gray-600">+15</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-violet-700 font-medium">
                    <Scan className="h-4 w-4" />
                    <span className="text-sm">Scanned documents supported</span>
                  </div>
                </div>
              </div>

              {/* Feature 7 - Smart Features */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-lg bg-violet-100 flex items-center justify-center">
                      <Lightbulb className="h-7 w-7 text-violet-600" />
                    </div>
                    <Badge className="bg-violet-100 text-violet-700 border-none">
                      <Sparkles className="h-3 w-3 mr-1" /> Smart Features
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Intelligent Document Analysis</h3>
                  <p className="text-gray-600 mb-4">
                    HOOH doesn't just read your documents—it understands them, highlighting what matters most.
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
                        <Eye className="h-4 w-4 text-violet-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Key Information Extraction</h4>
                        <p className="text-xs text-gray-500">Automatically identifies important details</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
                        <Bookmark className="h-4 w-4 text-violet-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Important Terms Highlighted</h4>
                        <p className="text-xs text-gray-500">Critical clauses and terms emphasized</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
                        <Repeat className="h-4 w-4 text-violet-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Continuous Learning</h4>
                        <p className="text-xs text-gray-500">Gets smarter with each document processed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Highlight - Bottom Banner */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              {/* Background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-violet-600 to-purple-700"></div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
              <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-emerald-300/20 rounded-full blur-xl"></div>

              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#smallGrid)" />
                </svg>
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                {/* Left side content */}
                <div className="text-white">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
                    <Sparkles className="h-3.5 w-3.5 mr-2 text-yellow-300" />
                    <span>Featured Capability</span>
                  </div>

                  <h3 className="text-3xl font-bold mb-4 text-white">Transform How You Understand Documents</h3>

                  <p className="text-white/90 text-lg mb-8 leading-relaxed">
                    HOOH makes complex information instantly accessible, helping you make better decisions faster
                    without getting lost in technical jargon.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-white hover:bg-white/90 text-violet-700 font-medium shadow-lg hover:shadow-xl transition-all">
                      Try HOOH Now - It's Free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                    >
                      See How It Works
                    </Button>
                  </div>
                </div>

                {/* Right side - Document preview */}
                <div className="flex justify-center">
                  <div className="relative max-w-sm w-full perspective-1000">
                    {/* Card 1 - Front */}
                    <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 shadow-2xl transform transition-all duration-500 hover:rotate-y-5 hover:-translate-y-2">
                      {/* Card header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-lg">
                            <FileText className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-white">Legal Contract</div>
                            <div className="text-xs text-slate-400">Analyzed with HOOH</div>
                          </div>
                        </div>
                        <div className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-medium rounded-full border border-emerald-500/30">
                          Completed
                        </div>
                      </div>

                      {/* Card content */}
                      <div className="space-y-4">
                        {/* Summary section */}
                        <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                          <div className="flex items-center gap-2 mb-2">
                            <Lightbulb className="h-4 w-4 text-yellow-400" />
                            <div className="text-sm font-medium text-white">Key Summary</div>
                          </div>
                          <p className="text-sm text-slate-300">
                            Software licensing agreement with 12-month term, $5,000 monthly fee, and 30-day termination
                            clause.
                          </p>
                        </div>

                        {/* Important clauses */}
                        <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                          <div className="flex items-center gap-2 mb-3">
                            <Shield className="h-4 w-4 text-blue-400" />
                            <div className="text-sm font-medium text-white">Important Clauses</div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-start gap-2 bg-slate-700/40 p-2 rounded-md border-l-2 border-yellow-500">
                              <CheckCircle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-xs font-medium text-white">Liability Limitation</div>
                                <div className="text-xs text-slate-400">Page 7, Section 12.3</div>
                              </div>
                            </div>

                            <div className="flex items-start gap-2 bg-slate-700/40 p-2 rounded-md border-l-2 border-red-500">
                              <CheckCircle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-xs font-medium text-white">Early Termination Fee</div>
                                <div className="text-xs text-slate-400">Page 4, Section 8.2</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full bg-blue-500 border border-slate-800"></div>
                            <div className="w-6 h-6 rounded-full bg-violet-500 border border-slate-800"></div>
                            <div className="w-6 h-6 rounded-full bg-emerald-500 border border-slate-800"></div>
                          </div>
                          <div className="text-xs text-slate-400">
                            <span className="text-white font-medium">98%</span> clarity score
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="use-cases" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="border-violet-200 bg-violet-50 text-violet-700">
                  Applications
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Use Cases</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  HOOH works with all types of documents
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Tabs defaultValue="medical" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                  <TabsTrigger
                    value="medical"
                    className="data-[state=active]:bg-violet-100 data-[state=active]:text-violet-900"
                  >
                    Medical
                  </TabsTrigger>
                  <TabsTrigger
                    value="travel"
                    className="data-[state=active]:bg-violet-100 data-[state=active]:text-violet-900"
                  >
                    Travel
                  </TabsTrigger>
                  <TabsTrigger
                    value="insurance"
                    className="data-[state=active]:bg-violet-100 data-[state=active]:text-violet-900"
                  >
                    Insurance
                  </TabsTrigger>
                  <TabsTrigger
                    value="contracts"
                    className="data-[state=active]:bg-violet-100 data-[state=active]:text-violet-900"
                  >
                    Contracts
                  </TabsTrigger>
                  <TabsTrigger
                    value="receipts"
                    className="data-[state=active]:bg-violet-100 data-[state=active]:text-violet-900"
                  >
                    Receipts
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="medical" className="mt-6 space-y-4">
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-100">
                        <FileText className="h-6 w-6 text-violet-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Medical Documents</h3>
                        <p className="text-muted-foreground">
                          Understand lab results, medical bills, insurance claims, and doctor's notes without the
                          medical jargon.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge variant="secondary">Lab Results</Badge>
                          <Badge variant="secondary">Medical Bills</Badge>
                          <Badge variant="secondary">Insurance Claims</Badge>
                          <Badge variant="secondary">Doctor's Notes</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="travel" className="mt-6 space-y-4">
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-100">
                        <Plane className="h-6 w-6 text-violet-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Travel Documents</h3>
                        <p className="text-muted-foreground">
                          Decode flight itineraries, hotel bookings, travel insurance, and visa requirements with ease.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge variant="secondary">Flight Itineraries</Badge>
                          <Badge variant="secondary">Hotel Bookings</Badge>
                          <Badge variant="secondary">Travel Insurance</Badge>
                          <Badge variant="secondary">Visa Requirements</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="insurance" className="mt-6 space-y-4">
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-100">
                        <Shield className="h-6 w-6 text-violet-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Insurance Documents</h3>
                        <p className="text-muted-foreground">
                          Clarify policy details, coverage limits, exclusions, and claims processes from complex
                          insurance documents.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge variant="secondary">Policy Details</Badge>
                          <Badge variant="secondary">Coverage Limits</Badge>
                          <Badge variant="secondary">Exclusions</Badge>
                          <Badge variant="secondary">Claims Process</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="contracts" className="mt-6 space-y-4">
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-100">
                        <FileCheck className="h-6 w-6 text-violet-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Contracts</h3>
                        <p className="text-muted-foreground">
                          Understand legal agreements, terms of service, employment contracts, and rental agreements
                          without a law degree.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge variant="secondary">Legal Agreements</Badge>
                          <Badge variant="secondary">Terms of Service</Badge>
                          <Badge variant="secondary">Employment Contracts</Badge>
                          <Badge variant="secondary">Rental Agreements</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Trust & Legal */}
        <section id="trust" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="border-violet-200 bg-violet-50 text-violet-700">
                  Security
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trust & Legal</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your documents are safe with us
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-4">
              <Card className="border-transparent bg-white shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-100">
                    <LockKeyhole className="h-6 w-6 text-violet-700" />
                  </div>
                  <h3 className="text-lg font-bold">2FA Security</h3>
                  <p className="text-sm text-muted-foreground">Two-factor authentication for all accounts</p>
                </CardContent>
              </Card>
              <Card className="border-transparent bg-white shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-100">
                    <Shield className="h-6 w-6 text-violet-700" />
                  </div>
                  <h3 className="text-lg font-bold">User Consent</h3>
                  <p className="text-sm text-muted-foreground">Clear permissions for document processing</p>
                </CardContent>
              </Card>
              <Card className="border-transparent bg-white shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-100">
                    <FileCheck className="h-6 w-6 text-violet-700" />
                  </div>
                  <h3 className="text-lg font-bold">Not Medical Advice</h3>
                  <p className="text-sm text-muted-foreground">Insights are informational, not professional advice</p>
                </CardContent>
              </Card>
            </div>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground">
                HOOH uses bank-level encryption to protect your documents. We are GDPR-compliant and never share your
                data with third parties. Our summaries are for informational purposes only and should not be considered
                professional advice.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Try HOOH?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Upload your first document and experience the clarity
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                  Upload Your First Document
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-10">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="rounded-full bg-gradient-to-r from-violet-500 to-violet-300 w-8 h-8 flex items-center justify-center text-white">
              H
            </div>
            HOOH
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} HOOH. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
