import {
  FaUserDoctor,
  FaCalendarCheck,
  FaShieldHeart,
  FaHeartPulse,
//   FaClock,
  FaHandHoldingHeart,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const benefits = [
  {
    id: 1,
    title: "Convenient Appointments",
    description:
      "Explore healthcare services and take the next step toward arranging a consultation that suits your needs.",
    icon: FaCalendarCheck,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 2,
    title: "Multiple Specialties",
    description:
      "Discover different medical specialties in one place and explore the care options available to you.",
    icon: FaUserDoctor,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 3,
    title: "Patient-Focused Approach",
    description:
      "Find helpful information that supports you in making informed healthcare decisions.",
    icon: FaHandHoldingHeart,
    color: "bg-rose-100 text-rose-500",
  },
  {
    id: 4,
    title: "Your Privacy Matters",
    description:
      "We believe personal healthcare information should be handled with care and respect.",
    icon: FaShieldHeart,
    color: "bg-purple-100 text-purple-600",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-green-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-bold text-green-700">
              <FaHeartPulse />
              THE FAITHO DIFFERENCE
            </span>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Healthcare That
              <span className="block text-green-600">
                Puts You First.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Finding the right healthcare service should feel simple.
              Faitho brings healthcare information and service options
              together to help you take the next step with confidence.
            </p>

            {/* Highlights */}
            <div className="mt-8 space-y-4">
              {[
                "Explore multiple healthcare specialties",
                "Find information about available services",
                "Navigate your healthcare journey with ease",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs text-green-700">
                    <FaCheck />
                  </span>

                  <p className="text-sm font-medium leading-6 text-gray-700 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
            >
              Get in Touch
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Benefits Grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.id}
                  className={`group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5 sm:p-7 ${
                    benefit.id % 2 === 0 ? "sm:translate-y-8" : ""
                  }`}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110 ${benefit.color}`}
                  >
                    <Icon />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-gray-900 sm:text-xl">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {benefit.description}
                  </p>

                  <div className="mt-5 h-1 w-10 rounded-full bg-green-200 transition-all duration-300 group-hover:w-20 group-hover:bg-green-500" />
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-24 overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 p-7 sm:p-10 lg:mt-32">
          <div className="flex flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
            <div className="flex flex-col items-center gap-4 sm:flex-row md:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-2xl text-white ring-1 ring-white/20">
                <FaHeartPulse />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                  Your Well-Being Matters
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-green-50 sm:text-base">
                  Explore our healthcare services and find the information
                  you need to make your next healthcare decision.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-green-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-green-50"
            >
              Contact Us
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
