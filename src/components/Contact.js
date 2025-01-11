"use client";

import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const FormInput = ({ label, error, delay, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <input
      {...props}
      className={`form-input ${error ? "form-input-error" : ""}`}
    />
    {error && <p className="error-message">{error}</p>}
  </motion.div>
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
      // For example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

      // Clear form after successful submission
      setFormData({ name: "", email: "", message: "" });
      alert("Thank you for your message! I will get back to you soon.");
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
    // Clear error when user starts typing
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
        <h2 className="section-title">Contact Me</h2>
        <p className="section-description">
          Feel free to reach out! I'd love to hear from you.
        </p>
      </AnimatedSection>

      <AnimatedSection variant="fadeIn" delay={0.2}>
        <form onSubmit={handleSubmit} className="contact-form">
          <FormInput
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            delay={0.3}
          />

          <FormInput
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            delay={0.4}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`form-input ${
                errors.message ? "form-input-error" : ""
              }`}
            />
            {errors.message && (
              <p className="error-message">{errors.message}</p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        <motion.div
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:korayozdemirdev@gmail.com"
            className="social-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope />
            <span>Email</span>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/korayozdemir"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://github.com/yourusername"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
            <span>GitHub</span>
          </motion.a>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}
