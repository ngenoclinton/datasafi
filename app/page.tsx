import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  ChevronRight,
  Database,
  Shield,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import HowWeDoIt from "@/components/Home/HowWeDoIt";
import IndustriesSection from "@/components/Home/Industries";
import TeamSection from "@/components/Home/TeamSection";
import QuickContact from "@/components/Home/QuickContact";
import WhatWeProvide from "@/components/Home/servicesection/WhatWeProvide";
import Hero from "@/components/Home/hero/hero";
import SolutionHighlights from "@/components/Home/SolutionHighlights";
import Trainings from "@/components/Home/OurTrainings";
import CTASection from "@/components/CTAWithContent";
export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <SolutionHighlights />
        <WhatWeProvide />
        <HowWeDoIt />
        <Trainings />
        <IndustriesSection />
        {/* <TeamSection /> */}
        {/* Cta Section */}
        <CTASection />
      </main>
    </div>
  );
}
