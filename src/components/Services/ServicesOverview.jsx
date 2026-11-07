
import {
  FaUserDoctor,
  FaCalendarCheck,
  FaHeartPulse,
  FaArrowRight,
  FaStethoscope,
  FaShieldHeart,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const overviewCards = [
  {
    id: 1,
    icon: FaStethoscope,
    title: "General Healthcare",
    description:
      "Get guidance for everyday health concerns, routine consultations, and preventive healthcare.",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 2,
    icon: FaHeartPulse,
    title: "Specialist Consultations",
    description:
      "Explore medical specialties to find the right healthcare professional for your needs.",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
  },
  {
    id: 3,
    icon: FaCalendarCheck,
    title: "Easy Appointment Booking",
    description:
      "Discover a convenient way to explore services and take the next step toward a consultation.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
];

const ServicesOverview = () => {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            <FaHeartPulse />
            HEALTHCARE MADE SIMPLE
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Everything You Need for
            <span className="block text-green-600">
              Better Healthcare
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Explore healthcare options designed to help you understand
            your needs, discover medical specialties, and find your next
            step toward better health.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {overviewCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.id}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5 sm:p-8"
              >
                {/* Decorative Background */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-green-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110 ${card.iconBg} ${card.iconColor}`}
                >
                  <Icon />
                </div>

                {/* Content */}
                <h3 className="relative mt-7 text-xl font-bold text-gray-900 sm:text-2xl">
                  {card.title}
                </h3>

                <p className="relative mt-4 min-h-20 text-sm leading-7 text-gray-600 sm:text-base">
                  {card.description}
                </p>

                {/* Link */}
                <a
                  href="#medical-specialties"
                  className="relative mt-6 inline-flex items-center gap-2 font-semibold text-green-700 transition-all duration-300 hover:gap-3"
                >
                  Explore More
                  <FaArrowRight className="text-sm" />
                </a>
              </article>
            );
          })}
        </div>

        {/* Bottom Information Banner */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 p-7 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-2xl text-white ring-1 ring-white/20">
                <FaShieldHeart />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  Your Health Deserves Attention
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-green-50 sm:text-base">
                  Explore available healthcare services and make informed
                  decisions about your next consultation.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-green-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-green-50"
            >
              Get in Touch
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
            <FaUserDoctor />
          </div>

          <p className="max-w-2xl text-sm leading-6 text-gray-500">
            Choose a healthcare service based on your needs. A qualified
            healthcare professional can guide you on appropriate care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
