'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { X } from 'lucide-react'

interface ScheduleModalContext {
  open: () => void
  close: () => void
}

const ScheduleModalContext = createContext<ScheduleModalContext | undefined>(undefined)

export const useScheduleModal = () => {
  const ctx = useContext(ScheduleModalContext)
  if (!ctx) {
    throw new Error('useScheduleModal must be used within ScheduleModalProvider')
  }
  return ctx
}

export const ScheduleModalProvider = ({ children }: { children: ReactNode }) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <ScheduleModalContext.Provider value={{ open, close }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={close} />
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-3xl h-[80vh] overflow-hidden">
            <button onClick={close} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <X className="w-5 h-5" />
            </button>
            <iframe
              src="https://cal.com/thebayarea/consultation?embed=1"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      )}
    </ScheduleModalContext.Provider>
  )
}

