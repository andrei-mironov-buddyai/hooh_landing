import { Star, Check, Award, Shield, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TrustScore() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch">
        {/* Left side - Rating */}
        <div className="flex flex-col items-center justify-center p-6 md:p-8 md:w-1/3 bg-white border-b md:border-b-0 md:border-r border-gray-100">
          <div className="relative mb-4">
            <div className="w-32 h-32 rounded-full bg-[#00b67a]/10 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-[#00b67a]/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#00b67a] flex items-center justify-center text-white">
                  <div className="text-3xl font-bold">4.9</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-2 top-0">

            </div>

          </div>

          <div className="flex items-center mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#00b67a] text-[#00b67a]" />
              ))}
            </div>
          </div>

          <div className="text-center mb-4">
            <div className="font-bold text-gray-800 text-lg">Excellent</div>
            <div className="text-sm text-gray-500">
              Based on <span className="font-semibold">2,347</span> reviews
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center">
            <div className="px-3 py-1 bg-[#00b67a]/10 rounded-full">
              <span className="text-xs font-medium text-[#00b67a]">Verified Trust Score</span>
            </div>
          </div>
        </div>

        {/* Right side - Stats and CTA */}
        <div className="p-6 md:p-8 md:w-2/3 bg-white">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00b67a]/10 mr-3">
                <Award className="h-5 w-5 text-[#00b67a]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Trusted by thousands</h3>
                <p className="text-sm text-gray-500">Join our satisfied customers</p>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="w-16 h-16 relative">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M32 4C38.3652 4 44.4697 6.52856 48.9706 11.0294C53.4714 15.5303 56 21.6348 56 28C56 34.3652 53.4714 40.4697 48.9706 44.9706C44.4697 49.4714 38.3652 52 32 52C25.6348 52 19.5303 49.4714 15.0294 44.9706C10.5286 40.4697 8 34.3652 8 28C8 21.6348 10.5286 15.5303 15.0294 11.0294C19.5303 6.52856 25.6348 4 32 4Z"
                    stroke="#00b67a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32 4C38 4 42 14 42 28C42 42 38 52 32 52C26 52 22 42 22 28C22 14 26 4 32 4Z"
                    stroke="#00b67a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M12 16H52" stroke="#00b67a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 40H52" stroke="#00b67a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="absolute -right-1 -top-1">
                  <div className="w-6 h-6 rounded-full bg-[#00b67a] flex items-center justify-center text-white text-xs font-bold">
                    #1
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00b67a]/10 mr-3">
                <Shield className="h-4 w-4 text-[#00b67a]" />
              </div>
              <div>
                <div className="text-sm font-medium">Verified Reviews</div>
                <div className="text-xs text-gray-500">100% authentic feedback</div>
              </div>
            </div>

            <div className="flex items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00b67a]/10 mr-3">
                <ThumbsUp className="h-4 w-4 text-[#00b67a]" />
              </div>
              <div>
                <div className="text-sm font-medium">97% Satisfaction</div>
                <div className="text-xs text-gray-500">From 2,347 verified users</div>
              </div>
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#00b67a] text-[#00b67a]" />
                  ))}
                </div>
                <span className="text-sm font-medium">Excellent</span>
              </div>
              <div className="flex items-center">
                <div className="w-32 h-2 bg-gray-200 rounded-full mr-2 overflow-hidden">
                  <div className="bg-[#00b67a] h-full w-[95%]"></div>
                </div>
                <span className="text-xs text-gray-500">95%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#73CF11] text-[#73CF11]" />
                  ))}
                  <Star className="h-4 w-4 text-gray-200" />
                </div>
                <span className="text-sm font-medium">Good</span>
              </div>
              <div className="flex items-center">
                <div className="w-32 h-2 bg-gray-200 rounded-full mr-2 overflow-hidden">
                  <div className="bg-[#73CF11] h-full w-[3%]"></div>
                </div>
                <span className="text-xs text-gray-500">3%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FFCE00] text-[#FFCE00]" />
                  ))}
                  {[...Array(2)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gray-200" />
                  ))}
                </div>
                <span className="text-sm font-medium">Average</span>
              </div>
              <div className="flex items-center">
                <div className="w-32 h-2 bg-gray-200 rounded-full mr-2 overflow-hidden">
                  <div className="bg-[#FFCE00] h-full w-[1%]"></div>
                </div>
                <span className="text-xs text-gray-500">1%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[...Array(2)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FF7139] text-[#FF7139]" />
                  ))}
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gray-200" />
                  ))}
                </div>
                <span className="text-sm font-medium">Poor</span>
              </div>
              <div className="flex items-center">
                <div className="w-32 h-2 bg-gray-200 rounded-full mr-2 overflow-hidden">
                  <div className="bg-[#FF7139] h-full w-[0.5%]"></div>
                </div>
                <span className="text-xs text-gray-500">0.5%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex mr-2">
                  <Star className="h-4 w-4 fill-[#FF0000] text-[#FF0000]" />
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gray-200" />
                  ))}
                </div>
                <span className="text-sm font-medium">Bad</span>
              </div>
              <div className="flex items-center">
                <div className="w-32 h-2 bg-gray-200 rounded-full mr-2 overflow-hidden">
                  <div className="bg-[#FF0000] h-full w-[0.5%]"></div>
                </div>
                <span className="text-xs text-gray-500">0.5%</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button className="bg-[#00b67a] hover:bg-[#00a06c] text-white w-full">Try HOOH Now - It's Free</Button>
            <Button variant="outline" className="border-[#00b67a] text-[#00b67a] hover:bg-[#00b67a]/10 w-full">
              Read Reviews
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom badges */}
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex flex-wrap gap-3 justify-center">
        {["Medical", "Legal", "Financial", "Insurance", "Travel"].map((category) => (
          <div
            key={category}
            className="flex items-center gap-1 text-xs bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm"
          >
            <Star className="h-3 w-3 fill-[#00b67a] text-[#00b67a]" />
            <span className="font-medium text-gray-700 ml-1">
              <span className="text-[#00b67a]">4.9</span> in {category}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
