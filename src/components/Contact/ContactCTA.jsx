import {
  FaArrowRight,
  FaCalendarCheck,
  FaHeartPulse,
  FaShieldHeart,
  FaUserDoctor,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-16 lg:py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-green-600 px-6 py-12 shadow-xl shadow-green-900/10 sm:px-10 sm:py-16 lg:px-16">
        {/* Background Decorations */}
        <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border-[45px] border-white/10" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
          {/* Content */}
          <div className="max-w-3xl text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white">
              <FaHeartPulse />
              YOUR HEALTH, OUR PRIORITY
            </span>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Your Healthcare Journey Starts Here.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-green-50 sm:text-lg">
              Explore our healthcare services and discover the next step
              toward the support you need. Faitho is here to help you navigate
              your healthcare journey.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-4 text-sm font-medium text-white/90 lg:justify-start">
              <span className="flex items-center gap-2">
                <FaShieldHeart />
                Patient-Focused
              </span>

              <span className="flex items-center gap-2">
                <FaHeartPulse />
                Healthcare Support
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-green-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-50"
            >
              <FaUserDoctor />
              Explore Services
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="#contact-form"
              className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/10 px-6 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              <FaCalendarCheck />
              Send an Enquiry
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;