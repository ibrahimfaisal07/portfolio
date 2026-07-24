'use client'

import React from 'react'
import Link, { LinkProps } from 'next/link'

export type ButtonVariant = 'primary' | 'white' | 'glass' | 'ghost' | 'icon'

// 1. THE STYLE GENERATOR
export function getButtonClasses(variant: ButtonVariant = 'primary', className = '') {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-out active:scale-95"
  
  let variantClasses = ""
  switch (variant) {
    case 'primary':
      variantClasses = "cursor-pointer text-xs uppercase tracking-wider px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 shadow-md shadow-blue-500/20"
      break
    case 'white':
      variantClasses = "cursor-pointer text-sm px-6 py-2.5 rounded-full bg-white text-[#0B131F] font-semibold hover:bg-gray-200 hover:scale-105"
      break
    case 'glass':
      variantClasses = "cursor-pointer text-sm px-6 py-2.5 rounded-full bg-[rgba(30,58,138,0.15)] text-white backdrop-blur-md border border-[rgba(59,130,246,0.25)] hover:bg-[#1e3a8a]/40 hover:border-[#3b82f6]/50"
      break
    case 'ghost':
      variantClasses = "cursor-pointer text-sm px-4 py-2 text-slate-400 hover:text-white transition-colors"
      break
    case 'icon':
      variantClasses = "cursor-pointer p-2.5 rounded-full bg-[rgba(30,58,138,0.15)] text-white backdrop-blur-md border border-[rgba(59,130,246,0.25)] hover:border-blue-500/50 [&>svg]:pointer-events-none touch-manipulation"
      break
  }

  return `${baseClasses} ${variantClasses} ${className}`.trim()
}

// 2. THE STANDARD BUTTON (for onClick, forms, modals)
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export function Button({ variant, className = '', children, ...props }: ButtonProps) {
  return (
    <button className={getButtonClasses(variant, className)} {...props}>
      {children}
    </button>
  )
}

// 3. THE NEXT.JS LINK BUTTON (for client routing or anchor links)
interface ButtonLinkProps extends LinkProps {
  variant?: ButtonVariant
  className?: string
  children: React.ReactNode
  target?: string
  rel?: string
}

export function ButtonLink({ variant, className = '', children, ...props }: ButtonLinkProps) {
  return (
    <Link className={getButtonClasses(variant, className)} {...props}>
      {children}
    </Link>
  )
}