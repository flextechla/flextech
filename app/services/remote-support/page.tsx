import type { Metadata } from "next";
import { Monitor } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";

export const metadata: Metadata = {
  title: "Remote Support",
  description:
    "Fast remote computer support in Baton Rouge. We securely connect to your machine and resolve many issues in minutes — no visit needed.",
};

export default function RemoteSupportPage() {
  return (
    <ServicePageLayout
      currentHref="/services/remote-support"
      icon={
        <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center">
          <Monitor size={32} className="text-cyan-400" />
        </div>
      }
      title="Remote Support"
      description="Quick fixes without the wait. We can securely connect to your machine and resolve many issues in minutes — no need for an on-site visit."
      features={[
        "Secure encrypted remote connection",
        "Software troubleshooting and fixes",
        "Email configuration and issues",
        "Printer and device driver problems",
        "Software installation and updates",
        "Performance tune-ups",
        "Quick virus scans and removal",
        "Available evenings and weekends",
      ]}
      details={[
        "Call us or submit a request online. Describe the issue and we'll determine if it can be resolved remotely.",
        "We send you a secure link to click. This establishes an encrypted connection so we can see and control your screen with your permission.",
        "We diagnose and fix the issue while you watch. You stay in control and can end the session at any time.",
        "Once resolved, the connection is closed. No software remains on your machine. We follow up to make sure everything is working.",
      ]}
    />
  );
}
