'use client'

import { useState } from 'react'
import { ArrowRight, Contact, Icon, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Button, ButtonLink } from '@/components/button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    // The outer wrapper centers the pill and handles the fixed positioning
    <div className="fixed top-6 inset-x-4 md:inset-x-0 flex flex-col items-center z-50">
      
      {/* Main Floating Glass Pill */}
      <nav className="glass-panel w-full max-w-4xl rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300">
        
        {/* LEFT: Logo & Brand Name */}
        <Link href="/" className="flex items-center gap-3 group">
            <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300"></span>
            <div className="flex items-center gap-2">
                <span className="text-white text-sm font-medium tracking-widest uppercase">
                Ibrahim Faisal
                </span>
                <span className="text-gray-500 font-light">/</span>
                {/* Make sure you added the .font-arabic class to your globals.css! */}
                <span className="font-arabic text-gray-400 text-base tracking-wide mt-0.5">
                إبراهيم فيصل
                </span>
            </div>
        </Link>

        {/* CENTER: Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[var(--text-muted)] text-sm font-medium">
          <Link href="#work" className="hover:text-white transition-colors">Work</Link>
          <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
          <Link href="#stack" className="hover:text-white transition-colors">Stack</Link>
          <Link href="#connect" className="hover:text-white transition-colors">Connect</Link>
        </div>

        {/* RIGHT: Desktop CTA */}
        <div className="hidden md:block">
          <ButtonLink href="#contact" variant="primary">
            CONTACT <ArrowRight/>
          </ButtonLink>
        </div>

        {/* RIGHT: Mobile Hamburger */}
        <div className="md:hidden">
          <Button
            variant="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            className="!p-2 border-none bg-transparent hover:bg-blue-900/30"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN (Floating Glass Card) */}
      <div 
        className={`w-full max-w-4xl origin-top transition-all duration-300 ease-out md:hidden ${
          isOpen ? 'scale-y-100 opacity-100 mt-3' : 'scale-y-0 opacity-0 h-0 overflow-hidden'
        }`}
      >
        <div className="glass-panel rounded-3xl p-4 flex flex-col space-y-1">
          <ButtonLink href="#work" variant="ghost" className="flex justify-start text-base" onClick={() => setIsOpen(false)}>
            Work
          </ButtonLink>
          <ButtonLink href="#experience" variant="ghost" className="flex justify-start text-base" onClick={() => setIsOpen(false)}>
            Experience
          </ButtonLink>
          <ButtonLink href="#stack" variant="ghost" className="flex justify-start text-base" onClick={() => setIsOpen(false)}>
            Stack
          </ButtonLink>
          <ButtonLink href="#connect" variant="ghost" className="flex justify-start text-base" onClick={() => setIsOpen(false)}>
            Connect
          </ButtonLink>
          
          <div className="pt-4 mt-2 border-t border-[var(--blue-border)]">
            <ButtonLink 
              href="#contact" 
              variant="primary" 
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              CONTACT <ArrowRight />
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  )
}