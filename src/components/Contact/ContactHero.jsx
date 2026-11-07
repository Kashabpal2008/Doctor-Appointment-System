import {
  FaArrowRight,
  FaHeartPulse,
  FaHouse,
  FaMessage,
  FaShieldHeart,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-16 lg:pb-24">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-green-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-emerald-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-10 flex items-center gap-2 text-sm text-gray-500">
          <Link
            to="/"
            className="flex items-center gap-2 transition-colors hover:text-green-600"
          >
            <FaHouse />
            Home
          </Link>

          <span>/</span>

          <span className="font-semibold text-green-600">Contact Us</span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-bold tracking-wide text-green-700 sm:text-sm">
              <FaHeartPulse />
              WE ARE HERE FOR YOU
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Let's Talk About
              <span className="block text-green-600">Your Health.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Have a question or need help with your healthcare journey?
              Our team is here to guide you, answer your questions, and help
              you take the next step with confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="group inline-flex items-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
              >
                Send Us a Message
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-4 font-semibold text-gray-700 transition-all hover:border-green-300 hover:text-green-700"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-gray-600">
              <span className="flex items-center gap-2">
                <FaShieldHeart className="text-green-600" />
                Patient-Focused Support
              </span>

              <span className="flex items-center gap-2">
                <FaMessage className="text-green-600" />
                Easy Communication
              </span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-3xl bg-green-100 sm:-right-6 sm:-top-6" />
            <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-3xl bg-emerald-100 sm:-bottom-6 sm:-left-6" />

            <div className="relative overflow-hidden rounded-[2rem] border border-green-100 bg-gradient-to-br from-green-50 via-white to-emerald-50 p-6 shadow-2xl shadow-green-900/10 sm:p-9">
              {/* Decorative Circle */}
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border-[28px] border-green-100/50" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-2xl text-white shadow-lg shadow-green-600/20">
                    <FaHeartPulse />
                  </div>

                  <span className="rounded-full border border-green-200 bg-white px-3 py-2 text-xs font-bold text-green-700">
                    YOUR HEALTH MATTERS
                  </span>
                </div>

                <h2 className="mt-8 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  We're Just a Message Away
                </h2>

                <p className="mt-3 leading-7 text-gray-600">
                  Tell us how we can help. We will guide you toward the
                  information or support you need.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-lg text-green-700">
                      <FaMessage />
                    </div>

                    <div>
                      <p className="font-bold text-gray-900">
                        Have a Question?
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Send us your enquiry.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-lg text-emerald-700">
                      <FaShieldHeart />
                    </div>

                    <div>
                      <p className="font-bold text-gray-900">
                        Need Assistance?
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        We are here to help you.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 rounded-2xl bg-green-600 p-5 text-white">
                  <p className="text-sm font-medium text-green-100">
                    FAITHO HEALTHCARE
                  </p>

                  <p className="mt-2 text-lg font-bold">
                    Your Health, Our Priority.
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

export default ContactHero;