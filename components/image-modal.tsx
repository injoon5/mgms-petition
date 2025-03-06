"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface ImageModalProps {
  src: string
  onClose: () => void
}

export function ImageModal({ src, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEsc)

    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80" onClick={onClose}>
      <div
        className="relative max-w-[90vw] max-h-[90vh] rounded-lg overflow-hidden bg-white dark:bg-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 z-10 rounded-full bg-white dark:bg-neutral-800 p-2 text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>
        <div className="relative h-[80vh] w-[80vw]">
          <Image
            src={src || "/placeholder.svg"}
            alt="Enlarged image"
            fill
            className="object-contain"
            sizes="80vw"
            priority
          />
        </div>
      </div>
    </div>
  )
}

