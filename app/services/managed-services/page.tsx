import type { Metadata } from "next";
import { Radio } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";

export const metadata: Metadata = {
  title: "Managed Services",
  description:
    "Proactive IT monitoring, maintenance, and support for businesses in Baton Rouge. We keep your systems running so you can focus on growth.",
};

export default function ManagedServicesPage() {
  return (
    <ServicePageLayout
      currentHref="/services/managed-services"
      icon={
        <div className="w-16 h-16 rounded-2xl bg-brand-danger/10 flex items-center justify-center">
          <Radio size={32} className="text-brand-danger" />
        </div>
      }
      title="Managed Services"
      description="Proactive monitoring, maintenance, and support for businesses. We keep your systems running smoothly so you can focus on what you do best — growing your business."
      features={[
        "24/7 system monitoring and alerts",
        "Proactive maintenance and patch management",
        "Antivirus and security management",
        "Backup monitoring and verification",
        "Help desk support for your team",
        "Network performance monitoring",
        "Monthly health reports",
        "Priority response for critical issues",
      ]}
      details={[
        "We start with a full audit of your current IT infrastructure to understand your environment and identify vulnerabilities.",
        "We design a managed services plan tailored to your business size, budget, and needs. No cookie-cutter packages.",
        "We deploy monitoring agents and security tools across your systems. Everything runs silently in the background.",
        "We proactively manage your IT environment — fixing issues before they become problems and keeping you informed with regular reports.",
      ]}
    />
  );
}
