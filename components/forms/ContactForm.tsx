"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email";
  }
  if (!data.message.trim()) errors.message = "Message is required";
  return errors;
}

function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Sanitize before processing
    const clean = {
      name: sanitize(form.name),
      email: sanitize(form.email),
      phone: sanitize(form.phone),
      message: sanitize(form.message),
    };

    // TODO: Connect to your email service / API endpoint
    console.log("Form submitted:", clean);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-brand-card border border-brand-accent/20 rounded-2xl p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center mx-auto mb-4">
          <Send size={28} className="text-brand-accent" />
        </div>
        <h3 className="font-display text-xl font-bold mb-2">
          Message Sent!
        </h3>
        <p className="text-text-muted">
          Thanks for reaching out. We&apos;ll get back to you within a few
          hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-brand-card border border-white/5 rounded-2xl p-8">
      <h3 className="font-display text-lg font-bold mb-6">Send a Message</h3>
      <div className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-text-muted mb-1.5"
          >
            Name <span className="text-brand-danger">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-brand-dark border rounded-xl text-text-primary text-[0.95rem] placeholder:text-text-dim focus:outline-none focus:border-brand-accent transition-colors ${
              errors.name ? "border-brand-danger" : "border-white/10"
            }`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-brand-danger text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-text-muted mb-1.5"
          >
            Email <span className="text-brand-danger">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-brand-dark border rounded-xl text-text-primary text-[0.95rem] placeholder:text-text-dim focus:outline-none focus:border-brand-accent transition-colors ${
              errors.email ? "border-brand-danger" : "border-white/10"
            }`}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-brand-danger text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm text-text-muted mb-1.5"
          >
            Phone <span className="text-text-dim">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-brand-dark border border-white/10 rounded-xl text-text-primary text-[0.95rem] placeholder:text-text-dim focus:outline-none focus:border-brand-accent transition-colors"
            placeholder="225-000-0000"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm text-text-muted mb-1.5"
          >
            Message <span className="text-brand-danger">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 bg-brand-dark border rounded-xl text-text-primary text-[0.95rem] placeholder:text-text-dim focus:outline-none focus:border-brand-accent transition-colors resize-none ${
              errors.message ? "border-brand-danger" : "border-white/10"
            }`}
            placeholder="Describe your issue or question..."
          />
          {errors.message && (
            <p className="text-brand-danger text-xs mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-accent text-brand-dark rounded-xl font-semibold text-[0.95rem] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,212,170,0.33)] transition-all duration-300"
        >
          <Send size={18} />
          Send Message
        </button>
      </div>
    </div>
  );
}
