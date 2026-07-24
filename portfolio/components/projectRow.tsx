'use client'

import React from 'react'
import { ButtonLink } from '@/components/button'

export interface ProjectType {
  id: string
  title: string
  description: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  // We will use this to alternate the layout
  index: number 
}

export default function ProjectRow({ project }: { project: ProjectType }) {
  // If the index is odd (1, 3, 5), the image goes on the right on desktop.
  // On mobile, the image is ALWAYS on top.
  const isReversed = project.index % 2 !== 0

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center group">
      
      {/* 
        IMAGE CONTAINER 
        Order logic: On mobile, always order-1 (top). 
        On desktop, if reversed, order-2 (right), else order-1 (left).
      */}
      <div 
        className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-[var(--blue-border)] bg-[#0c1015] flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02] order-1 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
      >
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
        
        {/* Placeholder for your actual project images */}
        <p className="text-[var(--text-muted)] text-sm tracking-widest uppercase">
          [ {project.title} Image ]
        </p>
      </div>

      {/* 
        TEXT CONTAINER 
        Order logic: On mobile, always order-2 (bottom). 
        On desktop, if reversed, order-1 (left), else order-2 (right).
      */}
      <div className={`flex flex-col items-start order-2 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
        
        {/* Index Number */}
        <div className="text-blue-500 text-xs font-mono tracking-widest mb-4">
          / 0{project.index + 1}
        </div>
        
        {/* Title & Description */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          {project.title}
        </h2>
        <p className="text-lg text-[var(--text-muted)] mb-8 leading-relaxed max-w-md">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span 
              key={tech} 
              className="px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider text-gray-300 border border-gray-800 bg-gray-900/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {project.liveUrl && (
            <ButtonLink href={project.liveUrl} target="_blank" variant="white">
              LIVE DEMO ↗
            </ButtonLink>
          )}
          {project.githubUrl && (
            <ButtonLink href={project.githubUrl} target="_blank" variant="glass">
              GITHUB
            </ButtonLink>
          )}
        </div>

      </div>
    </div>
  )
}