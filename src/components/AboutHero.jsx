import {
  FaArrowRight,
  FaHeartbeat,
  FaUserMd,
  FaCheckCircle,
  FaStethoscope,
} from "react-icons/fa";

import doctor from "../assets/doctor appoitment.jpg";

const AboutHero = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-15 py-12 md:py-16">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2
                      items-center gap-10 lg:gap-16">

        {/* Left Image */}
        <div className="relative max-w-xl mx-auto w-full">

          {/* Background Shape */}
          <div className="absolute inset-0 bg-green-100
                          rounded-[40px] rotate-3" />

          <div className="relative overflow-hidden rounded-[32px]
                          border-4 border-white shadow-xl">
            <img
              src={doctor}
              alt="Healthcare professional"
              className="w-full h-[360px] sm:h-[450px]
                         lg:h-[520px] object-cover"
            />
          </div>

          {/* Floating Healthcare Card */}
          <div className="absolute -bottom-5 left-3 sm:left-6
                          bg-white rounded-2xl shadow-xl
                          border border-gray-100
                          p-4 sm:p-5 flex items-center gap-4">

            <div className="w-12 h-12 rounded-xl bg-green-100
                            flex items-center justify-center
                            text-green-600 shrink-0">
              <FaStethoscope size={23} />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Quality Healthcare
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Care that puts you first
              </p>
            </div>
          </div>

          {/* Decorative Icon */}
          <div className="absolute -top-5 -right-3 sm:-right-5
                          w-16 h-16 rounded-2xl bg-green-600
                          text-white shadow-lg
                          flex items-center justify-center">
            <FaHeartbeat size={28} />
          </div>
        </div>

        {/* Right Content */}
        <div className="pt-6 lg:pt-0">

          <span className="inline-flex items-center gap-2
                           text-green-700 bg-green-50
                           px-4 py-2 rounded-full
                           text-sm font-semibold">
            <FaHeartbeat />
            GET TO KNOW FAITHO
          </span>

          <h1 className="text-4xl sm:text-5xl
                         xl:text-6xl font-bold
                         leading-tight text-gray-900 mt-6">
            We Care About
            <span className="block text-green-600">
              Your Health.
            </span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg
                        leading-8 mt-6">
            At Faitho, we believe healthcare should be easy
            to explore and convenient to access. We aim to help
            you discover healthcare services and find suitable
            doctors for your needs.
          </p>

          <p className="text-gray-600 leading-7 mt-4">
            Your well-being matters to us. That is why we focus
            on creating a simple, user-friendly experience that
            helps you take the next step in your healthcare journey.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2
                          gap-4 mt-7">

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1 shrink-0" />

              <div>
                <h3 className="font-semibold text-gray-900">
                  Patient First
                </h3>

                <p className="text-sm text-gray-500 mt-1 leading-6">
                  Your needs and comfort matter.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1 shrink-0" />

              <div>
                <h3 className="font-semibold text-gray-900">
                  Simple Booking
                </h3>

                <p className="text-sm text-gray-500 mt-1 leading-6">
                  Explore appointment options easily.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1 shrink-0" />

              <div>
                <h3 className="font-semibold text-gray-900">
                  Easy Navigation
                </h3>

                <p className="text-sm text-gray-500 mt-1 leading-6">
                  Find the information you need.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1 shrink-0" />

              <div>
                <h3 className="font-semibold text-gray-900">
                  Care & Comfort
                </h3>

                <p className="text-sm text-gray-500 mt-1 leading-6">
                  A comfortable healthcare experience.
                </p>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-9">

            <a
              href="/services"
              className="inline-flex items-center gap-3
                         bg-green-600 text-white
                         px-6 py-4 rounded-xl font-semibold
                         hover:bg-green-700
                         shadow-lg shadow-green-600/20
                         transition-all duration-300"
            >
              Explore Services
              <FaArrowRight />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center
                         gap-2 border border-gray-200
                         text-gray-800 px-6 py-4 rounded-xl
                         font-semibold hover:border-green-600
                         hover:text-green-600
                         transition-all duration-300"
            >
              Contact Us
              <FaUserMd />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;