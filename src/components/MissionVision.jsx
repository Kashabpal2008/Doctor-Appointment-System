import {
  FaBullseye,
  FaEye,
  FaHeartbeat,
  FaArrowRight,
} from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-15 py-16 md:py-20">
      <div className="w-full">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            OUR PURPOSE
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-5">
            Our Mission & <span className="text-green-600">Vision</span>
          </h2>

          <p className="text-gray-600 leading-7 mt-5">
            We want to make exploring healthcare services simpler and help
            people take confident steps towards their healthcare needs.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">

          {/* Mission Card */}
          <div className="group relative overflow-hidden bg-green-600 rounded-3xl p-7 sm:p-10 text-white shadow-xl shadow-green-600/15">
            <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-white/10 group-hover:scale-125 transition-transform duration-500" />

            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/15 text-3xl mb-7">
                <FaBullseye />
              </div>

              <p className="text-green-100 font-semibold tracking-widest text-sm">
                OUR MISSION
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold mt-3">
                Healthcare Within Easier Reach
              </h3>

              <p className="text-green-50 leading-8 mt-5">
                Our mission is to create a simple and accessible digital
                experience where people can explore healthcare services,
                discover relevant information, and find suitable options
                for their needs.
              </p>

              <div className="flex items-center gap-3 mt-7 font-semibold">
                <FaHeartbeat />
                <span>Putting people first</span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative overflow-hidden bg-gray-50 border border-gray-100 rounded-3xl p-7 sm:p-10 hover:border-green-200 hover:shadow-xl transition-all duration-300">
            <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-green-100/70 group-hover:scale-125 transition-transform duration-500" />

            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-green-100 text-green-600 text-3xl mb-7">
                <FaEye />
              </div>

              <p className="text-green-600 font-semibold tracking-widest text-sm">
                OUR VISION
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3">
                A Simpler Healthcare Experience
              </h3>

              <p className="text-gray-600 leading-8 mt-5">
                Our vision is to build a trusted and easy-to-use healthcare
                platform that helps people navigate their healthcare journey
                with greater clarity, convenience, and confidence.
              </p>

              <div className="flex items-center gap-3 mt-7 text-green-600 font-semibold">
                <FaHeartbeat />
                <span>Making care easier to explore</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Note */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-10 p-6 sm:p-8 rounded-2xl bg-green-50 border border-green-100">
          <div>
            <h4 className="text-xl font-bold text-gray-900">
              Your Health Journey Matters
            </h4>
            <p className="text-gray-600 mt-2">
              Explore the services available on Faitho.
            </p>
          </div>

          <a
            href="/services"
            className="shrink-0 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-xl font-semibold transition duration-300"
          >
            Explore Services
            <FaArrowRight />
          </a>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
