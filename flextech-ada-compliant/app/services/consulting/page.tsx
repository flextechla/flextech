import type { Metadata } from "next";
import { ClipboardCheck } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";

export const metadata: Metadata = {
  title: "Consulting & Evaluation",
  description:
    "Not sure what you need? Free IT consulting and evaluation in Baton Rouge. Honest expert recommendations with no pressure or upselling.",
};

export default function ConsultingPage() {
  return (
    <ServicePageLayout
      currentHref="/services/consulting"
      icon={
        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center">
          <ClipboardCheck size={32} className="text-purple-400" />
        </div>
      }
      title="Consulting & Evaluation"
      description="Not sure what you need? We'll evaluate your setup and give honest, expert recommendations — no pressure, no upselling. Just straightforward advice you can trust."
      features={[
        "Full technology assessment for home or business",
        "Network infrastructure evaluation",
        "Security vulnerability assessment",
        "Hardware and software recommendations",
        "Budget-friendly upgrade planning",
        "Cloud migration consulting",
        "Vendor selection guidance",
        "Written report with prioritized recommendations",
      ]}
      details={[
        "Schedule a free initial call. We'll discuss your current setup, pain points, and goals to understand your situation.",
        "We visit your location to evaluate your hardware, software, network, and security posture firsthand.",
        "We compile our findings into a clear, jargon-free report with prioritized recommendations and realistic budget estimates.",
        "We walk you through the report, answer all your questions, and help you decide on next steps — with zero pressure to buy anything from us.",
      ]}
    />
  );
}
