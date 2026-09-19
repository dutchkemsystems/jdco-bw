"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { track } from "@/lib/analytics"
import { useState } from "react"
import { CheckCircle } from "lucide-react"

// TODO: replace with CMS — form fields
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  organisation: z.string().min(2, "Organisation name is required"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(_data: ContactFormData) {
    // TODO: replace with real API call
    await new Promise((r) => setTimeout(r, 1000))

    track({ name: "cta_clicked", properties: { location: "contact_form", label: "contact_submitted" } })

    setSubmitted(true)
    reset()
  }

  if (submitted) {
    return (
      <div className="border border-line bg-white p-12 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-clay" />
        <h3 className="mt-4 font-serif text-xl font-semibold text-ink">
          Message Sent
        </h3>
        <p className="mt-2 text-sm text-muted-text">
          Thank you for reaching out. Our team will respond within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-clay hover:text-clay-deep transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-medium tracking-wide uppercase text-muted-text mb-2">
            Name *
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="h-11 w-full border border-line bg-white px-4 text-sm text-ink placeholder:text-muted-text/50 focus:outline-none focus:ring-1 focus:ring-clay"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-medium tracking-wide uppercase text-muted-text mb-2">
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="h-11 w-full border border-line bg-white px-4 text-sm text-ink placeholder:text-muted-text/50 focus:outline-none focus:ring-1 focus:ring-clay"
            placeholder="you@organisation.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-medium tracking-wide uppercase text-muted-text mb-2">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="h-11 w-full border border-line bg-white px-4 text-sm text-ink placeholder:text-muted-text/50 focus:outline-none focus:ring-1 focus:ring-clay"
            placeholder="+267 000 0000"
          />
        </div>

        {/* Organisation */}
        <div>
          <label htmlFor="organisation" className="block text-xs font-medium tracking-wide uppercase text-muted-text mb-2">
            Organisation *
          </label>
          <input
            id="organisation"
            type="text"
            {...register("organisation")}
            className="h-11 w-full border border-line bg-white px-4 text-sm text-ink placeholder:text-muted-text/50 focus:outline-none focus:ring-1 focus:ring-clay"
            placeholder="Company or organisation"
          />
          {errors.organisation && (
            <p className="mt-1 text-xs text-destructive">{errors.organisation.message}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-xs font-medium tracking-wide uppercase text-muted-text mb-2">
          Subject *
        </label>
        <input
          id="subject"
          type="text"
          {...register("subject")}
          className="h-11 w-full border border-line bg-white px-4 text-sm text-ink placeholder:text-muted-text/50 focus:outline-none focus:ring-1 focus:ring-clay"
          placeholder="How can we help?"
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-destructive">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-medium tracking-wide uppercase text-muted-text mb-2">
          Message *
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          className="w-full border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted-text/50 focus:outline-none focus:ring-1 focus:ring-clay resize-none"
          placeholder="Tell us about your project, requirements, or question..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="h-11 px-8 bg-clay text-white text-sm font-medium tracking-wide uppercase hover:bg-clay-deep transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}
