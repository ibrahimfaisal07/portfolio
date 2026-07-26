'use client'

import { X } from 'lucide-react'
import { Button } from '@/components/button' // Keeping your original UI button import

export function Modal({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title?: string, children: React.ReactNode }) {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 animate-in fade-in duration-200 ease-out" 
      onClick={onClose}
    >
      
      {/* 2. Added `slide-in-from-bottom-4` and changed zoom to `[0.98]` for a buttery-smooth, lag-free pop-up effect */}
      <div 
        className="relative w-full max-w-md bg-[#0c1015] border border-gray-800 rounded-2xl shadow-xl p-5 animate-in fade-in zoom-in-[0.98] slide-in-from-bottom-4 duration-200 ease-out" 
        onClick={e => e.stopPropagation()}
      >
        
        <div className="flex items-center justify-between mb-5">
          {title && <h2 className="text-lg font-bold text-white tracking-tight">{title}</h2>}
          
          <Button variant="ghost" onClick={onClose} className="p-2 rounded-full h-auto text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {children}
      </div>
    </div>
  )
}