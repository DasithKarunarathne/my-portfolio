import React, { useState } from "react";
import { Element } from "react-scroll";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate submit
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <Element name="contact">
      <section id="contact" className="py-24 scroll-mt-24 md:scroll-mt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Contact Me</h2>

            <div className="mb-12 flex flex-wrap justify-center gap-6">
              <a
                href="mailto:johndoe@example.com"
                className="flex items-center rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <Mail className="mr-2 h-5 w-5 text-gray-700 dark:text-gray-300" />
                <span className="text-gray-800 dark:text-gray-200">Email</span>
              </a>

              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <Linkedin className="mr-2 h-5 w-5 text-gray-700 dark:text-gray-300" />
                <span className="text-gray-800 dark:text-gray-200">LinkedIn</span>
              </a>

              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <Github className="mr-2 h-5 w-5 text-gray-700 dark:text-gray-300" />
                <span className="text-gray-800 dark:text-gray-200">GitHub</span>
              </a>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-800 sm:p-8">
              <h3 className="mb-6 text-center text-xl font-semibold">Send Me a Message</h3>

              {submitSuccess && (
                <div className="mb-6 rounded-lg bg-green-50 p-3 text-center text-green-700 dark:bg-green-900/20 dark:text-green-300">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center rounded-xl bg-[var(--accent)] px-6 py-3 font-medium text-white shadow-sm transition-colors hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center">
                      <svg className="-ml-1 mr-2 h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="inline-flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
