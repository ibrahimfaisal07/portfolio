'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React from 'react'

export default function TiltCard() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth springs so it doesn't instantly snap to the cursor
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  // Map mouse position to a rotation degree
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    // Get percentage (-0.5 to 0.5)
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    // Reset to flat when mouse leaves
    x.set(0)
    y.set(0)
  }

  return (
    <div 
      style={{ perspective: "1000px" }} 
      className="w-full aspect-square flex items-center justify-center p-4 md:p-8"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          rotateY, 
          rotateX, 
          transformStyle: "preserve-3d" 
        }}
        className="relative h-full w-full rounded-[2rem] glass-panel bg-[#0B131F]/80 flex items-center justify-center cursor-crosshair overflow-hidden"
      >
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>

        {/* Floating 3D Layer */}
        <div 
          style={{ transform: "translateZ(75px)" }} 
          className="relative flex items-center justify-center"
        >
          {/* Outer wireframe rings */}
          <div className="w-64 h-64 rounded-full border-[1px] border-blue-500/20 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.05)]">
            <div className="w-48 h-48 rounded-full border-[1px] border-blue-400/30 flex items-center justify-center backdrop-blur-md">
              
              {/* Your custom Figma SVG from the public folder */}
              <img 
                src="./icon.svg" 
                alt="My custom logo" 
                className="w-24 h-24 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-transform duration-700 hover:scale-110"
              />

            </div>
          </div>
        </div>

        {/* The overlay caption we had before, pushed back on the Z axis */}
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none"
        >
          <div className="text-[10px] tracking-widest text-gray-400 uppercase">
            Fig. 01 <br />
            <span className="text-gray-500">Architecture / Logic - 2026</span>
          </div>
          <div className="w-8 h-8 rounded-full border border-blue-500/30 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          </div>
        </div>

      </motion.div>
    </div>
  )
}