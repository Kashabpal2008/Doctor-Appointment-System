import { useState } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaComment,
  FaPhone,
  FaUser,
  FaHeart,
} from "react-icons/fa";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend demo only. Connect a backend/API to deliver real messages.
    setSubmitted(true);
    setFormData(initialForm);
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100";

  return (
    <section
      id="contact-form"
      className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 lg:px-16 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-xl shadow-gray-900/5 lg:grid-cols-5">
        {/* Left Information Panel */}
        <div className="relative overflow-hidden bg-green-600 p-7 text-white sm:p-10 lg:col-span-2 lg:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-400/20 blur-2xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-wider text-white sm:text-sm">
              <FaHeart />
              LET'S CONNECT
            </span>

            <h2 className="mt-7 text-3xl font-extrabold leading-tight sm:text-4xl">
              Get in Touch
              <span className="mt-1 block text-green-100">
                With Our Team.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-green-50 sm:text-base">
              Have a question about our healthcare services? Send us a
              message, and let us know how we can help you.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-lg">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-bold">Email Us</h3>
                  <p className="mt-1 break-all text-sm text-green-100">
                    hello@faitho.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-lg">
                  <FaPhone />
                </div>

                <div>
                  <h3 className="font-bold">Call Us</h3>
                  <p className="mt-1 text-sm text-green-100">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-lg">
                  <FaComment />
                </div>

                <div>
                  <h3 className="font-bold">General Enquiries</h3>
                  <p className="mt-1 text-sm leading-6 text-green-100">
                    Use the form to share your questions or feedback.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/20 pt-6">
              <p className="text-sm font-medium leading-6 text-green-50">
                Your Health, Our Priority.
              </p>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="p-6 sm:p-10 lg:col-span-3 lg:p-12">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 sm:text-sm">
              CONTACT FORM
            </span>

            <h3 className="mt-3 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Send Us a Message
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
              Fill in the details below, and tell us what you need help with.
            </p>
          </div>

          {submitted && (
            <div
              role="status"
              className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800"
            >
              <FaCheckCircle className="mt-1 shrink-0" />

              <div>
                <p className="font-bold">Form submitted successfully!</p>
                <p className="mt-1 text-sm leading-6">
                  This is a frontend demo. Your message has not been sent to
                  an email address or server.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <FaUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    autoComplete="name"
                    className={`${inputClass} pl-11`}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={`${inputClass} pl-11`}
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Phone Number
                </label>

                <div className="relative">
                  <FaPhone className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    autoComplete="tel"
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Subject <span className="text-red-500">*</span>
                </label>

                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Appointment Support">
                    Appointment Support
                  </option>
                  <option value="Our Services">Our Services</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Your Message <span className="text-red-500">*</span>
              </label>

              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={5}
                maxLength={2000}
                className={`${inputClass} resize-y`}
                required
              />

              <p className="mt-2 text-right text-xs text-gray-400">
                {formData.message.length}/2000 characters
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200 sm:w-auto"
            >
              Send Message
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <p className="mt-4 text-xs leading-5 text-gray-400">
              Please avoid sharing passwords, payment details, or sensitive
              medical information in this general contact form.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;