"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Phone, Mail, MapPin, ArrowRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import emailjs from "@emailjs/browser"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  company: z.string().min(2, { message: "Company is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  topic: z.string().min(1, { message: "Please select a topic" }),
  message: z.string().min(10, { message: "Message is too short" }),
})

type FormValues = z.infer<typeof formSchema>

export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      topic: "",
      message: "",
    },
  })

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)

    const templateParams = {
      from_name: data.name,
      company: data.company,
      reply_to: data.email,
      phone: data.phone,
      topic: data.topic,
      message: data.message,
    }

    try {      
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // corrected here
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setIsSuccess(true)
      form.reset()
      setTimeout(() => setIsSuccess(false), 3000)
    } catch (error) {
      console.error("EmailJS error:", error)
      alert("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f8f5f0]">
      {/* Hero Section with background image */}
      <section className="relative overflow-hidden bg-[#092c3f]">
        <div className=""></div>
      {/* Background map with dots */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img src="https://img.freepik.com/free-photo/digital-world-map-hologram-blue-background_1379-900.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740" alt="World Map" className="object-cover w-full h-full" />
      </div>

        <div className=" backdrop-blur-sm py-12 px-4 py-10">
          <div className="container mx-auto mx-auto max-w-6xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white/80">Let's Talk Data.</h1>
            <p className="text-lg md:text-xl max-w-2xl text-gray-200">
              Have questions about how Data Safi Analysts can transform your business insights? We're here to help you
              navigate the world of data.
            </p>
          </div>
        </div>
      </section>


      {/* Contact Form and Info Section */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-lg rounded-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Form */}
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-[#092c3f] mb-8">Send A Message</h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Name" {...field} className="h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Company" {...field} className="h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Email" {...field} className="h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Phone" {...field} className="h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="topic"
                      render={({ field }) => (
                        <FormItem>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select a topic" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="data-analysis">Data Analysis</SelectItem>
                              <SelectItem value="business-intelligence">Business Intelligence</SelectItem>
                              <SelectItem value="predictive-analytics">Predictive Analytics</SelectItem>
                              <SelectItem value="data-visualization">Data Visualization</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea placeholder="Your Message" {...field} className="min-h-[120px] resize-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#eb566c] hover:bg-[#eb566c]/90 text-white px-6 py-6 h-12 w-full md:w-auto"
                    >
                      {isSubmitting ? "Sending..." : "Send A Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>

                    {isSuccess && (
                      <div className="text-green-600 font-medium">Your message has been sent successfully!</div>
                    )}
                  </form>
                </Form>
              </div>

              {/* Contact Info */}
              <div className="p-8 md:p-12 bg-white">
                <div className="mb-2">
                  <span className="text-[#006655] text-sm font-medium uppercase tracking-wider">QUICK CONTACT</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#092c3f] mb-6">
                  Have Questions?
                  <br />
                  Get in Touch!
                </h2>

                <p className="text-gray-600 mb-8">
                  Our data experts are ready to answer your questions and help you discover how data analytics can drive
                  your business forward.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#f8c37a] flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Have any question?</p>
                      <p className="font-medium text-[#092c3f]">+254 724 476914</p>
                      <p className="font-medium text-[#092c3f]">+254 737 357906</p>

                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#f8c37a] flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Write email</p>
                      <p className="font-medium text-[#092c3f]">datasafi@datasafidata.co.ke</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#f8c37a] flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Visit anytime</p>
                      <p className="font-medium text-[#092c3f]">Twiga Towers, 6th Floor, Murangá Road, Nairobi, Kenya.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <div className="aspect-video w-full h-[200px] bg-gray-100 rounded-sm overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1713489200!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#092c3f] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Get a Consultation</h2>
              <p className="text-gray-300">
                Our advisers are available online 24/7 for any data analytics questions that you may need. Complete the
                contact form with your details and we'll get in touch with you shortly!
              </p>
            </div>

            <Button
              className="bg-[#eb566c] hover:bg-[#eb566c]/90 text-white px-8 py-6 h-14"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Request a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
