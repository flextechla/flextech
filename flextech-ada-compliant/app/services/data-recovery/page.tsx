import type { Metadata } from "next";
import { HardDrive } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";

export const metadata: Metadata = {
  title: "Data Recovery",
  description:
    "Professional data recovery in Baton Rouge. We recover lost photos, documents, and business files from damaged or failed hard drives.",
};

export default function DataRecoveryPage() {
  return (
    <ServicePageLayout
      currentHref="/services/data-recovery"
      icon={
        <div className="w-16 h-16 rounded-2xl bg-brand-warning/10 flex items-center justify-center">
          <HardDrive size={32} className="text-brand-warning" />
        </div>
      }
      title="Data Recovery"
      description="Lost photos, documents, or critical business files? We specialize in recovering data from damaged, corrupted, or failed drives. Don't panic — call us first."
      features={[
        "Recovery from failed or damaged hard drives",
        "Deleted file recovery",
        "SSD and flash drive data recovery",
        "Recovery from corrupted file systems",
        "Photo and video file recovery",
        "Business document and database recovery",
        "External drive and USB recovery",
        "Free evaluation — no data, no charge",
      ]}
      details={[
        "Bring your drive to us or we'll come to you. We perform a free evaluation to assess the damage and likelihood of recovery.",
        "We provide a clear quote before any work begins. No surprises — you approve the cost before we proceed.",
        "Using professional tools and techniques, we extract and recover as much data as possible from the damaged media.",
        "We transfer your recovered files to a new drive or media of your choice and verify everything is intact.",
      ]}
    />
  );
}
