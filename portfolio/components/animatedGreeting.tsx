'use client'

import { useState, useEffect } from 'react'

const greetings = [
  { text: "Hello", font: "font-sans" },
  { text: "مرحباً", font: "font-arabic" },
  { text: "Bonjour", font: "font-sans" }
]

export function AnimatedGreeting() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      
      setTimeout(() => {
        setIndex((current) => (current + 1) % greetings.length)
        setFade(true)
      }, 500) 
      
    }, 2500) 

    return () => clearInterval(interval)
  }, [])

  return (
    // 1. We added this outer span to lock the width and height permanently.
    // 2. inline-flex and items-center keep the text perfectly vertically centered.
    <span className="inline-flex items-center min-w-[220px] h-[1.6em]">
      
      {/* The inner span just handles the fade animation and font swapping now */}
      <span 
        className={`transition-opacity duration-500 leading-none ${
          fade ? 'opacity-100' : 'opacity-0'
        } ${greetings[index].font}`}
      >
        {greetings[index].text}
      </span>
      
    </span>
  )
}