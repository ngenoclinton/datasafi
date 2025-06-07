"use client"

import { useState, type FormEvent, type ChangeEvent } from "react"
import { ArrowRight, Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
}

export default function QuickContact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Replace these with your actual EmailJS service, template, and user IDs
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          reply_to: formData.email,
          phone_number: formData.phone,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY",
      )

      setSubmitStatus("success")
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative py-16 overflow-hidden bg-[#092c3f] ">
      {/* Background map with dots */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img src="https://img.freepik.com/free-photo/digital-world-map-hologram-blue-background_1379-900.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740" alt="World Map" className="object-cover w-full h-full" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  items-start ">
          {/* Contact form */}
          <div className="text-white">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b-2 ${
                      errors.firstName ? "border-red-500" : "border-white/50"
                    } px-0 py-2 text-white placeholder-white/70 focus:outline-none focus:border-[#e8ff8d] transition-colors`}
                    placeholder="First Name"
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-[#eb566c]">{errors.firstName}</p>}
                </div>

                <div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b-2 ${
                      errors.lastName ? "border-red-500" : "border-white/50"
                    } px-0 py-2 text-white placeholder-white/70 focus:outline-none focus:border-[#e8ff8d] transition-colors`}
                    placeholder="Last Name"
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-[#eb566c]">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b-2 ${
                      errors.email ? "border-red-500" : "border-white/50"
                    } px-0 py-2 text-white placeholder-white/70 focus:outline-none focus:border-[#e8ff8d] transition-colors`}
                    placeholder="Email Address"
                  />
                  {errors.email && <p className="mt-1 text-sm text-[#eb566c]">{errors.email}</p>}
                </div>

                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b-2 ${
                      errors.phone ? "border-red-500" : "border-white/50"
                    } px-0 py-2 text-white placeholder-white/70 focus:outline-none focus:border-[#e8ff8d] transition-colors`}
                    placeholder="Phone Number"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-[#eb566c]">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full bg-transparent border-b-2 ${
                    errors.message ? "border-red-500" : "border-white/50"
                  } px-0 py-2 text-white placeholder-white/70 focus:outline-none focus:border-[#e8ff8d] transition-colors resize-none`}
                  placeholder="Your Message"
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-[#eb566c]">{errors.message}</p>}
              </div>

              {submitStatus === "success" && (
                <div className="p-3 bg-[#e8ff8d]/20 text-[#e8ff8d] rounded-md">
                  Your message has been sent successfully! We'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-3 bg-[#eb566c]/20 text-[#eb566c] rounded-md">
                  There was an error sending your message. Please try again later.
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-[#e8ff8d] hover:border-[#e8ff8d] hover:text-[#092c3f] transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact information */}
          <div className="text-white mt-8 lg:mt-0">
            <p className="text-sm uppercase tracking-wider mb-2">Quick Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Contact for any
              <br />
              Kind of Information
            </h2>

            <div className="mt-12">
              <p className="text-white/70 mb-2">Call us at this number</p>
              <div className="">
              <p className="text-lg font-bold text-white mb-1">+254 724 476914</p>
              <p className="text-lg font-bold text-white mb-1">+254 737 357906</p>

              </div>
              <p className="text-sm semibold text-white mb-1">edwin.lumiti@pelletsdata.co.ke

</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
