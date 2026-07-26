'use client'

import React from 'react'

export interface ExpertiseCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
}

export default function ExpertiseCard({ title, description, icon, className = '' }: ExpertiseCardProps) {
  return (
    <div 
      className={`p-8 rounded-2xl border border-[var(--blue-border)] bg-[#0c1015]/80 backdrop-blur-sm flex flex-col justify-between hover:bg-[#121A27] hover:border-blue-500/50 transition-all duration-300 group ${className}`}
    >
      <div className="text-blue-500 mb-16 transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 origin-top-left">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{title}</h3>
        <p className="text-[var(--text-muted)] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}