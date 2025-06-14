"use client"

import { useEffect, useState } from "react"

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0)
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY
      setIsScrollingDown(currentScrollY > lastScrollY)
      setScrollY(currentScrollY)
      lastScrollY = currentScrollY
    }

    const throttledUpdateScrollDirection = throttle(updateScrollDirection, 100)

    window.addEventListener("scroll", throttledUpdateScrollDirection)

    return () => {
      window.removeEventListener("scroll", throttledUpdateScrollDirection)
    }
  }, [])

  return { scrollY, isScrollingDown }
}

function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
