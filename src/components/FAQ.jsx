
import { useState } from "react";

const faqs = [
  {
    question: "How can I book a doctor appointment?",
    answer:
      "Select a doctor, choose your preferred date and time, and book your appointment.",
  },
  {
    question: "Can I choose my preferred doctor?",
    answer:
      "Yes, you can choose a doctor according to your healthcare needs.",
  },
  {
    question: "Can I cancel my appointment?",
    answer:
      "Please check your booking details for available cancellation options.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Explore our general physician, specialist consultation, counselling, and cardiology services.",
  },
  {
    question: "How do I confirm my appointment?",
    answer:
      "Check your booking details to see your appointment status.",
  },
  {
    question: "How can I contact Faitho?",
    answer:
      "Visit our Contact Us page to get in touch with our team.",
  },
];

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <section className="w-full bg-white pt-6 pb-10 px-4 sm:px-6 lg:px-12">
      <div className="w-full max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-black mb-8 w-full">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="w-full space-y-3">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full border border-gray-200
                         rounded-lg overflow-hidden
                         hover:border-green-400
                         transition-colors duration-200"
            >
              {/* Question */}
              <button
                type="button"
                onClick={() =>
                  setOpenFAQ(openFAQ === index ? null : index)
                }
                aria-expanded={openFAQ === index}
                className="w-full flex items-center justify-between
                           gap-4 text-left p-4 sm:p-5
                           bg-white hover:bg-green-50
                           transition-colors duration-200"
              >
                <span className="text-base sm:text-lg font-semibold text-black">
                  {faq.question}
                </span>

                <span className="text-2xl font-medium text-green-600 shrink-0">
                  {openFAQ === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openFAQ === index && (
                <div className="px-4 sm:px-5 pb-4">
                  <p className="text-gray-600 text-sm sm:text-base leading-7">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}

        </div>

        {/* Contact Section */}
        <div className="mt-6 text-center bg-green-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-black mb-2">
            Still Have Questions?
          </h3>

          <p className="text-gray-600 mb-4">
            We are here to help you with your questions.
          </p>

          <a
            href="/contact"
            className="inline-block bg-green-600 text-white
                       px-6 py-3 rounded-lg font-semibold
                       hover:bg-green-700 transition-colors"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
