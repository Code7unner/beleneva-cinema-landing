"use client"

import posthog from "posthog-js"
import { PostHogProvider as PHProvider } from "posthog-js/react"
import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: "/ingest",
      ui_host: "https://eu.posthog.com",
      defaults: '2025-05-24',
      capture_exceptions: true,
      debug: process.env.NODE_ENV === "development",
    })
  }, [])

  useEffect(() => {
    posthog.capture('$pageview')
  }, [pathname, searchParams])

  return <PHProvider client={posthog}>{children}</PHProvider>
}