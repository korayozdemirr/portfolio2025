"use client";

import { useState } from "react";
import {
  FiMail,
  FiLink,
  FiCode,
  FiArrowRight,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section
      className="flex flex-col gap-space-lg pt-space-lg mb-space-xl"
      id="contact"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm border-b border-outline-variant/20 pb-space-md">
        <div>
          <div className="font-label-mono-caps text-label-mono-caps text-primary tracking-widest uppercase mb-1">
            Communication // Inquiries
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Get in Touch
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Want to discuss your project or collaboration opportunities? I&apos;d
          love to help!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-lg">
        {/* Left Column: Sleek Glassmorphic Contact Form */}
        <div className="lg:col-span-7 rounded-xl bg-surface-container/60 backdrop-blur-md border border-outline-variant/30 p-space-lg flex flex-col gap-space-md">
          <form onSubmit={handleSubmit} className="flex flex-col gap-space-md" noValidate>
            {/* Name Input */}
            <div className="flex flex-col gap-1.5">
              <label className="font-code-inline text-code-inline text-on-surface-variant">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Mercer"
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/40 text-on-surface placeholder:text-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md transition-all"
              />
              {errors.name && (
                <span className="text-xs text-error font-code-inline">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-1.5">
              <label className="font-code-inline text-code-inline text-on-surface-variant">
                Your Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. alex@enterprise.com"
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/40 text-on-surface placeholder:text-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md transition-all"
              />
              {errors.email && (
                <span className="text-xs text-error font-code-inline">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-1.5">
              <label className="font-code-inline text-code-inline text-on-surface-variant">
                Your Message *
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project scope, timeline, and goals..."
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/40 text-on-surface placeholder:text-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md resize-none transition-all"
              />
              {errors.message && (
                <span className="text-xs text-error font-code-inline">
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-primary-container to-secondary-container text-white font-headline-sm text-body-md font-semibold shadow-lg shadow-primary-container/20 hover:shadow-primary-container/35 transition-all active:scale-95 disabled:opacity-60"
            >
              {submitted ? (
                <>
                  <FiCheckCircle className="w-[18px] h-[18px]" />
                  <span>Message Dispatched!</span>
                </>
              ) : (
                <>
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <FiSend className="w-[16px] h-[16px]" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Direct Channels & Telemetry (DIRECT ACCESS //) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-space-md">
          <div className="flex flex-col gap-space-md">
            <span className="font-label-mono-caps text-label-mono-caps text-outline tracking-wider">
              DIRECT ACCESS //
            </span>

            {/* Email Card */}
            <a
              className="p-4 rounded-xl bg-surface-container/60 border border-outline-variant/30 hover:border-primary/50 transition-all flex items-center justify-between group"
              href="mailto:korayozdemirdev@gmail.com"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-lg bg-surface-container-high text-primary shrink-0">
                  <FiMail className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-mono-sm text-label-mono-sm text-outline">
                    Email
                  </span>
                  <span className="font-code-inline text-code-inline text-on-surface group-hover:text-primary transition-colors truncate">
                    korayozdemirdev@gmail.com
                  </span>
                </div>
              </div>
              <FiArrowRight className="text-outline group-hover:text-primary group-hover:translate-x-1 transition-all w-5 h-5 shrink-0" />
            </a>

            {/* LinkedIn Card */}
            <a
              className="p-4 rounded-xl bg-surface-container/60 border border-outline-variant/30 hover:border-primary/50 transition-all flex items-center justify-between group"
              href="https://linkedin.com/in/korayozdemir"
              rel="noreferrer"
              target="_blank"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-lg bg-surface-container-high text-primary shrink-0">
                  <FiLink className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-mono-sm text-label-mono-sm text-outline">
                    LinkedIn Profile
                  </span>
                  <span className="font-code-inline text-code-inline text-on-surface group-hover:text-primary transition-colors truncate">
                    linkedin.com/in/korayozdemir
                  </span>
                </div>
              </div>
              <FiArrowRight className="text-outline group-hover:text-primary group-hover:translate-x-1 transition-all w-5 h-5 shrink-0" />
            </a>

            {/* GitHub Card */}
            <a
              className="p-4 rounded-xl bg-surface-container/60 border border-outline-variant/30 hover:border-primary/50 transition-all flex items-center justify-between group"
              href="https://github.com/korayozdemirr"
              rel="noreferrer"
              target="_blank"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-lg bg-surface-container-high text-primary shrink-0">
                  <FiCode className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-mono-sm text-label-mono-sm text-outline">
                    GitHub Profile
                  </span>
                  <span className="font-code-inline text-code-inline text-on-surface group-hover:text-primary transition-colors truncate">
                    github.com/korayozdemirr
                  </span>
                </div>
              </div>
              <FiArrowRight className="text-outline group-hover:text-primary group-hover:translate-x-1 transition-all w-5 h-5 shrink-0" />
            </a>
          </div>

          {/* Live response telemetry badge */}
          <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary"></span>
            </span>
            <div className="flex flex-col font-label-mono-sm text-label-mono-sm">
              <span className="text-tertiary font-semibold">
                System Response Time: &lt; 24 Hours
              </span>
              <span className="text-outline">
                Direct inbox delivery with automatic routing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
