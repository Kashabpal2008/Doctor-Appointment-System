import { useState } from "react";
import {
  FaArrowRight,
  FaMinus,
  FaPlus,
  FaCircleQuestion,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How can I contact the Faitho team?",
    answer:
      "You can use the contact form on this page or contact us through the email and phone details listed above. Please make sure to replace the sample contact details with your actual support information.",
  },
  {
    question: "How can I request a doctor appointment?",
    answer:
      "Visit our Services page to explore healthcare options. Use the appointment booking process available on the website, if configured, to submit your preferred details.",
  },
  {
    question: "Can I ask questions about your healthcare services?",
    answer:
      "Yes. Select General Enquiry or Healthcare Services in the contact form and describe your question. Avoid including sensitive personal or medical information in a general enquiry.",
  },
  {
    question: "How will I know if my message has been received?",
    answer:
      "The current demo form displays an on-screen confirmation only. To receive real messages, the form needs to be connected to a backend or a secure form service.",
  },
  {
    question: "Can I change my appointment details?",
    answer:
      "If appointment management is enabled on the website, use its available booking or contact process to request a change. Any change should be confirmed through the actual service.",
  },
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-gray-50 px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-bold text-green-700">
            <FaCircleQuestion />
            QUICK ANSWERS
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
            Frequently Asked
            <span className="block text-green-600">Questions</span>
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Find answers to common questions about contacting us, exploring
            services, and requesting appointments.
          </p>

          <div className="mt-8 rounded-3xl bg-green-600 p-7 text-white sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-2xl">
              <FaCircleQuestion />
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Still Have Questions?
            </h3>

            <p className="mt-3 text-sm leading-7 text-green-50">
              If you cannot find the answer you need, send us your enquiry
              using the contact form.
            </p>

            <a
              href="#contact-form"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-green-700 transition-all hover:bg-green-50"
            >
              Contact Us
              <FaArrowRight />
            </a>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `contact-faq-answer-${index}`;

            return (
              <article
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-green-200 shadow-lg shadow-green-900/5"
                    : "border-gray-100 shadow-sm hover:border-green-100"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                >
                  <span
                    className={`text-base font-bold sm:text-lg ${
                      isOpen ? "text-green-700" : "text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen
                        ? "bg-green-600 text-white"
                        : "bg-green-50 text-green-700"
                    }`}
                  >
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                {isOpen && (
                  <div id={answerId} className="px-5 pb-6 sm:px-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-sm leading-7 text-gray-600 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </article>
            );
          })}

          <div className="pt-2">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold text-green-700 transition-colors hover:text-green-900"
            >
              Explore Our Services
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;