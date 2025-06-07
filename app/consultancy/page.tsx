import ConsultationCta from "@/components/consultations/ConsultationCta"
import DataSolutions from "@/components/consultations/DataSolutions"
import ConsultationIndustries from "@/components/consultations/ConsultationIndustries"
import ConsultationMethodology from "@/components/consultations/ConsultationMethodology"
import ConsultationServices from "@/components/consultations/ConsultationServices"
import ConsultationSuccessStory from "@/components/consultations/ConsultationSuccessStory"
import type { Metadata } from "next"
import ConsultancyHero from "@/components/consultations/ConsultancyHero"
import WhyChooseUs from "@/components/consultations/WhyChooseUs"
import WhyPellets from "@/components/about/WhyPellets"

export const metadata: Metadata = {
  title: "Data Analytics Consultancy | Powering Smarter Decisions",
  description:
    "Professional data analytics consultancy services to help businesses make smarter decisions through data engineering, science, and visualization.",
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ConsultancyHero/>
      <DataSolutions />
      <ConsultationServices />
      <ConsultationMethodology />
      <ConsultationIndustries />
      <ConsultationSuccessStory />
      <WhyChooseUs />
    </main>
  )
}
