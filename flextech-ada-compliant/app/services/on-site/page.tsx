import type { Metadata } from "next";
import { Home } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";

export const metadata: Metadata = {
  title: "On-Site Services",
  description:
    "We come to your home or office in Baton Rouge for computer repair, setup, and troubleshooting. No need to unplug or transport anything.",
};

export default function OnSitePage() {
  return (
    <ServicePageLayout
      currentHref="/services/on-site"
      icon={
        <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center">
          <Home size={32} className="text-brand-blue" />
        </div>
      }
      title="On-Site Services"
      description="We come to your home or office. No need to unplug, transport, or wait in line. Convenient computer service on your schedule, right where you need it."
      features={[
        "Home and office computer repair",
        "New computer setup and data transfer",
        "Printer and peripheral installation",
        "Network troubleshooting and setup",
        "Hardware upgrades (RAM, SSD, etc.)",
        "Software installation and configuration",
        "System tune-ups and optimization",
        "Flexible scheduling including evenings",
      ]}
      details={[
        "Contact us by phone or online. Describe the issue and we'll give you a time estimate and quote.",
        "We arrive at your home or office at the scheduled time with all the tools and parts we typically need.",
        "We diagnose and fix the issue on-site. If parts are needed, we'll source them and return to complete the job.",
        "We test everything thoroughly, explain what we did, and make sure you're satisfied before we leave.",
      ]}
    />
  );
}
