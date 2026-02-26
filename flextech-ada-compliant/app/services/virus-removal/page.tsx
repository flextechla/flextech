import type { Metadata } from "next";
import { ShieldAlert } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";

export const metadata: Metadata = {
  title: "Virus Removal & Protection",
  description:
    "Professional virus, malware, and ransomware removal in Baton Rouge with a 100% guarantee. We also set up ongoing protection to keep you safe.",
};

export default function VirusRemovalPage() {
  return (
    <ServicePageLayout
      currentHref="/services/virus-removal"
      icon={
        <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center">
          <ShieldAlert size={32} className="text-brand-accent" />
        </div>
      }
      title="Virus Removal & Protection"
      description="Malware, spyware, ransomware — we eliminate it all with a 100% guarantee. We don't just clean your system, we fortify it so threats don't come back."
      features={[
        "Complete malware and spyware removal",
        "Ransomware detection and cleanup",
        "Browser hijacker and adware removal",
        "Real-time protection setup",
        "Security software installation and configuration",
        "Safe browsing education and best practices",
        "100% satisfaction guarantee — if it comes back, so do we",
        "Ongoing monitoring options available",
      ]}
      details={[
        "Call us or schedule online. We'll ask a few questions about your symptoms to prepare for the visit.",
        "We come to your location — home or office — and perform a thorough scan and diagnosis of your system.",
        "We remove all detected threats, clean up residual files, and optimize your system performance.",
        "We install and configure protection software, set up safe browsing practices, and make sure you're protected going forward.",
      ]}
    />
  );
}
