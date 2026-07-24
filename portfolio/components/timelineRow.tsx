'use client'

import React from 'react'

export interface TimelineType {
  id: string
  year: string
  title: string
  description: string
  organization: string
}

export default function TimelineRow({ item }: { item: TimelineType }) {
  return (
    <div className="group flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 py-8 border-b border-gray-800/50 hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-xl">
      
      {/* Year */}
      <div className="md:w-32 flex-shrink-0">
        <span className="text-sm font-mono text-gray-500 tracking-widest">
          {item.year}
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
          {item.title}
        </h3>
        <p className="text-[var(--text-muted)] text-base leading-relaxed max-w-xl">
          {item.description}
        </p>
      </div>

      {/* Organization / Tag */}
      <div className="md:w-48 flex-shrink-0 md:text-right mt-2 md:mt-0">
        <span className="text-sm font-medium text-blue-500 tracking-wide">
          {item.organization}
        </span>
      </div>
      
    </div>
  )
}