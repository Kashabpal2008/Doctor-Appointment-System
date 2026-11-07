import {
  FaMagnifyingGlass,
  FaUserDoctor,
  FaCalendarCheck,
  FaClipboardCheck,
  FaArrowRight,
  FaHeartPulse,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const steps = [
  {
    id: "01",
    title: "Explore Services",
    description:
      "Browse our healthcare services and discover the medical specialty that matches your needs.",
    icon: FaMagnifyingGlass,
  },
  {
    id: "02",
    title: "Choose a Doctor",
    description:
      "Explore doctors and their specialties to find the right option for your healthcare needs.",
    icon: FaUserDoctor,
  },
  {
    id: "03",
    title: "Book an Appointment",
    description:
      "Submit your details and preferred appointment information through our booking process.",
    icon: FaCalendarCheck,
  },
  {
    id: "04",
    title: "Get Ready for Your Visit",
    description:
      "Review your appointment details and follow the instructions for your upcoming consultation.",
    icon: FaClipboardCheck,
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-green-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-xs font-bold tracking-wide text-green-700 sm:text-sm">
            <FaHeartPulse />
            SIMPLE & CONVENIENT
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            How It <span className="text-green-600">Works</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Taking the next step toward better healthcare should be simple.
            Follow these steps to explore our services and arrange your
            consultation.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Connecting Line — Desktop */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden border-t-2 border-dashed border-green-200 lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.id}
                className="group relative flex h-full flex-col items-center rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5 sm:p-8"
              >
                {/* Number and Icon */}
                <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-green-100 text-3xl text-green-600 shadow-md transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <Icon aria-hidden="true" />

                  <span className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-xs font-bold text-white">
                    {step.id}
                  </span>
                </div>

                {/* Step Content */}
                <h3 className="mt-7 text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-green-700 sm:text-xl">
                  {step.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-gray-600 sm:text-base">
                  {step.description}
                </p>

                {/* Bottom Accent */}
                <div className="mx-auto mt-6 h-1 w-10 shrink-0 rounded-full bg-green-200 transition-all duration-300 group-hover:w-20 group-hover:bg-green-500" />
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-3xl border border-green-100 bg-white p-6 shadow-sm sm:mt-14 sm:p-10">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div className="max-w-2xl">
              <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-green-600 sm:text-sm md:justify-start">
                <FaHeartPulse aria-hidden="true" />
                YOUR HEALTH JOURNEY
              </div>

              <h3 className="mt-3 text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl">
                Ready to Take the Next Step?
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Explore our healthcare services and find the right starting
                point for your consultation.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200"
            >
              Get Started
              <FaArrowRight
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;