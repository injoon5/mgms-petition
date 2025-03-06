"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageModal } from "@/components/image-modal"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    {
      src: "/2023 참가 희망 조사.png",
      alt: "2023 참가 희망 조사",
    },
    {
      src: "/2023 실시 방식.png",
      alt: "2023 실시 방식",
    },
  ]

  const posterImage = {
    src: "/Frame 1.png",
    alt: "2025학년도 숙박형 체험활동 포스터",
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <main className="container mx-auto px-4 py-8">
        {/* Removed ThemeToggle */}

        <header className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-normal text-neutral-500 dark:text-neutral-400">
            2025학년도 숙박형 체험활동
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mt-1">조사 기간을 연장해 주세요.</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <div className="relative aspect-[3/4] w-full mb-12 transition-transform duration-300 ease-in-out group-hover:scale-105">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-contain cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-800/70 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 select-none">
                  클릭하여 확대
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-6">
          <h3 className="text-xl font-medium">원본 포스터 보기</h3>
        </div>

        <div className="flex justify-center mb-16">
          <div className="relative group w-full max-w-xl">
            <div className="relative aspect-[1/1.4] w-full transition-transform duration-300 ease-in-out group-hover:scale-105">
              <Image
                src={posterImage.src || "/placeholder.svg"}
                alt={posterImage.alt}
                fill
                className="object-contain cursor-pointer"
                onClick={() => setSelectedImage(posterImage.src)}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-800/70 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 select-none">
                클릭하여 확대
              </div>
            </div>
          </div>
        </div>

        {selectedImage && (
          <ImageModal src={selectedImage || "/placeholder.svg"} onClose={() => setSelectedImage(null)} />
        )}
      </main>
    </ThemeProvider>
  )
}

