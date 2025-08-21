'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle () {
    const [ theme, setTheme ] = useState<'light' | 'dark'>('light')
    const [ mounted, setMounted ] = useState(false)

    useEffect(() => {
        const stored = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const initial = stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light'
        setTheme(initial)
        document.documentElement.classList.toggle('dark', initial === 'dark')
        setMounted(true)
    }, [])

    const toggleTheme = () => {
        const next = theme === 'light' ? 'dark' : 'light'
        setTheme(next)
        document.documentElement.classList.toggle('dark', next === 'dark')
        localStorage.setItem('theme', next)
    }

    if (!mounted) return null

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-md text-academic-navy dark:text-white hover:bg-academic-light-blue/20 dark:hover:bg-academic-light-blue/40 transition-colors"
        >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
    )
}
