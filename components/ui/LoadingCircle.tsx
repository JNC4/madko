'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface LoadingCircleProps {
  isLoading: boolean
  onLoadingComplete: () => void
}

const CIRCUMFERENCE = 2 * Math.PI * 45 // ≈ 282.74
const APPLE_EASING = [0.4, 0, 0.2, 1] as const

export default function LoadingCircle({ isLoading, onLoadingComplete }: LoadingCircleProps) {
  const [strokeDashoffset, setStrokeDashoffset] = useState(CIRCUMFERENCE)
  const [animationPhase, setAnimationPhase] = useState<'first-half' | 'pause' | 'second-half' | 'slide-up' | 'complete'>('first-half')

  useEffect(() => {
    if (!isLoading) return

    console.log('LoadingCircle: Starting animation')

    // Start first semicircle animation after a small delay
    const startTimer = setTimeout(() => {
      console.log('LoadingCircle: First semicircle')
      setStrokeDashoffset(CIRCUMFERENCE / 2)
    }, 100)

    // Pause: at 0.9s (0.1s delay + 0.8s animation)
    const pauseTimer = setTimeout(() => {
      console.log('LoadingCircle: Pause')
      setAnimationPhase('pause')
    }, 900)

    // Second semicircle: starts at 1.9s (0.9s + 1s pause)
    const secondHalfTimer = setTimeout(() => {
      console.log('LoadingCircle: Second semicircle')
      setAnimationPhase('second-half')
      setStrokeDashoffset(0)
    }, 1900)

    // Slide up: starts at 2.7s (1.9s + 0.8s animation)
    const slideUpTimer = setTimeout(() => {
      console.log('LoadingCircle: Slide up')
      setAnimationPhase('slide-up')
    }, 2700)

    // Complete: at 3.5s (2.7s + 0.8s slide-up)
    const completeTimer = setTimeout(() => {
      console.log('LoadingCircle: Complete')
      setAnimationPhase('complete')
      onLoadingComplete()
    }, 3500)

    return () => {
      clearTimeout(startTimer)
      clearTimeout(pauseTimer)
      clearTimeout(secondHalfTimer)
      clearTimeout(slideUpTimer)
      clearTimeout(completeTimer)
    }
  }, [isLoading, onLoadingComplete])

  if (!isLoading) {
    console.log('LoadingCircle: Not rendering, isLoading =', isLoading)
    return null
  }

  console.log('LoadingCircle: Rendering, phase =', animationPhase)

  return (
    <motion.div
      className="fixed inset-0 bg-white flex items-center justify-center"
      style={{
        zIndex: 9999,
        pointerEvents: animationPhase === 'slide-up' ? 'none' : 'auto'
      }}
      initial={{ y: 0 }}
      animate={{
        y: animationPhase === 'slide-up' ? '-100%' : 0
      }}
      transition={{
        duration: 0.8,
        ease: APPLE_EASING
      }}
    >
      <div className="relative">
        <svg width="100" height="100" viewBox="0 0 100 100">
          {/* Define gradient */}
          <defs>
            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9D8BAF" />
              <stop offset="50%" stopColor="#6B5B7A" />
              <stop offset="100%" stopColor="#C8B8DB" />
            </linearGradient>
          </defs>

          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#E6E0F0"
            strokeWidth="2"
            opacity="0.3"
          />

          {/* Animated circle - starts completely hidden */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#circleGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 50 50)"
            style={{
              transition: (animationPhase === 'first-half' || animationPhase === 'second-half')
                ? 'stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                : 'none'
            }}
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-cormorant font-bold text-2xl text-[#6B5B7A]">
            MK
          </span>
        </div>
      </div>
    </motion.div>
  )
}
