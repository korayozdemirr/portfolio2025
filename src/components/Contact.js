"use client";

import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const FormInput = ({ label, error, delay, ...props }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="relative"
  >
    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
      {label}
    </label>
    <input
      {...props}
      className={`form-input ${error ? "form-input-error" : ""}`}
    />
    {error && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="error-message"
      >
        {error}
      </motion.p>
    )}
  </motion.div>
);

const SocialLink = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    className="social-link-card group"
    whileHover={{ scale: 1.05, backgroundColor: "var(--primary)" }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
  >
    <Icon className="w-6 h-6" />
    <span>{label}</span>
    <FaArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
  </motion.a>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      // Add your form submission logic here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      setFormData({ name: "", email: "", message: "" });
      alert("Thank you for your message! I'll get back to you soon.");
    } catch (error) {
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <section
      id="contact"
      className="section-container bg-white dark:bg-gray-800"
    >
      <AnimatedSection variant="slideUp">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-description">
          Want to discuss your project or collaboration opportunities? I'd love
          to help!
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8 w-full max-w-4xl px-4">
        {/* Contact Form */}
        <AnimatedSection variant="fadeIn" delay={0.2}>
          <form onSubmit={handleSubmit} className="contact-form space-y-8">
            <FormInput
              label="Your Name"
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              delay={0.3}
            />

            <FormInput
              label="Your Email"
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              delay={0.4}
            />

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                rows="8"
                value={formData.message}
                onChange={handleChange}
                className={`form-input ${
                  errors.message ? "form-input-error" : ""
                }`}
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="error-message"
                >
                  {errors.message}
                </motion.p>
              )}
            </motion.div>

            <motion.button
              type="submit"
              className="submit-button group"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <motion.div
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Send Message
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </motion.button>
          </form>
        </AnimatedSection>

        {/* Social Links */}
        <AnimatedSection
          variant="fadeIn"
          delay={0.4}
          className="flex flex-col justify-center space-y-4"
        >
          <h3 className="text-xl font-semibold mb-4">Other Ways to Connect</h3>
          <SocialLink
            href="mailto:korayozdemirdev@gmail.com"
            icon={FaEnvelope}
            label="korayozdemirdev@gmail.com"
          />
          <SocialLink
            href="https://linkedin.com/in/korayozdemir"
            icon={FaLinkedin}
            label="LinkedIn Profile"
          />
          <SocialLink
            href="https://github.com/korayozdemirr"
            icon={FaGithub}
            label="GitHub Profile"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
