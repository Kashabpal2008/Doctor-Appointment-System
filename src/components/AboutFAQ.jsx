
import { useState } from "react";
import {
  FaPlus,
  FaMinus,
  FaQuestionCircle,
  FaArrowRight,
} from "react-icons/fa";

const faqs = [
  {
    question: "What is Faitho?",
    answer:
      "Faitho is a healthcare platform designed to help users explore healthcare services and find useful information for their healthcare needs.",
  },
  {
    question: "How can I explore healthcare services?",
    answer:
      "Visit our Services page to explore the healthcare categories and options available on the platform.",
  },
  {
    question: "Can I find different types of healthcare services?",
    answer:
      "Faitho is designed to help users explore different healthcare categories, such as general physician services and specialist consultations.",
  },
  {
    question: "How can I contact Faitho?",
    answer:
      "You can visit our Contact page to find the available ways to get in touch with our team.",
  },
  {
    question: "Does Faitho replace a doctor's consultation?",
    answer:
      "No. Faitho is a platform for exploring healthcare services and information. It does not replace professional medical advice, diagnosis, or treatment.",
  },
];

const AboutFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="bg-gray-50 px-4 sm:px-6 lg:px-15 py-16 md:py-20">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Left Content */}
        <div className="lg:sticky lg:top-24">
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            <FaQuestionCircle />
            GOT QUESTIONS?
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 leading-tight">
            Frequently Asked
            <span className="block text-green-600 mt-2">
              Questions
            </span>
          </h2>

          <p className="text-gray-600 leading-8 mt-6 max-w-lg">
            Have questions about Faitho? Find answers to some common
            questions about our platform and how to explore our services.
          </p>

          <div className="mt-8 rounded-2xl bg-white border border-gray-100 p-6 sm:p-7 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center text-xl">
              <FaQuestionCircle  />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-4">
              Still have questions?
            </h3>

            <p className="text-gray-600 leading-7 mt-2">
              Our Contact page is the place to start if you need more
              information about Faitho.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-3 mt-5 text-green-600 font-semibold hover:text-green-700 transition"
            >
              Contact Us
              <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Right FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={faq.question}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-green-200 shadow-lg shadow-green-600/5"
                    : "border-gray-100 hover:border-green-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 sm:p-6"
                >
                  <span
                    className={`font-semibold text-base sm:text-lg ${
                      isOpen ? "text-green-700" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      isOpen
                        ? "bg-green-600 text-white"
                        : "bg-green-50 text-green-600"
                    }`}
                  >
                    {isOpen ? <FaMinus size={13} /> : <FaPlus size={13} />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 leading-7 px-5 sm:px-6 pb-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutFAQ;
