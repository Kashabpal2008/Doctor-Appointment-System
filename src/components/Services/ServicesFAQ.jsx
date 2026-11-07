
import { useState } from "react";
import {
  FaPlus,
  FaMinus,
  FaCircleQuestion,
  FaArrowRight,
  FaHeadset,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const faqs = [
  {
    id: 1,
    question: "What healthcare services does Faitho offer?",
    answer:
      "Faitho helps users explore healthcare services across different medical specialties, including general physician consultations, cardiology, pediatrics, dental care, eye care, and more.",
  },
  {
    id: 2,
    question: "How can I book a doctor appointment?",
    answer:
      "Explore the available services, choose the appropriate specialty, and follow the appointment booking process provided on the website. Follow the instructions to submit your appointment request.",
  },
  {
    id: 3,
    question: "Can I choose a specific medical specialist?",
    answer:
      "You can explore different medical specialties to find the type of healthcare professional relevant to your needs. Doctor availability and selection options depend on the booking features offered by Faitho.",
  },
  {
    id: 4,
    question: "Can I cancel or reschedule my appointment?",
    answer:
      "Cancellation and rescheduling depend on the appointment management options available on the website. Check your appointment details or contact the Faitho support team for assistance.",
  },
  {
    id: 5,
    question: "Can I get help choosing the right service?",
    answer:
      "Yes. You can contact the Faitho team for general guidance about available services. For medical advice about your symptoms or treatment, consult a qualified healthcare professional.",
  },
  {
    id: 6,
    question: "How can I contact Faitho for more information?",
    answer:
      "Visit the Contact page to find the available ways to reach the Faitho team. You can ask questions about the services and the appointment process.",
  },
];

const ServicesFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-green-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-bold text-green-700">
            <FaCircleQuestion />
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Got Questions?
            <span className="block text-green-600">
              We Have Answers.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Find answers to common questions about our healthcare services
            and appointment process.
          </p>
        </div>

        {/* FAQ Layout */}
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* Left Information Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 to-emerald-700 p-7 text-white shadow-xl shadow-green-900/10 sm:p-9">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[25px] border-white/10" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl ring-1 ring-white/20">
                <FaHeadset />
              </div>

              <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">
                Still Have Questions?
              </h3>

              <p className="mt-4 leading-7 text-green-50">
                Can't find the information you're looking for? Reach out
                to our team for assistance with our services.
              </p>

              <div className="mt-7 border-t border-white/20 pt-6">
                <p className="text-sm font-medium text-green-100">
                  We're here to help you.
                </p>

                <Link
                  to="/contact"
                  className="group mt-5 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3.5 font-bold text-green-700 transition-all duration-300 hover:-translate-y-1 hover:bg-green-50"
                >
                  Contact Us
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={faq.id}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-green-200 bg-green-50/60 shadow-md shadow-green-900/5"
                      : "border-gray-100 bg-white hover:border-green-200"
                  }`}
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  >
                    <span
                      className={`text-sm font-bold leading-6 sm:text-base ${
                        isOpen ? "text-green-700" : "text-gray-800"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-green-600 text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {isOpen ? (
                        <FaMinus className="text-xs" />
                      ) : (
                        <FaPlus className="text-xs" />
                      )}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 text-sm leading-7 text-gray-600 sm:px-6 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
