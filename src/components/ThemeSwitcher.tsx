'use client'

import { useEffect, useState } from 'react'
import * as Switch from '@radix-ui/react-switch'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isLight = resolvedTheme === `light`
  const oppositeTheme = isLight ? `dark` : `light`

  const toggleTheme = () => setTheme(oppositeTheme)

  return (
    <Switch.Root
      className="relative h-8 w-14 rounded-full border-2 border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-950"
      onCheckedChange={toggleTheme}
    >
      <Switch.Thumb className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-200 transition-transform duration-300 data-[state=checked]:translate-x-6 dark:bg-zinc-800">
        {resolvedTheme === 'dark' ? (
          <Sun className="h-5 w-5 text-yellow-500" />
        ) : (
          <Moon className="h-5 w-5 text-zinc-800" />
        )}
      </Switch.Thumb>
    </Switch.Root>
  )
}
