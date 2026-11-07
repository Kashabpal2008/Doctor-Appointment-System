
import { FaArrowRight, FaUserDoctor } from "react-icons/fa6";

const CTA = () => {
  return (
<section className="bg-white px-15 py-10">
      <div className="w-full">
        <div
          className="relative overflow-hidden rounded-2xl
                     bg-green-600 px-6 py-12 sm:px-10
                     lg:px-16 lg:py-14"
        >
          {/* Background Decoration */}
          <div className="absolute -top-16 -right-16
                          w-56 h-56 rounded-full
                          bg-white/10" />

          <div className="absolute -bottom-20 right-1/4
                          w-48 h-48 rounded-full
                          bg-white/10" />

          {/* Content */}
          <div className="relative z-10 flex flex-col
                          md:flex-row items-center
                          justify-between gap-8">

            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2
                              rounded-full bg-white/15
                              px-4 py-2 text-white text-sm
                              font-medium mb-5">
                <FaUserDoctor />
                Your Health Matters
              </div>

              <h2 className="text-3xl sm:text-4xl
                             font-bold text-white leading-tight">
                Take the First Step
                <br className="hidden sm:block" />
                Towards Better Health
              </h2>

              <p className="mt-4 text-green-50
                            text-sm sm:text-base leading-7">
                Your health deserves the best care.
                Find the right doctor and book your
                appointment with Faitho today.
              </p>
            </div>

            {/* Button */}
            <div className="relative z-10 shrink-0">
              <a
                href="/services"
                className="inline-flex items-center
                           justify-center gap-3
                           bg-white text-green-700
                           font-semibold px-6 py-4
                           rounded-xl shadow-md
                           hover:bg-green-50
                           hover:shadow-lg
                           transition-all duration-300
                           group"
              >
                Book an Appointment

                <FaArrowRight
                  className="group-hover:translate-x-1
                             transition-transform duration-300"
                />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
