import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--blue-border)] bg-[#0B131F]/50 backdrop-blur-sm mt-32 py-8 px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs tracking-widest text-gray-500 uppercase font-medium z-10 relative">
      
      <div>
        © 2026 IBRAHIM FAISAL
      </div>
      
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
        SYSTEM OPERATIONAL
      </div>

    </footer>
  )
}