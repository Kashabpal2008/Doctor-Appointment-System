import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaClock,
  FaArrowRight,
} from "react-icons/fa6";

const contactDetails = [
  {
    id: 1,
    title: "Email Us",
    description: "Have a question? Send us an email.",
    value: "hello@faitho.com",
    icon: FaEnvelope,
    link: "mailto:hello@faitho.com",
    label: "Send an Email",
  },
  {
    id: 2,
    title: "Call Us",
    description: "Need assistance? Get in touch.",
    value: "+91 XXXXX XXXXX",
    icon: FaPhone,
    link: "tel:+91",
    label: "Call Our Team",
  },
  {
    id: 3,
    title: "Our Location",
    description: "We are happy to hear from you.",
    value: "Noida, Uttar Pradesh, India",
    icon: FaLocationDot,
    link: null,
    label: "Our Location",
  },
  {
    id: 4,
    title: "Working Hours",
    description: "Plan your communication with us.",
    value: "Monday – Saturday",
    icon: FaClock,
    link: null,
    label: "Availability may vary",
  },
];

const ContactInfo = () => {
  return (
    <section className="bg-gray-50 px-5 py-16 sm:px-8 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            GET IN TOUCH
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            We'd Love to <span className="text-green-600">Hear From You</span>
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Choose the most convenient way to connect with the Faitho team.
            We are here to make your experience easier.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-2xl text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>

                <p className="mt-4 break-words font-semibold text-gray-800">
                  {item.value}
                </p>

                {item.link ? (
                  <a
                    href={item.link}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green-600 transition-colors hover:text-green-800"
                  >
                    {item.label}
                    <FaArrowRight />
                  </a>
                ) : (
                  <span className="mt-5 inline-block text-sm font-semibold text-green-600">
                    {item.label}
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;