
import {
  FaArrowRight,
  FaHeartPulse,
  FaShieldHeart,
  FaUserDoctor,
  FaCalendarCheck,
  FaCheck,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-green-200/40 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-emerald-100/60 blur-3xl" />

      {/* Main Container */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left Content */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 shadow-sm">
            <FaHeartPulse className="text-green-600" />

            <span className="text-xs font-bold tracking-wider text-green-700 sm:text-sm">
              YOUR HEALTH, OUR PRIORITY
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-7 text-4xl font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Healthcare Services
            <span className="mt-2 block text-green-600">
              Designed Around You.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            Discover healthcare services tailored to your needs. From general
            consultations to specialized care, Faitho helps you take the next
            step toward better health with confidence.
          </p>

          {/* Features */}
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <FaCheck className="text-green-600" />
              Easy Appointments
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <FaCheck className="text-green-600" />
              Multiple Specialties
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#medical-specialties"
              className="group inline-flex items-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white shadow-lg shadow-green-600/20 transition duration-300 hover:-translate-y-1 hover:bg-green-700"
            >
              Explore Services

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-4 font-semibold text-gray-700 transition duration-300 hover:border-green-300 hover:text-green-700"
            >
              Contact Us
            </Link>
          </div>

          {/* Trust Information */}
          <div className="mt-10 flex items-center gap-4 border-t border-green-100 pt-7">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-xl text-green-700">
              <FaShieldHeart />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Your Health Comes First
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                Explore care options to find the support you need.
              </p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-5 shadow-2xl shadow-green-900/10 sm:p-7">
            {/* Card Header */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Welcome to Faitho
                </p>

                <h2 className="mt-1 text-xl font-extrabold text-gray-900 sm:text-2xl">
                  Care That Matters
                </h2>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-xl text-green-600">
                <FaHeartPulse />
              </div>
            </div>

            {/* Healthcare Illustration */}
            <div className="relative mt-6 flex min-h-64 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-green-100 via-emerald-50 to-green-50 sm:min-h-72">
              {/* Decorative Circles */}
              <div className="absolute h-52 w-52 rounded-full border border-green-200 sm:h-60 sm:w-60" />

              <div className="absolute h-40 w-40 rounded-full border border-green-200/80 sm:h-48 sm:w-48" />

              {/* Main Icon */}
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-8 border-white bg-green-600 text-white shadow-xl shadow-green-700/20 sm:h-44 sm:w-44">
                <FaUserDoctor className="text-7xl sm:text-8xl" />

                {/* Heart Badge */}
                <div className="absolute -right-2 top-3 flex h-12 w-12 items-center justify-center rounded-2xl border-4 border-white bg-white text-xl text-green-600 shadow-lg">
                  <FaHeartPulse />
                </div>
              </div>

              {/* Floating Calendar */}
              <div className="absolute bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-white bg-white p-3 shadow-lg sm:bottom-7 sm:left-6 sm:p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-lg text-green-600">
                  <FaCalendarCheck />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Book an Appointment
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Simple & Convenient
                  </p>
                </div>
              </div>

              {/* Floating Shield */}
              <div className="absolute right-4 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white text-xl text-green-600 shadow-lg sm:right-7 sm:top-7">
                <FaShieldHeart />
              </div>
            </div>

            {/* Bottom Information */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-green-50 p-4">
                <div className="flex items-center gap-2">
                  <FaUserDoctor className="text-lg text-green-600" />

                  <span className="text-sm font-bold text-gray-800">
                    Expert Care
                  </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-gray-500">
                  Explore medical specialties.
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-4">
                <div className="flex items-center gap-2">
                  <FaCalendarCheck className="text-lg text-green-600" />

                  <span className="text-sm font-bold text-gray-800">
                    Easy Booking
                  </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-gray-500">
                  Take the next step with ease.
                </p>
              </div>
            </div>
          </div>

          {/* Background Accent */}
          <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full bg-green-200/70 blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
