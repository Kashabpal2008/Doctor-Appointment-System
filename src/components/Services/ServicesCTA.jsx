
import {
  FaArrowRight,
  FaHeartPulse,
  FaCalendarCheck,
  FaUserDoctor,
  FaShieldHeart,
  FaCheck,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServicesCTA = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Main CTA Card */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-green-700 via-green-600 to-emerald-600 px-6 py-12 shadow-2xl shadow-green-900/15 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Background Decorations */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" />

          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl" />

          <div className="pointer-events-none absolute bottom-0 right-0 h-1/2 w-1/2 bg-gradient-to-tl from-white/5 to-transparent" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <FaHeartPulse className="text-white" />

                <span className="text-xs font-bold tracking-wider text-green-50 sm:text-sm">
                  YOUR HEALTH MATTERS
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Take the Next Step
                <span className="block text-green-100">
                  Toward Better Health.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-base leading-8 text-green-50 sm:text-lg">
                Explore our healthcare services and find the right starting
                point for your needs. Faitho is here to help you navigate
                your healthcare journey.
              </p>

              {/* Benefits */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
                {[
                  "Explore Medical Specialties",
                  "Simple Appointment Process",
                  "Patient-Focused Approach",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-white"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs">
                      <FaCheck />
                    </span>

                    {item}
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-green-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-50"
                >
                  Book an Appointment

                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/30 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="relative mx-auto w-full max-w-sm">
              {/* Main Card */}
              <div className="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md sm:p-7">
                {/* Icon */}
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-4xl text-green-600 shadow-xl">
                  <FaUserDoctor />
                </div>

                <h3 className="mt-7 text-2xl font-extrabold text-white">
                  Care Starts Here
                </h3>

                <p className="mt-3 text-sm leading-7 text-green-50">
                  Find healthcare information and explore services that
                  support your well-being.
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-white/20" />

                {/* Feature Items */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-lg text-white">
                      <FaCalendarCheck />
                    </div>

                    <div>
                      <h4 className="font-bold text-white">
                        Convenient Booking
                      </h4>

                      <p className="mt-1 text-xs text-green-100">
                        Explore the appointment process
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-lg text-white">
                      <FaShieldHeart />
                    </div>

                    <div>
                      <h4 className="font-bold text-white">
                        Patient-Focused Care
                      </h4>

                      <p className="mt-1 text-xs text-green-100">
                        Healthcare information in one place
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Heart Icon */}
              <div className="absolute -right-4 -top-4 flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-green-600 bg-white text-2xl text-green-600 shadow-lg">
                <FaHeartPulse />
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-green-100 bg-white p-4 shadow-xl sm:-left-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-xl text-green-600">
                  <FaShieldHeart />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Your Health First
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Start exploring today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
