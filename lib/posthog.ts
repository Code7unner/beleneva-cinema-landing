import { PostHog } from "posthog-node"

// NOTE: This is a Node.js client, so you can use it for sending events from the server side to PostHog.
export default function PostHogClient() {
  const posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    flushAt: 1,
    flushInterval: 0,
  })
  return posthogClient
}

// Extend Window interface to include posthog
declare global {
  interface Window {
    posthog: any
  }
}

// Client-side PostHog utility for tracking events
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.posthog) {
    window.posthog.capture(eventName, properties)
  }
}

// Common event tracking functions
export const trackPageView = (pageName: string) => {
  trackEvent('page_viewed', { page_name: pageName })
}

export const trackButtonClick = (buttonName: string, section?: string) => {
  trackEvent('button_clicked', { 
    button_name: buttonName,
    section: section,
    timestamp: new Date().toISOString()
  })
}

export const trackSectionView = (sectionName: string) => {
  trackEvent('section_viewed', { 
    section_name: sectionName,
    timestamp: new Date().toISOString()
  })
}

export const trackCourseInterest = (courseType: string, action: string) => {
  trackEvent('course_interest', {
    course_type: courseType,
    action: action,
    timestamp: new Date().toISOString()
  })
}

export const trackTeacherView = (teacherName: string) => {
  trackEvent('teacher_viewed', {
    teacher_name: teacherName,
    timestamp: new Date().toISOString()
  })
}

export const trackTestimonialView = (testimonialAuthor: string) => {
  trackEvent('testimonial_viewed', {
    author: testimonialAuthor,
    timestamp: new Date().toISOString()
  })
}

export const trackMediaInteraction = (mediaType: 'image' | 'video', mediaName: string) => {
  trackEvent('media_interaction', {
    media_type: mediaType,
    media_name: mediaName,
    timestamp: new Date().toISOString()
  })
}

export const trackPricingView = (planType: string) => {
  trackEvent('pricing_viewed', {
    plan_type: planType,
    timestamp: new Date().toISOString()
  })
}